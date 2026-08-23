import { useState } from "react";
import { LockKeyhole, Mail, LogIn } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

   try {
  const response = await fetch(
    "https://win-in-life-backend.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Invalid email or password."
        );
      }

      // Save login information
      localStorage.setItem(
        "adminToken",
        data.token
      );

      localStorage.setItem(
        "admin",
        JSON.stringify(data.admin)
      );

      // Go to admin dashboard
     navigate("/admin/dashboard");
    } catch (error) {
      console.error("Login error:", error);

      setError(
        error.message ||
          "Unable to login. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">

        {/* Logo */}
        <div className="admin-login-logo">
          <div className="admin-logo-mark">
            W
          </div>

          <div>
            <h1>Win In Life</h1>

            <span>
              Child Development Centre
            </span>
          </div>
        </div>

        {/* Heading */}
        <div className="admin-login-heading">
          <h2>Admin Login</h2>

          <p>
            Sign in to manage assessment requests
            and appointments.
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="admin-login-error">
            {error}
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="admin-login-form"
        >

          {/* Email */}
          <div className="admin-form-field">
            <label htmlFor="admin-email">
              Email Address
            </label>

            <div className="admin-input-wrapper">
              <Mail size={18} />

              <input
                id="admin-email"
                type="email"
                placeholder="Enter admin email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="admin-form-field">
            <label htmlFor="admin-password">
              Password
            </label>

            <div className="admin-input-wrapper">
              <LockKeyhole size={18} />

              <input
                id="admin-password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                required
              />
            </div>
          </div>

          {/* Login */}
          <button
            type="submit"
            className="admin-login-button"
            disabled={loading}
          >
            <LogIn size={18} />

            {loading
              ? "Signing in..."
              : "Login to Admin Panel"}
          </button>

        </form>

        {/* Footer */}
        <div className="admin-login-footer">
         <Link to="/">
  ← Back to Website
</Link>
        </div>

      </div>
    </div>
  );
};

export default AdminLogin;