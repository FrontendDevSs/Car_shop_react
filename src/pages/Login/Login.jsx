import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Img from "../../assets/icons/AuthImg.jpg";
import ClosedEye from "../../assets/icons/eye-closed.svg";
import OpenEye from "../../assets/icons/eye-open.svg";
import "./login.scss";

function Login() {
    const { loginUser, loading, error } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [localError, setLocalError] = useState("");

    async function handleLogin(e) {
        e.preventDefault();
        setLocalError("");

        if (!email.trim() || !password.trim()) {
            setLocalError("Please fill in all fields");
            return;
        }

        const res = await loginUser({ email, password });
        if (!res) return;
        navigate("/");
    }

    return (
        <div className="login-page">
            <div className="img-div">
                <div className="login-image">
                    <img src={Img} alt="Auth visual" />
                </div>
            </div>
            <div className="login-container">
                <div className="login-div">
                    <form onSubmit={handleLogin} className="login-form">
                        <h2>Login</h2>

                        <div className="input-email">
                            <label className="email-label">Email</label>
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="input-password">
                            <label>Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter Your Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <img
                                src={showPassword ? ClosedEye : OpenEye}
                                alt="eye-icon"
                                className="toggle-eye"
                                onClick={() => setShowPassword((prev) => !prev)}
                            />
                        </div>

                        {(localError || error) && (
                            <p className="login-error">{localError || error}</p>
                        )}

                        <div className="login-btn">
                            <button type="submit" disabled={loading}>
                                {loading ? "Logging in..." : "Login"}
                            </button>
                        </div>

                        <div className="login-redirect">
                            <p>Need to create an Account?</p>
                            <a href="/signup">Sign Up</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
