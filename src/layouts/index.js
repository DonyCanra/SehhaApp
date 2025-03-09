import React, { useState } from "react";
import LoaderGlobal from "../components/LoaderGlobal";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <React.Fragment>
      {!isLoaded && <LoaderGlobal onFinish={() => setIsLoaded(true)} duration={2000} />}
      {isLoaded && (
        <div className="page">
          <div className="page-main">
            <Sidebar />
            <div className="app-content main-content">
              <div className="side-app">
                <Header />
                <Outlet />
              </div>
            </div>
            <Footer />
          </div>
        </div>
      )}
      <a href="#top" id="back-to-top">
        <i className="fe fe-chevron-up"></i>
      </a>
    </React.Fragment>
  );
};

export default Layout;
