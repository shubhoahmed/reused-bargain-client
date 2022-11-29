import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import useRole from '../../../hooks/useRole';
import Loading from '../../../Shared/Loading/Loading';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [role, roleLoading] = useRole(user?.email);
    const location = useLocation();

    if (loading || roleLoading) {
        return <Loading></Loading>
    }

    if (user && role) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;