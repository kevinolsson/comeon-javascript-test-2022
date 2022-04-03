import React from "react";
import { useAppSelector, useAppDispatch } from "state/hooks";
import { setToast } from "state/actions";
import classes from "./toast.module.scss";
export interface IToast {
    message: string;
    variant: "success" | "error";
}

export const Toast = ({ message, variant }: IToast): JSX.Element => (
    <div className={[classes.root, classes[variant]].filter(Boolean).join(" ")}>
        <span className={classes.message}>{message}</span>
    </div>
);
