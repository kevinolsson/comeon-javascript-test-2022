import React from "react";
import { useAppSelector, useAppDispatch } from "state/hooks";
import { setToast } from "state/actions";
import { Toast } from "./Toast";

export const ContextAwareToast = (): JSX.Element => {
    const { message } = useAppSelector((state) => state.toast);
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        if (message) {
            setTimeout(() => {
                dispatch(setToast(""));
            }, 1000);
        }
    }, [message]);

    return <div>{message && <Toast variant="error" message={message} />}</div>;
};
