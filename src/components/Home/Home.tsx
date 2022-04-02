import React from "react";
import { useAppDispatch } from "state/hooks";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "services/comeonAPI";
import { ILoginRequest } from "services/interfaces";
import { setCredentials } from "state/actions";
import { useAuth } from "hooks/useAuth";
import styles from "./home.module.scss";

export const Home = (): JSX.Element => {
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
                navigate("/games");
            });
        } catch (error) {
            setError(error);
        }
    };

    return (
        <div className={styles.root}>
            <h1 className={styles.root + "__header"}>Index</h1>

            {user ? (
                <div>
                    <h2>You are already logged in!</h2>
                    <Link to="/games">Go to games</Link>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    {error && (
                        <div>
                            <h2>Error!</h2>
                        </div>
                    )}
                    <div>
                        <label>Username</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="username"
                            placeholder="username"
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            onChange={handleChange}
                            type="password"
                            name="password"
                            placeholder="password"
                        />
                    </div>
                    <div>
                        {isLoading ? (
                            <div>Loading...</div>
                        ) : (
                            <button onClick={handleSubmit}>Login</button>
                        )}
                    </div>
                </form>
            )}
        </div>
    );
};
