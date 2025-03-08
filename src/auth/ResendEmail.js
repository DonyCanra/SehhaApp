import React, { useState } from "react";
import { Link } from "react-router-dom";
import BubbleContainer from "../components/BubbleContainer";

const ResendEmail = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add API call to send reset email
    alert(`Password reset link has been sent to ${email}`);
  };

  return (
    <>
      <BubbleContainer />
      <div className="page">
        <div className="page-content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-4">
                {/* Logo */}
                <div className="text-center mb-4">
                  <img src="/assets/images/brand/logo.png" className="header-brand-img" alt="Brand Logo" />
                </div>

                {/* Reset Password Card */}
                <div className="card">
                  <div className="card-body">
                    <div className="text-center mb-4">
                      <h2 className="mb-2">Resend Email</h2>
                      <p className="text-muted">Enter your email to receive a password reset link.</p>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <div className="input-group mb-3">
                        <span className="input-group-text">
                          <i className="fe fe-mail"></i>
                        </span>
                        <input type="email" className="form-control" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                      </div>

                      <div className="form-group text-center mb-3">
                        <button type="submit" className="btn btn-primary w-100">
                          Send Reset Link
                        </button>
                      </div>

                      <div className="text-center">
                        <Link to="/login" className="text-primary">
                          Back to Login
                        </Link>
                      </div>
                    </form>
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

export default ResendEmail;
