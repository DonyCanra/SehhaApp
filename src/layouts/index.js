import React, { useState } from "react";
import FirstLoading from "../components/Loader/FirstLoading";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import BackTop from "../components/BackTop";

const Layout = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <React.Fragment>
      {!isLoaded && <FirstLoading onFinish={() => setIsLoaded(true)} duration={2000} />}
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
      <BackTop />
    </React.Fragment>
  );
};

export default Layout;
