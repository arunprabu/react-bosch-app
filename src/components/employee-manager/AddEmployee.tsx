import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { IEmployee } from "../../models/IEmployee";

const AddEmployee = () => {
  const { register, handleSubmit } = useForm<IEmployee>();
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const onAddEmployeeSubmit = (formData: any) => {
    console.log(formData);
    // send the above formData to the REST API
    /*
      1. What's the REST API Endpoint? https://jsonplaceholder.typicode.com/users
      2. What's the HTTP Method? POST
      3. What's the REST API Client? fetch API (part of JS), axios (npm i axios)
    */

    axios
      .post("https://jsonplaceholder.typicode.com/users", formData)
      .then((res: any) => {
        // upon successful response -- then will be called
        console.log(res);
        setIsSaved(true);
      })
      .catch((err: any) => {
        console.log(err);
        setIsError(true);
      })
      .finally(() => {
        console.log("It is over!");
      });
  };

  return (
    <div>
      <h1>Add Employee</h1>
      <Link to="/employee-manager" className="btn btn-link">
        Go Back
      </Link>
      <form
        className="col-md-6 offset-md-3"
        onSubmit={handleSubmit(onAddEmployeeSubmit)}
      >
        <div className="form-group row mb-3">
          <label className="col-sm-2 col-form-label" htmlFor="nameInput">
            Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              id="nameInput"
              className="form-control"
              {...register("name")}
              placeholder="Enter Name"
            />
          </div>
        </div>
        <div className="form-group row mb-3">
          <label htmlFor="phoneInput" className="col-sm-2 col-form-label">
            Phone
          </label>
          <div className="col-sm-10">
            <input
              type="number"
              id="phoneInput"
              className="form-control"
              {...register("phone")}
              placeholder="Enter Phone"
            />
          </div>
        </div>
        <div className="form-group row mb-3">
          <label htmlFor="emailInput" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              id="emailInput"
              className="form-control"
              {...register("email")}
              placeholder="Enter Email"
            />
          </div>
        </div>

        {isSaved && (
          <div className="alert alert-success">Saved Successfully</div>
        )}

        {isError && (
          <div className="alert alert-danger">
            Some Error Occurred. Try again later!
          </div>
        )}

        <div className="form-group row">
          <div className="col-sm-10 offset-sm-2">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
