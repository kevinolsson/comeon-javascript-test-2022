import { useAppSelector, useAppDispatch } from 'state/hooks'
import { setFilterCategory } from "state/actions";
import { Button, IButton } from "components/Button/Button";
import { fetchCategories } from "services/comeonAPI";
import classes from "./game-header.module.scss";

export const GameHeader = (): JSX.Element => {
    const { data: categories } = fetchCategories({});

    const {category: activeCategory, search: activeSearch } = useAppSelector(state => state.filter);
    const activeGame = useAppSelector(state => state.game);
    
    const dispatch = useAppDispatch();
    const buttonProps = {
        size: "small",
        color: "white",
    } as IButton;

    const handleClick = (id: number): void => {
      if(id !== activeCategory) {
        dispatch(setFilterCategory(id));
      }
    }

    return (
        <div className={classes.root}>
            <h1>{activeGame || activeSearch || 'Games'}</h1>
            {categories?.length && (
                <div className={classes.categoryFilterRow}>
                    {categories.map((cat) => {
                        const isActive = activeCategory === cat.id;
                        return (
                            <Button
                                {...buttonProps}
                                key={cat.id}
                                onClick={() => {handleClick(cat.id)}}
                                variant={isActive ? "filled" : "outlined"}
                            >
                                {cat.name.toLowerCase()}
                            </Button>
                        );
                    })}
                </div>
            )}
        </div>
    );
};
