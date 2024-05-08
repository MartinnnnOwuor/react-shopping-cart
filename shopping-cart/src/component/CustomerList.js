import React, { Component } from "react";

class CustomersList extends Component {
  //Using state prop to make content/value to be rendered dynamic/ up-to-date;
  state = {
    mainTitle: "Customers",
    customersCount: 10,
    customers: [
      {
        id: 1,
        name: "Little Princess",
        contacts: "123-456",
        address: { city: "HeavenHold" },
        image: "https://picsum.photos/id/7/60",
      },
      {
        id: 2,
        name: "Lorraine",
        contacts: null,
        address: { city: "Nairobi" },
        image: "https://picsum.photos/id/999/60",
      },
      {
        id: 3,
        name: "Marrianne",
        contacts: "111-333",
        address: { city: "Lake-Side" },
        image: "https://picsum.photos/id/1014/60",
      },
      {
        id: 4,
        name: "Sohee",
        contacts: "987-654",
        address: { city: "AstroWorld" },
        image: "https://picsum.photos/id/203/60",
      },
      {
        id: 5,
        name: "Plague Doctor",
        contacts: null,
        address: { city: "England-Bro" },
        image: "https://picsum.photos/id/900/60",
      },
    ],
  };

  render() {
    return (
      <>
        <h4 className="m-2 p-2">
          {this.state.mainTitle}

          <span className="badge text-bg-secondary m-2">
            {this.state.customersCount}
          </span>

          <button className="btn btn-info" onClick={this.onReloadClick}>
            Reload
          </button>
        </h4>

        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Picture</th>
              <th>Customer Name</th>
              <th>Contact Info</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </>
    );
  }

  //Executes when the user clicks on the Reload button
  onReloadClick = () => {
    //UPdate the state (setState()) for the react to automatically update the Browser DOM;
    // console.log("Reload button clicked")
    this.setState({ customersCount: 1000 });
  };

  //Adding a render method as an arrow function;
  getContactsToRender = (contacts) => {
    if (contacts) return contacts;
    else {
      return (
        <div className="bg-warning p-2 text-center">Contact Not On Display</div>
      );
    }
  };

  getCustomerRow = () => {
    return (
      //Using .map() to display and iterate over each item in table array;
      this.state.customers.map((c, index) => {
        return (
          <tr key={c.id}>
            <td>{c.id}</td>
            <td>
              <img src={c.image} alt="Mug-Shot" />
              <div>
                <button
                  className="btn btn-sm btn-secondary"
                  onClick={() => {
                    this.onChangePictureClick(c, index);
                  }}
                >
                  Change Picture
                </button>
              </div>
            </td>
            <td>{c.name}</td>
            {/* use of conditional rendering on contact to check if true/ false, display one or the other */}
            <td>
              {/* if true display contact else(false, null, undefined) render the div tag */}
              {this.getContactsToRender(c.contacts)}
            </td>
            <td>{c.address.city}</td>
          </tr>
        );
      })
    );
  };

  // Fires when user clicks on "Change Picture" button;
  // Receives the "customers" object and index of the currently clicked customer;
  onChangePictureClick = (c, index) => {
    // console.log(c, index);

    
    // Passing property of 'image' to update through setState with the new url;
    // Getting the default value/ exisiting customers;
    let customerList = this.state.customers;
    customerList[index].image = "https://picsum.photos/id/77/60";
    // Updating customer images using state hook;
    this.setState({customers: customerList});
  };
}

export default CustomersList;