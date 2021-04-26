import React, { Component } from "react";
import { Link } from "react-router-dom";

class Clients extends Component {
  render() {
    const clients = [
      {
        id: "1234",
        firstName: "Kinsey",
        lastName: "Locke",
        email: "klocke@gmail.com",
        phone: "8976875462",
        balance: "100",
      },
      {
        id: "1235",
        firstName: "Jackie",
        lastName: "Weldon",
        email: "jweldon@gmail.com",
        phone: "2776885462",
        balance: "80",
      },
    ];

    if (clients) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              {" "}
              <h2>
                <i className="fas fa-users"></i> Clients{" "}
              </h2>
            </div>
            <div className="col-md-6"></div>
          </div>
          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Balance</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.id}>
                  <td>
                    {client.firstName} {client.lastName}
                  </td>
                  <td>{client.email}</td>
                  <td>${parseFloat(client.balance).toFixed(2)}</td>
                  <td>
                    <Link
                      to={`/client/${client.id}`}
                      className="btn btn-secondary btn-sm"
                    >
                      <i className="fas fa-arrow-circle-right"></i> Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

export default Clients;
