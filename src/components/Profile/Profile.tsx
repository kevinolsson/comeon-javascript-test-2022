import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "hooks/useAuth";
import { useAppDispatch } from "state/hooks";
import { clearCredentials, setToast } from "state/actions";
import { Avatar } from "components/Avatar/Avatar";
import { Button } from "components/Button/Button";
import { paths } from "services/routes";
import classes from "./profile.module.scss";

export const Profile = (): JSX.Element | null => {
    const [expanded, setExpanded] = React.useState(false);
    const dispatch = useAppDispatch();
    const { user } = useAuth();
    const navigate = useNavigate();
    if (!user) {
        return null;
    }

    const handleLogout = () => {
        navigate("/");
        dispatch(clearCredentials());
        dispatch(
            setToast({
                variant: "success",
                message: "Logged out! Thank you for visiting!",
            })
        );
    };

    return (
        <>
            {expanded && (
                <div
                    className={classes.touchOverlay}
                    onClick={() => {
                        setExpanded(false);
                    }}
                />
            )}
            <div className={classes.root}>
                <div
                    className={[classes.pill, expanded && classes.expanded]
                        .filter(Boolean)
                        .join(" ")}
                    onClick={() => {
                        setExpanded(!expanded);
                    }}
                >
                    <Avatar src={user.avatar} name={user.name} />
                    <span>{user.name}</span>
                </div>
                {expanded && (
                    <div className={classes.profile}>
                        <h2>{user.name}</h2>
                        <small>{user.event}</small>
                        <Button
                            size="small"
                            color="dark"
                            onClick={handleLogout}
                        >
                            Logout
                        </Button>
                    </div>
                )}
            </div>
        </>
    );
};
