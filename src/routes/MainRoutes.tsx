import { Routes, Route, Navigate } from "react-router-dom";
import AddEmployee from "../components/employee-manager/AddEmployee";
import EmployeeDetails from "../components/employee-manager/EmployeeDetails";
import AboutPage from "../pages/AboutPage";
import AuthPage from "../pages/AuthPage";
import ContactPage from "../pages/ContactPage";
import EmployeeManagerPage from "../pages/EmployeeManagerPage";
import HomePage from "../pages/HomePage";
import NetflixPage from "../pages/NetflixPage";
import ProductsPage from "../pages/ProductsPage";
import TodosPage from "../pages/TodosPage";
import ProtectedRoutes from "./ProtectedRoutes";

const MainRoutes = () => {
  return (
    <Routes>
      {/* The following routes are publicly accessible */}
      <Route path="/" element={<HomePage />} />
      <Route path="/netflix" element={<NetflixPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/auth/" element={<Navigate to="/auth/login" />} />
      <Route path="/auth/login" element={<AuthPage />} />

      {/* The following routes are protected */}
      <Route element={<ProtectedRoutes />}>
        <Route path="/employee-manager/" element={<EmployeeManagerPage />} />
        <Route path="/employee-manager/add" element={<AddEmployee />} />
        {/* Dynamic Routing --- url param is employeeId */}
        <Route
          path="/employee-manager/:employeeId"
          element={<EmployeeDetails />}
        />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/todos" element={<TodosPage />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
