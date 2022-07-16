import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ isAllowed , redirectPath, children }) {
    if (!isAllowed) return <Navigate to={redirectPath} replace />
    return children ? children : <Outlet />;

};