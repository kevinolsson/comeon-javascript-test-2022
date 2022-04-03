import React from "react";
import { useAppSelector, useAppDispatch } from "state/hooks";
import { setToast } from "state/actions";
import { Toast } from "./Toast";

export const ContextAwareToast = (): JSX.Element => {
    const { message, variant } = useAppSelector((state) => state.toast);
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        if (message) {
            setTimeout(() => {
                dispatch(setToast(""));
            }, 1500);
        }
    }, [message]);

    return <>{message && <Toast variant={variant} message={message} />}</>;
};
