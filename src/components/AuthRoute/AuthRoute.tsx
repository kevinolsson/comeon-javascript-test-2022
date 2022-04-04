import { useNavigate, Route, RouteProps } from "react-router-dom";
import { useAuth } from "hooks/useAuth";
import { paths } from "services/routes";

export function PrivateRoute(props: RouteProps) {
    const navigate = useNavigate();
    const { user } = useAuth();

    return user ? (
        navigate(paths.index.path, { replace: true })
    ) : (
        <Route {...props} />
    );
}
