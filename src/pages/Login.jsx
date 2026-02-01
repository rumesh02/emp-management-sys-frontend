import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";


function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleFakeLogin = () => {
        login({ email: "user@example.com", role: "employee" });
        navigate("/dashboard");
    }

    return (
        <>
            <h1>Login Page</h1>
            <button onClick={handleFakeLogin}>
                Faked Login
            </button>
        </>
    );
}

export default Login;