import React, { Component } from "react";

class Product extends Component {
  constructor(props) {
    super(props);

    // console.log("Constructor-Product");

    this.state = {
      product: this.props.product,
    };
  }

  render() {
    // console.log(this.props);

    // console.log("render-Product");

    return (
      <div className="col-lg-6">
        <div className="card m-2">
          <div className="card-body">
            <div className="text-muted">
              # {this.state.product.id}
              {/* Creating a delete button using font-awesome */}
              <span
                className="d-flex justify-content-end hand-icon"
                onClick={() => {
                  this.props.onDelete(this.state.product);
                }}
              >
                <i className="fa fa-times"></i>
              </span>
              {/* Delete button ends */}
            </div>

            <h5 className="pt-1 border-top">
              {this.state.product.nameOfProduct}
            </h5>

            <div>ksh{this.state.product.price}</div>
          </div>
          {/* card-body ends here */}

          {/* passing button from parent to Product through this.props.children */}
          {/* this.props.children is a property that represents content passed from the parent(button) */}
          <div className="card-footer d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <span
                className="badge"
                style={{ backgroundColor: "#0000ff", color: "#fff" }}
              >
                {this.state.product.quantity}
              </span>

              <div className="btn-group">
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.onIncrement(this.state.product, 20);
                  }}
                >
                  +
                </button>
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.onDecrement(this.state.product, 0);
                  }}
                >
                  -
                </button>
              </div>
            </div>

            <div>{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    // console.log("ComponentDidMount-Product");
  }

  componentDidUpdate() {
    // console.log("componentDidUpdate-Product");
  }

  componentWillUnmount() {
    //Executes when the current instance of current component is being deleted from memory;
    // console.log("componentWillUnmount-Product");
  }
}

export default Product;
