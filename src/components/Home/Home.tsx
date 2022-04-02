import { useAppSelector, useAppDispatch } from "state/hooks";
import { decrement, increment } from "state/actions";
import { Link } from "react-router-dom";

export const Home = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const { value: count } = useAppSelector((state) => state.counter);
    console.log(useAppSelector((state) => state));

    return (
        <div
            style={{ margin: "24px", padding: "24px", backgroundColor: "#FFF" }}
        >
            <h1>Index</h1>
            <h2>Put the login screen here</h2>
            <Link to="/games">Go to games</Link>
            <div
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
            </div>
        </div>
    );
};
