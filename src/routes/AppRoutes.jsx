import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import AdminDashboard from "../pages/AdminDashboard";
import Unauthorized from "../pages/Unauthorized";
import ProtectedRoute from "../auth/ProtectedRoute";
import RoleProtectedRoute from "../auth/RoleProtectedRoute";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />

            <Route 
                path="/dashboard" 
                element={
                <ProtectedRoute>
                    <Dashboard />
                </ProtectedRoute>
                } 
            />

            <Route
                path="/admin"
                element={
                <RoleProtectedRoute allowedRoles={["admin"]}>
                    <AdminDashboard />
                </RoleProtectedRoute>
                }
            />

            <Route path="/unauthorized" element={<Unauthorized />} />
        </Routes>
    );
}

export default AppRoutes;