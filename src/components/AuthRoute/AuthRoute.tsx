import { useNavigate, Route, RouteProps, Outlet } from "react-router-dom";
import { useAuth } from "hooks/useAuth";

export function PrivateRoute(props: RouteProps) {
    const navigate = useNavigate();
    const { user } = useAuth();

    return user ? navigate("/", { replace: true }) : <Route {...props} />;
}
