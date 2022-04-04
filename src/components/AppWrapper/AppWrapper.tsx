import { Outlet } from "react-router-dom";
import classes from "./app-wrapper.module.scss";
export interface IAppWrapper {
    children?: JSX.Element;
}

export const AppWrapper = ({ children }: IAppWrapper): JSX.Element => (
    <div className={classes.root}>
        <div className={classes.background} />
        <div className={classes.content}>
            {children ? children : <Outlet />}
        </div>
    </div>
);
