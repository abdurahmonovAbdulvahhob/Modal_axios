import "./App.css";
import Toaster from "./components/Toaster";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Product from "./components/Product";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Signup from "./components/Signup";
import Modal from "./components/Modal";
import { useState } from "react";
import Login from "./components/Login";
import Product from "./components/Product";

function App() {
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  let toggleActions = () => {
    setSignIn((p) => !p);
    setSignUp((p) => !p);
  };
  let showSignUpToaster = () => {
    setSignUp((p) => !p);
    toast("Sign Up success");
  }

  let showSignInToaster = () => {
    setSignIn((p) => !p);
    toast("Log In success");
  };

  return (
    <div className="dark:bg-gray-800 bg-white">
      <Header
        signup={() => setSignUp(true)}
        login={() => setSignIn(true)}
      ></Header>
      <Hero />
      {signUp && (
        <Modal close={() => setSignUp(false)}>
          <Signup toggle={toggleActions} submit={showSignUpToaster}></Signup>
        </Modal>
      )}
      {signIn && (
        <Modal close={() => setSignIn(false)}>
          <Login toggle={toggleActions} submit={showSignInToaster} />
        </Modal>
      )}

      <Product/>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
