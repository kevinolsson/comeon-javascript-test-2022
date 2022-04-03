import classes from "./button.module.scss";
interface IButton {
    label: JSX.Element | string;
    onClick: () => void;
    size: "regular" | "small";
    variant: "filled" | "outlined";
    color: "primary" | "white" | "dark";
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
    label,
    size = "regular",
    variant = "filled",
    color = "primary",
    ...props
}: IButton) => {
    return (
        <button
            type="button"
            className={[
                classes.root,
                classes[size],
                classes[variant],
                classes[color],
            ].join(" ")}
            {...props}
        >
            {label}
        </button>
    );
};
