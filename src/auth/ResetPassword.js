import React from "react";
import { Link } from "react-router-dom";
import BubbleContainer from "../components/BubbleContainer";

const ResetPassword = () => {
  return (
    <>
      <BubbleContainer />
      <div className="page">
        <div className="page-content">
          <div className="container">
            <div className="row">
              <div className="col mx-auto">
                <div className="row justify-content-center">
                  <div className="col-md-4">
                    <div className="text-center mb-5">
                      <img src="/assets/images/brand/logo.png" className="header-brand-img desktop-lgo" alt="logo" />
                    </div>
                    <div className="card">
                      <div className="card-body">
                        <div className="text-center mb-3">
                          <h1 className="mb-2">Reset Password</h1>
                          <Link href="#" className="">
                            Please, Enter your new password.
                          </Link>
                        </div>
                        <form className="mt-5">
                          <div className="input-group mb-4">
                            <div className="input-group" id="Password-toggle1">
                              <Link href="#" className="input-group-text">
                                <i className="fe fe-eye" aria-hidden="true"></i>
                              </Link>
                              <input className="form-control" type="password" placeholder="New Password" id="password" />
                            </div>
                          </div>
                          <div className="input-group mb-4">
                            <div className="input-group" id="Password-toggle1">
                              <Link href="#" className="input-group-text">
                                <i className="fe fe-eye" aria-hidden="true"></i>
                              </Link>
                              <input className="form-control" type="password" placeholder="Confirm Password" id="password" />
                            </div>
                          </div>
                          <div className="form-group text-center mb-3">
                            <button type="submit" className="btn btn-primary btn-lg w-100 br-7">
                              Reset
                            </button>
                          </div>
                          <div className="form-group fs-13 text-center">
                            <Link to="/login">Back to Login</Link>
                          </div>
                        </form>
                      </div>
                    </div>
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

export default ResetPassword;
