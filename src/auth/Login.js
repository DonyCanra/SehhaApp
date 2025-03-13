import React, { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/actions/authActions";
import BubbleContainer from "../components/BubbleContainer";

const LoginPage = () => {
  const [form, setForm] = useState({ email: "", password: "", showPassword: false, rememberMe: false });
  const [errors, setErrors] = useState({ email: false, password: false });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === "checkbox" ? checked : value,
    }));
  }, []);

  const togglePasswordVisibility = useCallback(() => {
    setForm((prevForm) => ({
      ...prevForm,
      showPassword: !prevForm.showPassword,
    }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const newErrors = {
        email: !form.email,
        password: !form.password,
      };

      setErrors(newErrors);

      if (newErrors.email || newErrors.password) {
        toast.error("Email and password are required!");
        return;
      }

      setIsSubmitting(true);

      dispatch(loginUser({ email: form.email, password: form.password, rememberMe: form.rememberMe }))
        .unwrap()
        .then(() => {
          toast.success("Login Successfully!");

          // Setelah sukses, tunggu 2 detik sebelum navigasi
          setTimeout(() => {
            setIsSubmitting(false);
            navigate("/");
          }, 2000);
        })
        .catch((err) => {
          toast.error(err || "Login Failed!");
          setIsSubmitting(false); // Hentikan loading jika gagal
        });
    },
    [form, dispatch, navigate]
  );

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
                        <span className={`input-group-text ${errors.email ? "border-danger text-danger" : ""}`}>
                          <i className="fe fe-user" aria-hidden="true"></i>
                        </span>
                        <input type="text" name="email" className={`form-control ${errors.email ? "is-invalid" : ""}`} placeholder="Email" value={form.email} onChange={handleChange} />
                        {errors.email && <div className="invalid-feedback">Email is required</div>}
                      </div>

                      <div className="input-group mb-4">
                        <button type="button" className={`input-group-text ${errors.password ? "border-danger text-danger" : ""}`} onClick={togglePasswordVisibility}>
                          <i className={`fe ${form.showPassword ? "fe-eye-off" : "fe-eye"}`} aria-hidden="true"></i>
                        </button>
                        <input className={`form-control ${errors.password ? "is-invalid" : ""}`} type={form.showPassword ? "text" : "password"} name="password" placeholder="Password" value={form.password} onChange={handleChange} />
                        {errors.password && <div className="invalid-feedback">Password is required</div>}
                      </div>

                      <div className="form-group d-flex align-items-center">
                        <input type="checkbox" className="me-2" id="rememberMe" name="rememberMe" checked={form.rememberMe} onChange={handleChange} />
                        <label htmlFor="rememberMe" className="m-0">
                          Remember me
                        </label>
                      </div>

                      <button style={{ color: "#008080" }} type="submit" className="btn btn-primary btn-lg w-100 br-7 mt-3" disabled={isSubmitting || loading}>
                        {isSubmitting || loading ? (
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
