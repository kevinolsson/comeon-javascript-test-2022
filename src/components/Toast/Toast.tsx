import React from "react";
import { useAppSelector, useAppDispatch } from "state/hooks";
import { setToast } from "state/actions";
import { classes } from "utils/classes";
import styles from "./toast.module.scss";
import { IToast } from "./toast.interface";

export const Toast = ({ message, variant }: IToast): JSX.Element => (
    <div className={classes([styles.root, styles[variant]])}>
        <span className={styles.message}>{message}</span>
    </div>
);
