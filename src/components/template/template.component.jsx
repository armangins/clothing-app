import React, { Fragment } from "react";
import NavBar from "../navbar/navbar.component";
import {Outlet} from "react-router-dom";
import Footer from "../footer/footer.component";
import MarqueeComponent from "../marquee/marquee.component";


const Layout = () => {
  return (
    <Fragment>
      <MarqueeComponent/>
      <NavBar />
      <div className="main_container">
      <Outlet />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
