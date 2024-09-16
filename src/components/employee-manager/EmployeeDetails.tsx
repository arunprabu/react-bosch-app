import React from "react";
import { Link } from "react-router-dom";

const EmployeeDetails = () => {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/employee-manager">Employees</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Employee Details
          </li>
        </ol>
      </nav>

      <h1>Employee Details</h1>

      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>

      <div className="alert alert-danger" role="alert">
        Something went wrong! Unable to load employee details for Employee Id: 1
      </div>

      <>
        <Link to="/employee-manager" className="btn btn-link">
          Go Back
        </Link>
        <div className="card">
          <div className="card-header">
            You are seeing details of Employee ID: 32456
          </div>
          <div className="card-body">
            <h5 className="card-title">Name: John</h5>
            <p className="card-text">Email: j@k.com</p>
            <p className="card-text">Phone: 45678567</p>
            <Link to="edit" className="btn btn-primary">
              Edit
            </Link>

            <button className="btn btn-outline-danger">Delete</button>
          </div>
        </div>
      </>
    </>
  );
};

export default EmployeeDetails;
