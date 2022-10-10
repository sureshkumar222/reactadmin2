import React from "react";

function Usercreate() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="form-group">
            <label>username</label>
            <input type={"text"} className="form-control"></input>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-group">
            <label>Email</label>
            <input type={"text"} className="form-control"></input>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-group">
            <label>country</label>
            <select className="form-control">
              <option>India</option>
              <option>america</option>
              <option>china</option>
            </select>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-group">
            <label>state</label>
            <select className="form-control">
              <option>tamilnadu</option>
              <option>newyork</option>
              <option>china</option>
            </select>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-group">
            <label>city</label>
            <select className="form-control">
              <option>chennai</option>
              <option>america</option>
              <option>china</option>
            </select>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-group">
            <label>phoneno</label>
            <input type={"text"} className="form-control"></input>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-group">
            <label>DOB</label>
            <input type={"date"} className="form-control"></input>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-group">
            <label>gender</label>
            <select className="form-control">
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
        </div>
        <div className="col-lg-4">
            <div className="form-group">
                <input type={"submit"} className="btn btn-primary"></input>
            </div>
        </div>
      </div>
      
    </div>
  );
}

export default Usercreate;
