import { Outlet } from "react-router-dom";

export const AppWrapper = (): JSX.Element => (
    <div style={{ padding: "24px", backgroundColor: "#333", height: "100vh" }}>
        <h2 style={{ color: "#FFF" }}>AppWrapper</h2>
        <div>
            <Outlet />
        </div>
    </div>
);
