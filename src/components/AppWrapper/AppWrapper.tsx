import { Outlet } from "react-router-dom";

export const AppWrapper = (): JSX.Element => (
    <div style={{ backgroundColor: "#333", height: "100vh" }}>
        <h2 style={{ color: "#FFF" }}>AppWrapper</h2>
        <div>
            <Outlet />
        </div>
    </div>
);
