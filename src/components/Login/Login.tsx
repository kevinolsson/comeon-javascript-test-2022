import React from "react";
import { useAppDispatch } from "state/hooks";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "services/comeonAPI";
import { ILoginRequest } from "services/interfaces";
import { setCredentials, clearCredentials, setToast } from "state/actions";
import { useAuth } from "hooks/useAuth";
import { Input } from "components/Input/Input";
import { Button } from "components/Button/Button";
import classes from "./login.module.scss";
import { paths } from "services/routes";

export const Login = (): JSX.Element => {
    const [formState, setFormState] = React.useState<ILoginRequest>({
        username: "",
        password: "",
    });
    const [error, setError] = React.useState<any>(null);
    const { user } = useAuth();

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [login, { isLoading }] = useLoginMutation();

    const handleChange = ({
        target: { name, value },
    }: React.ChangeEvent<HTMLInputElement>) =>
        setFormState((prev) => ({ ...prev, [name]: value }));

    const handleSubmit = async (): Promise<void> => {
        try {
            await login(formState).then((response) => {
                dispatch(setCredentials(response));
                navigate(paths.games.path);
                dispatch(
                    setToast({
                        variant: "success",
                        message: `You have succesfully logged in! Welcome!`,
                    })
                );
            });
        } catch (error) {
            setError(error);
        }
    };

    const handleLogout = () => {
        dispatch(clearCredentials());
        dispatch(
            setToast({
                variant: "success",
                message: "Logged out! Thank you for visiting!",
            })
        );
    };

    return (
        <div className={classes.root}>
            <h2>Välkommen!</h2>
            {user ? (
                <div
                    className={[classes.message, classes.alreadyLoggedIn].join(
                        " "
                    )}
                >
                    <h3>Hi {user.name}! You are already logged in!</h3>
                    <p>{user.event}</p>
                    <Button size="small" color="white" to={paths.games.path}>
                        Go to games
                    </Button>
                    <Button size="small" color="dark" onClick={handleLogout}>
                        Logout
                    </Button>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    {error && (
                        <div
                            className={[classes.message, classes.error].join(
                                " "
                            )}
                        >
                            You have entered an incorrect username or password.
                            Please try again!
                        </div>
                    )}
                    <Input
                        error={error}
                        name="username"
                        label="Username"
                        type="text"
                        placeholder="Username"
                        onChange={handleChange}
                        formGroup="login"
                        value={formState.username}
                    />
                    <Input
                        error={error}
                        name="password"
                        label="Password"
                        type="password"
                        placeholder="Password"
                        onChange={handleChange}
                        formGroup="login"
                        value={formState.password}
                    />
                    <Button
                        type={"submit"}
                        disabled={isLoading}
                        onClick={handleSubmit}
                    >
                        {isLoading ? "Submitting..." : "Login"}
                    </Button>
                </form>
            )}
        </div>
    );
};
