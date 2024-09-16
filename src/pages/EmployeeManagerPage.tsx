import { Link } from "react-router-dom";

const EmployeeManagerPage = () => {
  return (
    <div className="container px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src="https://placehold.co/600x400/EEE/31343C"
            className="d-block mx-lg-auto img-fluid"
            alt="Employee Manager App"
            width={700}
            height={500}
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Welcome to Employee Manager App
          </h1>
          <p className="lead">
            You can browse, add, edit, delete employees here.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <Link
              to={"/employee-manager/add"}
              className="btn btn-primary btn-lg px-4 me-md-2"
            >
              Add Employee
            </Link>
          </div>
        </div>
      </div>

      <div className="row py-5">
        <h2>Listing Employees</h2>

        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>

        <div className="alert alert-danger" role="alert">
          Something went wrong! Unable to load employees
        </div>

        {/* List Employees */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">John</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                a@g.com
              </h6>
              <Link to={"/employee-manager/1"} className="card-link">
                View Details
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">John</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                a@g.com
              </h6>
              <Link to={"/employee-manager/1"} className="card-link">
                View Details
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">John</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                a@g.com
              </h6>
              <Link to={"/employee-manager/1"} className="card-link">
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeManagerPage;
