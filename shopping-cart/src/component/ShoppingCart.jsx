import React, { Component } from "react";
import Product from "./Product";

class ShoppingCart extends Component {
  constructor(props) {
    console.log("constructor-ShoppingCart");
    //Executes when the component is mounted;
    //Initializes the state;
    //For this to work call super class constructor;

    super(props);
    this.state = {
      products: [],
    };
  }

  render() {
    console.log("render-ShoppingCart");

    return (
      <div className="container-fluid">
        <h4>Shopping #Kart</h4>

        <div className="row">
          {this.state.products.map((item) => {
            return (
              <Product
                key={item.id}
                product={item}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              >
                <button className="btn btn-primary">Purchase</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }

  componentDidMount = async () => {
    // Executes after constructor and render method (includes life cycle of child components, if any) of current component;
    // Fetch data from data source;
    let response = await fetch("http://localhost:5000/products", {
      method: "GET",
    });
    let responseData = await response.json();

    console.log(responseData);

    this.setState({ products: responseData });
    console.log("componentDidMount-ShoppingCart");
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(
      "componentDidUpdate - ShopingCart",
      prevProps,
      prevState,
      this.props,
      this.tate
    );
    // if (prevProps.x !== this.props.x) {
    //   //make http call;
    // }
  }

  componentWillUnmount() {
    //Executes when the current instance of current component is being deleted from memory;
    console.log("componentWillUnmount-ShoppingCart");
  }

  componentDidCatch(error, info) {
    // console.log("componenDidCatch-ShoppingCart");
    // console.log(error, info);

    localStorage.lastError = `${error}\n${JSON.stringify(info)}`;
  }

  //Fires when the user clicks on + button;
  handleIncrement = (product, maxValue) => {
    //Use of spread operator to clone the products object(state);
    //Fetching index of selected list item;
    const everyProduct = [...this.state.products];
    const index = everyProduct.indexOf(product);

    //Conditional if statement to check if less than maxValue then update the state;
    if (everyProduct[index].quantity < maxValue) {
      everyProduct[index].quantity++;
    }

    //Update the initial component (parent component) through setState;
    this.setState({ products: everyProduct });
  };

  //Fires when user clicks on - button;
  handleDecrement = (product, minValue) => {
    //Employing the same method as above, just change the ++ to --;
    //Fetching index of selected list item;
    const everyProduct = [...this.state.products];
    const index = everyProduct.indexOf(product);

    //If current quantity of product is greater than minValue, decrease value and update the state;
    if (everyProduct[index].quantity > minValue) {
      everyProduct[index].quantity--;
    }

    //Update the initial component (parent component) through setState;
    this.setState({ products: everyProduct });
  };

  //Creating a handleDelete event handler;
  //Fires when user clicks on the Delete (X) button in the Product component;
  handleDelete = (product) => {
    //Fetching index of selected list item;
    const everyProduct = [...this.state.products];
    const index = everyProduct.indexOf(product);

    if (window.confirm("Please confirm to Delete?")) {
      //Delete product based on index;
      everyProduct.splice(index, 1);

      //Update the initial component (parent component) through setState;
      this.setState({ products: everyProduct });
    }
  };
}

export default ShoppingCart;
