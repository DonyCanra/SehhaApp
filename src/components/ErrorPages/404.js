import React from "react";
import { Link } from "react-router-dom";
import BubbleContainer from "../BubbleContainer";

const PageNotFound = () => {
  return (
    <>
      <BubbleContainer />
      <div className="page">
        <div className="page-content">
          <div className="container text-center">
            <div className="row">
              <div className="col-md-12">
                <div>
                  <div className="text-primary">
                    <div className="display-1 mb-4 font-weight-bold error-text">404</div>
                    <h1 className="h3 mb-3 font-weight-bold">Oops! We can’t find that page.</h1>
                    <p className="h5 font-weight-normal mb-7 leading-normal">It looks like you're lost. The page you're looking for might have been moved or doesn't exist. Try checking the URL or head back to the dashboard.</p>
                    {/* Tombol kembali ke Dashboard */}
                    <Link to="/" className="btn btn-primary text-light mb-5 fs-18">
                      Back to Dashboard
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
