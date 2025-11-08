import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Img from "../../../assets/icons/AuthImg.jpg";
import ClosedEye from "../../../assets/icons/eye-closed.svg";
import OpenEye from "../../../assets/icons/eye-open.svg";
import "./sign_up.scss";

function SignUp() {
    const { registerUser, loading, error } = useAuth();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [confirm, setConfirm] = useState("");
    const [showPass, setShowPass] = useState(false);
    const [localError, setLocalError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLocalError("");

        if (!name.trim() || !email.trim() || !password.trim()) {
            setLocalError("Please fill in all fields");
            return;
        }
        if (!email.endsWith(".com")) {
            setLocalError("Email must end with '.com'");
            return;
        }
        if (password.length < 6) {
            setLocalError("Password must be at least 6 characters long");
            return;
        }

        const result = await registerUser({ name, email, password });
        if (!result) return;

        navigate("/login");
        setName(""); setEmail(""); setPassword("");
        navigate("/login");
    };

    return (
        <div className="sign-up-page">
            <div className="sign-img-div">
                <div className="sign-up-image">
                    <img src={Img} alt="Auth visual" />
                </div>
            </div>

            <div className="sign-up-container">
                <div className="sign-up-div">
                    <form onSubmit={handleSubmit} className="sign-up-form">
                        <h2>Create Account</h2>

                        <div className="sign-up-input-name">
                            <label>Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="sign-up-input-email">
                            <label>Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="sign-up-input-password">
                            <label>Password</label>
                            <input
                                type={showPass ? "text" : "password"}
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <img
                                src={showPass ? ClosedEye : OpenEye}
                                alt="toggle"
                                className="toggle-eye"
                                onClick={() => setShowPass((s) => !s)}
                            />
                        </div>


                        {(localError || error) && (
                            <p className="sign-up-error">{localError || error}</p>
                        )}

                        <div className="sign-up-btn">
                            <button type="submit" disabled={loading}>
                                {loading ? "Creating..." : "Create Account"}
                            </button>
                        </div>

                        <div className="sign-up-redirect">
                            <p>Already have an account?</p>
                            <a href="/login">Login</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
