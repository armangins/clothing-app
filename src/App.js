
import "./App.styles.scss";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/routes/home-page/home.component";
import Shop from "./components/routes/shop/shop.component";
import Template from "./components/template/template.component";
import Signin from "./components/auth/signin/signin.component";
import Signup from "./components/auth/signup/signup.component";
import Checkout from "./components/routes/checkout/checkout.component"
import { Fragment } from "react";


const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" Component={Template} >
          <Route index Component={HomePage} />
          <Route path="auth" Component={Signin} />
          <Route path="signup" Component={Signup} />
          <Route path="shop/*" Component={Shop} />
          <Route path="checkout" Component={Checkout} />
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App; 
