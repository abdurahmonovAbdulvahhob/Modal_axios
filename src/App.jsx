import "./App.css";
import Toaster from "./components/Toaster";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Product from "./components/Product";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Header />
      <Hero/>
      {/* <Product /> */}
      <ToastContainer />
      <Toaster/>
      <Footer/>
    </>
  );
}

export default App;