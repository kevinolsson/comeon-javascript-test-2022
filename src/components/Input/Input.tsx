import React from "react";
import classes from "./input.module.scss";
interface IInput {
    label: string;
    name: string;
    error?: boolean;
    value: string;
    type: "text" | "password";
    placeholder: string;
    formGroup: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
    name,
    label,
    error,
    formGroup,
    ...inputProps
}: IInput): JSX.Element => {
    const id = `input-${formGroup}-${label}`;
    return (
        <div
            className={[classes.root, error && classes.error]
                .filter(Boolean)
                .join(" ")}
        >
            <label htmlFor={id}>{label}</label>
            <input id={id} title={label} name={name} {...inputProps} />
        </div>
    );
};
