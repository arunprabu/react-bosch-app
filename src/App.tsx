/*
  Skeleton of a component
    * imports (optional)
    * component defn 
       must return JSX
    * export 
*/
import "./App.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { BrowserRouter} from "react-router-dom";
import { CartContextProvider } from "./contexts/CartContext";
import { ErrorBoundary } from "react-error-boundary";
import MainRoutes from "./routes/MainRoutes";
import { AuthContextProvider } from "./contexts/AuthContext";

// component defn
function App() {
  // must return JSX
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <CartContextProvider>
          <Header></Header>
          <main className="container mt-5 pt-2">
            <ErrorBoundary
              fallback={
                <div className="alert alert-danger">
                  Something went wrong! Try again later!
                </div>
              }
            >
              <MainRoutes />
            </ErrorBoundary>
          </main>
        </CartContextProvider>

        <Footer />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
