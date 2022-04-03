import classes from "./game-header.module.scss";
import { Button, IButton } from "components/Button/Button";
import { fetchCategories } from "services/comeonAPI";

export const GameHeader = (): JSX.Element => {
    const { data: categories } = fetchCategories({});
    console.log({ categories });
    const buttonProps = {
        size: "small",
        color: "white",
        variant: "filled",
    } as IButton;

    return (
        <div className={classes.root}>
            <h1>Games</h1>
            {categories.length && (
                <div className={classes.categoryFilterRow}>
                    {categories.map((cat) => (
                        <Button {...buttonProps}>
                            {cat.name.toLowerCase()}
                        </Button>
                    ))}
                    {/* <Button {...buttonProps}>All Games</Button>
                    <Button {...buttonProps}>All Games</Button>
                    <Button {...buttonProps}>All Games</Button> */}
                </div>
            )}
        </div>
    );
};
