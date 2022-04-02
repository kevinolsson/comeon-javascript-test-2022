import React from "react";
import { useAppSelector, useAppDispatch } from "state/hooks";
import { decrement, increment } from "state/actions";
import { Link, useNavigate } from "react-router-dom";
import { LoginRequest, useLoginMutation } from "services/comeonAPI";
import { setCredentials } from "state/actions";

export const Home = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [formState, setFormState] = React.useState<LoginRequest>({
        username: "",
        password: "",
    });

    const [login, { isLoading }] = useLoginMutation();

    // const { value: count } = useAppSelector((state) => state.counter);
    // console.log(useAppSelector((state) => state));

    const handleChange = ({
        target: { name, value },
    }: React.ChangeEvent<HTMLInputElement>) =>
        setFormState((prev) => ({ ...prev, [name]: value }));

    return (
        <div
            style={{ margin: "24px", padding: "24px", backgroundColor: "#FFF" }}
        >
            <h1>Index</h1>
            <h2>Put the login screen here</h2>
            <Link to="/games">Go to games</Link>

            <div>
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
                        <button
                            onClick={async () => {
                                try {
                                    const response = await login(
                                        formState
                                    ).then((response) => response);
                                    dispatch(setCredentials(response));
                                    navigate("/games");
                                } catch (err) {
                                    console.log({ err });
                                    // toast({
                                    //     status: "error",
                                    //     title: "Error",
                                    //     description: "Oh no, there was an error!",
                                    //     isClosable: true,
                                    // });
                                }
                            }}
                        >
                            Login
                        </button>
                    )}
                </div>
            </div>

            {/* <div
                style={{
                    maxWidth: 500,
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                }}
            >
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    -
                </button>
                <h1 style={{ textAlign: "center" }}>{count}</h1>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>
            </div> */}
        </div>
    );
};
