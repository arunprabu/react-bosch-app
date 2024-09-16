/*
  Skeleton of a component
    * imports (optional)
    * component defn 
       must return JSX
    * export 
*/
import './App.css'; 
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NetflixPage from './pages/NetflixPage';
import EmployeeManagerPage from './pages/EmployeeManagerPage';
import ProductsPage from './pages/ProductsPage';
import TodosPage from './pages/TodosPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AddEmployee from './components/employee-manager/AddEmployee';
import EmployeeDetails from './components/employee-manager/EmployeeDetails';

// component defn
function App() {
  // must return JSX
  return (
    <BrowserRouter>
      <Header></Header>

      <main className="container mt-5 pt-2">
        {/* configure the routes -- but */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/netflix" element={<NetflixPage />} />
          {/* Learn about Nested Routing and implement */} 
          <Route path="/employee-manager/" element={<EmployeeManagerPage />} />
          <Route path="/employee-manager/add" element={<AddEmployee />} />
          <Route path="/employee-manager/1" element={<EmployeeDetails />} />
          
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/todos" element={<TodosPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
