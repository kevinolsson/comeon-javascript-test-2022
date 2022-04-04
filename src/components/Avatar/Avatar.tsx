import classes from "./avatar.module.scss";

export const Avatar = ({
    src,
    name,
}: {
    src: string;
    name: string;
}): JSX.Element | null => {
    if (!src) return null;
    return (
        <img
            className={classes.root}
            src={process.env.PUBLIC_URL + src}
            alt={name}
        />
    );
};
