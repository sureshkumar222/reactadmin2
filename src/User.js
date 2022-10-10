import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function User() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers([
      {
        id: 1,
        username: "suresh",
        email: "sureshgsk22@gmail.com",
        country: "india",
        state: "tamilnadu",
        city: "tindivanam",
        phno: "9080598543",
        dob: "11-02-2000",
        gender: "Male",
      },
      {
        id: 2,
        username: "anu",
        email: "anu22@gmail.com",
        country: "india",
        state: "tamilnadu",
        city: "chennai",
        phno: "9089598543",
        dob: "13-05-2000",
        gender: "Female",
      },
      {
        id: 3,
        username: "vidya",
        email: "vid22@gmail.com",
        country: "india",
        state: "tamilnadu",
        city: "anna nagar",
        phno: "908959843",
        dob: "03-03-2000",
        gender: "Female",
      },
    ]);
  }, []);

  let deluser = () =>{
    const res = window.confirm("you want to delete")
    if(res){
      alert("deleted")
    }
  }

  return (
    <div className="container-fluid">
      <h1 className="h3 mb-2 text-gray-800">users</h1>
      <Link
        to={"/user_create"}
        className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
      >
        <i className="fas fa-download fa-sm text-white-50">create user</i>
      </Link>

      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Country</th>
                  <th>State</th>
                  <th>City</th>
                  <th>phno</th>
                  <th>dob</th>
                  <th>Gender</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Country</th>
                  <th>State</th>
                  <th>City</th>
                  <th>phno</th>
                  <th>dob</th>
                  <th>Gender</th>
                  <th>Action</th>
                </tr>
              </tfoot>
              <tbody>
                {users.map((user) => {
                  return (
                    <tr>
                      <td>{user.id}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.country}</td>
                      <td>{user.state}</td>
                      <td>{user.city}</td>
                      <td>{user.phno}</td>
                      <td>{user.dob}</td>
                      <td>{user.gender}</td>

                      <td>
                        <Link to={`/user/${user.id}`} className="btn btn-warning  mr-2">Profile</Link>
                        <Link to={`/edit/${user.id}`} className="btn btn-primary mr-2 ">Edit</Link>
                        <button onClick={() => deluser()} className="btn btn-danger">Delete</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
