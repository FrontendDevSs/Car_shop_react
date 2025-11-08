import { useState } from "react";
import axios from "axios";
import { AUTH_URL, LOGIN_URL } from "../config";

function useAuth() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const registerUser = async ({ name, email, password }) => {
        setLoading(true);
        setError("");
        try {
            const { data } = await axios.post(AUTH_URL, { name, email, password });
            localStorage.setItem("token", data.token);
            setUser(data);
            return data;
        } catch (e) {
            const msg =
                e?.response?.data?.message ||
                e?.response?.data?.error ||
                (e?.response?.status === 400 ? "User already exists" : "Server error"); //malo chagpt za errore je radio
            setError(msg);
            return null;
        } finally {
            setLoading(false);
        }
    };
    async function loginUser({ email, password }) {
        setLoading(true);
        setError("");
        try {
            const res = await axios.post(LOGIN_URL, { email, password });
            localStorage.setItem("token", res.data.token);
            setUser(res.data);
            return res.data;
        } catch (err) {
            const message =
                err.response?.data?.message ||
                err.response?.data?.error ||
                (err.response?.status === 400
                    ? "Invalid email or password"
                    : "Server error");
            setError(message);
            return null;
        } finally {
            setLoading(false);
        }
    }

    return { registerUser, loginUser, user, loading, error };
}

export default useAuth;
