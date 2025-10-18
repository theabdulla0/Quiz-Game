import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginStylesV2 as styles } from "../assets/dummyStyles";
import {
  ArrowLeft,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  UserPlus,
  LoaderCircle,
  User,
  Shield,
} from "lucide-react";

const API_BASE = import.meta.env.VITE_BACKEND_URL || "";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWORD_MIN_LENGTH = 6;

// --- Helpers ---
const saveAuthData = (token, user) => {
  try {
    localStorage.setItem("authToken", token);
    localStorage.setItem("currentUser", JSON.stringify(user));
    window.dispatchEvent(new CustomEvent("authChanged", { detail: { user } }));
  } catch (e) {
    console.error("Failed to save auth data:", e);
  }
};

const Signup = ({ onSignupSuccess = null }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");

  const handleChange = (field) => (e) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [field]: value }));
    // clear field and submit errors as user types
    setErrors((prev) => {
      const copy = { ...prev };
      delete copy[field];
      return copy;
    });
    if (submitError) setSubmitError("");
  };

  const validate = () => {
    const e = {};
    const name = formData.name.trim();
    const email = formData.email.trim();

    if (!name) e.name = "Name is required";
    else if (name.length < 2) e.name = "Name must be at least 2 characters";

    if (!email) e.email = "Email is required";
    else if (!EMAIL_REGEX.test(email)) e.email = "Please enter a valid email";

    if (!formData.password) e.password = "Password is required";
    else if (formData.password.length < PASSWORD_MIN_LENGTH)
      e.password = `Password must be at least ${PASSWORD_MIN_LENGTH} characters`;

    if (!formData.confirmPassword)
      e.confirmPassword = "Please confirm password";
    else if (formData.password !== formData.confirmPassword)
      e.confirmPassword = "Passwords do not match";

    return e;
  };

  const performSignup = async () => {
    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim().toLowerCase(),
      password: formData.password,
    };

    const url = API_BASE
      ? `${API_BASE}/api/auth/register`
      : "/api/auth/register";

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // credentials: "include", // uncomment if using cookie auth
      body: JSON.stringify(payload),
    });

    const data = await res.json().catch(() => null);

    if (!res.ok) {
      if (res.status === 409)
        throw new Error("An account with this email already exists");
      throw new Error(data?.message || "Signup failed. Please try again.");
    }

    return {
      token: data.token,
      user: data.user || { email: payload.email, name: payload.name },
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const eMap = validate();
    if (Object.keys(eMap).length) {
      setErrors(eMap);
      return;
    }

    setLoading(true);
    setSubmitError("");

    try {
      const { token, user } = await performSignup();
      if (token) saveAuthData(token, user);
      if (typeof onSignupSuccess === "function") onSignupSuccess(user);
      navigate("/", { replace: true });
    } catch (err) {
      setSubmitError(
        err.message || "An unexpected error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.bubble1} />
      <div className={styles.bubble2} />

      <Link to="/" className={styles.backButton}>
        <ArrowLeft className={styles.backButtonIcon} />
        <span className={styles.backButtonText}>Home</span>
      </Link>

      <div className={styles.formContainer}>
        <div className={styles.auroraGlowContainer}>
          <div className={styles.formContent}>
            <div className={styles.heading}>
              <div className={styles.headingIcon}>
                <UserPlus className={styles.headingIconInner} />
              </div>
              <h1 className={styles.headingText}>Create Account</h1>
            </div>
            <p className={styles.subtitle}>
              Join us today and start your journey
            </p>

            <form onSubmit={handleSubmit} className={styles.form} noValidate>
              {/* Name */}
              <label className={styles.label}>
                <span className={styles.labelText}>Full Name</span>
                <div className={styles.inputContainer}>
                  <div className={styles.inputIcon}>
                    <User className={styles.inputIconInner} />
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange("name")}
                    autoComplete="name"
                    className={`${styles.input} ${
                      errors.name ? styles.inputError : styles.inputNormal
                    }`}
                  />
                </div>
                {errors.name && (
                  <p className={styles.errorText}>{errors.name}</p>
                )}
              </label>

              {/* Email */}
              <label className={styles.label}>
                <span className={styles.labelText}>Email Address</span>
                <div className={styles.inputContainer}>
                  <div className={styles.inputIcon}>
                    <Mail className={styles.inputIconInner} />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange("email")}
                    autoComplete="email"
                    className={`${styles.input} ${
                      errors.email ? styles.inputError : styles.inputNormal
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className={styles.errorText}>{errors.email}</p>
                )}
              </label>

              {/* Password */}
              <label className={styles.label}>
                <span className={styles.labelText}>Password</span>
                <div className={styles.inputContainer}>
                  <div className={styles.inputIcon}>
                    <LockKeyhole className={styles.inputIconInner} />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="••••••••••••"
                    value={formData.password}
                    onChange={handleChange("password")}
                    autoComplete="new-password"
                    className={`${styles.input} ${styles.passwordInput} ${
                      errors.password ? styles.inputError : styles.inputNormal
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className={styles.passwordToggle}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff className={styles.passwordToggleIcon} />
                    ) : (
                      <Eye className={styles.passwordToggleIcon} />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className={styles.errorText}>{errors.password}</p>
                )}
              </label>

              {/* Confirm Password */}
              <label className={styles.label}>
                <span className={styles.labelText}>Confirm Password</span>
                <div className={styles.inputContainer}>
                  <div className={styles.inputIcon}>
                    <Shield className={styles.inputIconInner} />
                  </div>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="••••••••••••"
                    value={formData.confirmPassword}
                    onChange={handleChange("confirmPassword")}
                    autoComplete="new-password"
                    className={`${styles.input} ${styles.passwordInput} ${
                      errors.confirmPassword
                        ? styles.inputError
                        : styles.inputNormal
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((v) => !v)}
                    className={styles.passwordToggle}
                    aria-label={
                      showConfirmPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showConfirmPassword ? (
                      <EyeOff className={styles.passwordToggleIcon} />
                    ) : (
                      <Eye className={styles.passwordToggleIcon} />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className={styles.errorText}>{errors.confirmPassword}</p>
                )}
              </label>

              {submitError && (
                <p className={styles.submitError}>{submitError}</p>
              )}

              <div className={styles.buttonsContainer}>
                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <LoaderCircle
                        className={`${styles.submitButtonIcon} animate-spin`}
                      />
                      <span className={styles.submitButtonText}>
                        Creating Account...
                      </span>
                    </>
                  ) : (
                    <>
                      <UserPlus className={styles.submitButtonIcon} />
                      <span className={styles.submitButtonText}>Sign Up</span>
                    </>
                  )}
                </button>
              </div>
            </form>

            <div className={styles.signupContainer}>
              <p className={styles.signupText}>
                Already have an account?{" "}
                <Link to="/login" className={styles.signupLink}>
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
