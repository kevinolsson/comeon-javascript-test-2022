import React from "react";
import { useAppSelector, useAppDispatch } from "state/hooks";
import { setToast } from "state/actions";
import { classes } from "utils/classes";
import styles from "./toast.module.scss";

interface IToast {
    message: string;
    variant: "success" | "error";
}

export const Toast = ({ message, variant }): JSX.Element => (
    <div className={classes([styles.root, styles[variant]])}>
        <span className={styles.message}>{message}</span>
    </div>
);
