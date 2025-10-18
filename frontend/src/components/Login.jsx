import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginStylesV2 as styles } from "../assets/dummyStyles";
import {
  ArrowLeft,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  LogIn,
  LoaderCircle,
} from "lucide-react";

// --- Constants ---
const API_BASE = (import.meta.env.VITE_BACKEND_URL || "").replace(/\/+$/, "");
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// --- Helper Functions ---
const validateEmail = (email) => {
  if (!email) return "Email is required";
  if (!EMAIL_REGEX.test(email)) return "Please enter a valid email";
  return null;
};

const validatePassword = (password) => {
  if (!password) return "Password is required";
  if (password.length < 6) return "Password must be at least 6 characters";
  return null;
};

const saveAuthData = (token, user) => {
  try {
    localStorage.setItem("authToken", token);
    localStorage.setItem("currentUser", JSON.stringify(user));
    window.dispatchEvent(new CustomEvent("authChanged", { detail: { user } }));
  } catch (error) {
    console.error("Failed to save auth data:", error);
  }
};

// --- Hoisted subcomponent to keep focus stable ---
function FormField({
  type = "text",
  name,
  label,
  placeholder,
  icon: Icon,
  value,
  onChange,
  error,
  showToggle = false,
  show = false,
  onToggle = () => {},
  autoComplete,
}) {
  const hasError = Boolean(error);
  const describedById = hasError ? `error-${name}` : undefined;

  return (
    <label className={styles.label}>
      <span className={styles.labelText}>{label}</span>
      <div className={styles.inputContainer}>
        <div className={styles.inputIcon}>
          <Icon className={styles.inputIconInner} />
        </div>
        <input
          name={name}
          type={showToggle && show ? "text" : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          aria-invalid={hasError}
          aria-describedby={describedById}
          className={`
            ${styles.input}
            ${showToggle ? styles.passwordInput : ""}
            ${hasError ? styles.inputError : styles.inputNormal}
          `}
        />
        {showToggle && (
          <button
            type="button"
            onClick={onToggle}
            className={styles.passwordToggle}
            aria-label={show ? "Hide password" : "Show password"}
          >
            {show ? (
              <EyeOff className={styles.passwordToggleIcon} />
            ) : (
              <Eye className={styles.passwordToggleIcon} />
            )}
          </button>
        )}
      </div>
      {hasError && (
        <p id={`error-${name}`} className={styles.errorText}>
          {error}
        </p>
      )}
    </label>
  );
}

// --- Main Component ---
const Login = ({ onLoginSuccess = null }) => {
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    email: "admin1@gmail.com",
    password: "sec@123",
  });
  const [showPassword, setShowPassword] = useState(false);

  // UI state
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // --- Handlers ---
  const handleInputChange = (field) => (e) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Clear related errors when user types
    if (errors[field] || errors.submit) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        delete newErrors.submit;
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const emailError = validateEmail(formData.email);
    if (emailError) newErrors.email = emailError;

    const passwordError = validatePassword(formData.password);
    if (passwordError) newErrors.password = passwordError;

    return newErrors;
  };

  const performLogin = async () => {
    const payload = {
      email: formData.email.trim().toLowerCase(),
      password: formData.password,
    };

    const url = API_BASE ? `${API_BASE}/api/auth/login` : "/api/auth/login";

    let response;
    try {
      response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // credentials: "include", // uncomment if using cookie auth
        body: JSON.stringify(payload),
      });
    } catch (err) {
      throw new Error("Network error. Please check your connection and try again.");
    }

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      throw new Error(data?.message || "Login failed. Please try again.");
    }

    return {
      token: data.token,
      user: data.user || { email: payload.email },
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      const { token, user } = await performLogin();

      // Save auth data
      if (token) {
        saveAuthData(token, user);
      }

      // Trigger success callbacks
      if (typeof onLoginSuccess === "function") {
        onLoginSuccess(user);
      }

      // Navigate to home
      navigate("/", { replace: true });
    } catch (error) {
      setErrors({
        submit:
          error.message || "An unexpected error occurred. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  // --- Render ---
  return (
    <div className={styles.pageContainer}>
      {/* Background Elements */}
      <div className={styles.bubble1} />
      <div className={styles.bubble2} />

      {/* Back Button */}
      <Link to="/" className={styles.backButton}>
        <ArrowLeft className={styles.backButtonIcon} />
        <span className={styles.backButtonText}>Home</span>
      </Link>

      {/* Main Form Container */}
      <div className={styles.formContainer}>
        <div className={styles.auroraGlowContainer}>
          <div className={styles.formContent}>
            {/* Header */}
            <div className={styles.heading}>
              <div className={styles.headingIcon}>
                <LockKeyhole className={styles.headingIconInner} />
              </div>
              <h1 className={styles.headingText}>Welcome Back</h1>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className={styles.form} noValidate>
              <FormField
                type="email"
                name="email"
                label="Email Address"
                placeholder="you@example.com"
                icon={Mail}
                value={formData.email}
                onChange={handleInputChange("email")}
                error={errors.email}
                autoComplete="email"
              />

              <FormField
                type="password"
                name="password"
                label="Password"
                placeholder="••••••••••••"
                icon={LockKeyhole}
                value={formData.password}
                onChange={handleInputChange("password")}
                error={errors.password}
                showToggle
                show={showPassword}
                onToggle={() => setShowPassword((v) => !v)}
                autoComplete="current-password"
              />

              {/* Submit Error */}
              {errors.submit && (
                <p className={styles.submitError}>{errors.submit}</p>
              )}

              {/* Submit Button */}
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
                        Signing In...
                      </span>
                    </>
                  ) : (
                    <>
                      <LogIn className={styles.submitButtonIcon} />
                      <span className={styles.submitButtonText}>Sign In</span>
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Signup Link */}
            <div className={styles.signupContainer}>
              <p className={styles.signupText}>
                Don't have an account?{" "}
                <Link to="/signup" className={styles.signupLink}>
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;