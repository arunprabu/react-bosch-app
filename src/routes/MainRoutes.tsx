import { Routes, Route, Navigate } from "react-router-dom";
// The following components are loaded upfront
import AddEmployee from "../components/employee-manager/AddEmployee";
import EmployeeDetails from "../components/employee-manager/EmployeeDetails";
import AboutPage from "../pages/AboutPage";
import AuthPage from "../pages/AuthPage";
import EmployeeManagerPage from "../pages/EmployeeManagerPage";
import HomePage from "../pages/HomePage";

import ProductsPage from "../pages/ProductsPage";
import TodosPage from "../pages/TodosPage";
import ProtectedRoutes from "./ProtectedRoutes";
import { lazy, Suspense } from "react";

// Lazy loading the components
const NetflixPage = lazy(() => import("../pages/NetflixPage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));

const MainRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
};

export default MainRoutes;
