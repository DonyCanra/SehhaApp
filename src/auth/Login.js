import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/actions/authActions";
import BubbleContainer from "../components/BubbleContainer";

const LoginPage = () => {
  const [form, setForm] = useState({ email: "", password: "", showPassword: false, rememberMe: false });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      toast.error("email and password is required!");
      return;
    }

    dispatch(loginUser({ email: form.email, password: form.password, rememberMe: form.rememberMe }))
      .unwrap()
      .then(() => {
        toast.success("Login Successfully!");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err || "Login Failed!");
      });
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
                        <input type="text" className="form-control" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
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

                      <button style={{ color: "#008080" }} type="submit" className="btn btn-primary btn-lg w-100 br-7 mt-3" disabled={loading}>
                        {loading ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2"></span>Logging in...
                          </>
                        ) : (
                          "Log In"
                        )}
                      </button>

                      {error && <p className="text-danger text-center mt-2">{error}</p>}

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
