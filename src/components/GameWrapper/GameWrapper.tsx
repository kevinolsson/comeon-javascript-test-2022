import { Outlet, Link } from "react-router-dom";

export const GameWrapper = (): JSX.Element => (
    <div>
        <div
            style={{
                backgroundColor: "#FFF",
                width: "100%",
                height: "100px",
            }}
        >
            <Link to="/">Home</Link>
        </div>
        <h1 style={{ color: "white" }}>Games Wrapper</h1>
        <div
            style={{ margin: "24px", padding: "24px", backgroundColor: "#FFF" }}
        >
            <Outlet />
        </div>
    </div>
);
