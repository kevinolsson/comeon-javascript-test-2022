import { RouteProps, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "hooks/useAuth";
import { paths } from "services/routes";
import { useAppDispatch } from "state/hooks";
import { setToast } from "state/actions";

export const ProtectedComponent = ({ children }: RouteProps): JSX.Element => {
    const { user } = useAuth();
    const location = useLocation();
    const dispatch = useAppDispatch();

    if (!user) {
        dispatch(
            setToast({
                message: "You need to be logged in to view that page!",
                variant: "error",
            })
        );
        return (
            <Navigate
                to={paths.index.path}
                state={{ from: location }}
                replace
            />
        );
    }

    return <>{children}</>;
};
