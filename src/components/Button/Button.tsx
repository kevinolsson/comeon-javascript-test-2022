import classes from "./button.module.scss";
import { Link } from "react-router-dom";
interface IButton {
    label?: JSX.Element | string;
    onClick?: () => void;
    size?: "regular" | "small";
    variant?: "filled" | "outlined";
    color?: "primary" | "white" | "dark";
    children?: JSX.Element | string;
    disabled?: boolean;
    type?: "button" | "submit";
    to?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
    label,
    type = "button",
    children,
    size = "regular",
    variant = "filled",
    color = "primary",
    disabled,
    to,
    ...props
}: IButton) => {
    const Component = to ? Link : "button";
    return (
        <Component
            to={to || ""}
            type={type}
            className={[
                classes.root,
                classes[size],
                classes[variant],
                classes[color],
                disabled && classes.disabled,
            ]
                .filter(Boolean)
                .join(" ")}
            disabled={disabled}
            {...props}
        >
            {children || label}
        </Component>
    );
};
