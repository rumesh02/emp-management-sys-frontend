import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function RoleProtectedRoute({ allowedRoles, children }) {
    const { user, authLoading } = useAuth();

    if (authLoading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    if (!allowedRoles.includes(user.role)) {
        return <Navigate to="/unauthorized" replace />;
    }

    return children;
}

export default RoleProtectedRoute;