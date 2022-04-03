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
    element?: "button" | typeof Link;
    to?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
    label,
    children,
    size = "regular",
    variant = "filled",
    color = "primary",
    disabled,
    element = "button",
    to,
    ...props
}: IButton) => {
    const Component = element;
    return (
        <Component
            to={to || ""}
            type="button"
            className={[
                classes.root,
                classes[size],
                classes[variant],
                classes[color],
                disabled && classes.disabled,
            ]
                .filter(Boolean)
                .join(" ")}
            disabled
            {...props}
        >
            {children || label}
        </Component>
    );
};
