import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import BubbleContainer from "../components/BubbleContainer";

const LoginPage = () => {
  const [form, setForm] = useState({ username: "", password: "", showPassword: false, rememberMe: false });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.username || !form.password) {
      toast.error("Username and password is required!");
      return;
    }

    setIsLoading(true); // Aktifkan loading
    const token = "Dony Ganteng";

    setTimeout(() => {
      if (form.rememberMe) {
        localStorage.setItem("token", token);
      } else {
        sessionStorage.setItem("token", token);
      }
      toast.success("Login Successfully!");
      setIsLoading(false);
      navigate("/");
    }, 1500);
  };

  return (
    <>
      <BubbleContainer />
      <div className="page">
        <div className="page-content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-4">
                <div className="text-center mb-5">
                  <img src="/assets/images/brand/logo.png" className="header-brand-img desktop-lgo" alt="logo" />
                </div>
                <div className="card">
                  <div className="card-body">
                    <h1 className="text-center mb-2">Log In</h1>
                    <p className="text-center">Welcome Back!</p>

                    <form onSubmit={handleSubmit} className="mt-5">
                      <div className="input-group mb-4">
                        <span className="input-group-text">
                          <i className="fe fe-user" aria-hidden="true"></i>
                        </span>
                        <input type="text" className="form-control" placeholder="Username" value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} />
                      </div>

                      <div className="input-group mb-4">
                        <button type="button" className="input-group-text" onClick={() => setForm({ ...form, showPassword: !form.showPassword })}>
                          <i className={`fe ${form.showPassword ? "fe-eye-off" : "fe-eye"}`} aria-hidden="true"></i>
                        </button>
                        <input className="form-control" type={form.showPassword ? "text" : "password"} placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
                      </div>

                      <div className="form-group d-flex align-items-center">
                        <input type="checkbox" className="me-2" id="rememberMe" checked={form.rememberMe} onChange={() => setForm({ ...form, rememberMe: !form.rememberMe })} />
                        <label htmlFor="rememberMe" className="m-0">
                          Remember me
                        </label>
                      </div>

                      <button style={{ color: "#008080" }} type="submit" className="btn btn-primary btn-lg w-100 br-7 mt-3" disabled={isLoading}>
                        {isLoading ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2"></span>Logging in...
                          </>
                        ) : (
                          "Log In"
                        )}
                      </button>

                      <div className="text-center mt-3">
                        <Link to="/resend-email">Forgot Password?</Link>
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

export default LoginPage;
