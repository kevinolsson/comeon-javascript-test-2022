import { useParams, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "state/hooks"
import { setFilterCategory } from "state/actions";
import { fetchGames } from "services/comeonAPI";
import { Button, IButton } from "components/Button/Button";
import { fetchCategories } from "services/comeonAPI";
import { BackIcon } from "components/BackIcon/BackIcon";
import { paths } from "services/routes";
import classes from "./game-header.module.scss";

export const GameHeader = (): JSX.Element => {
    const { gameId } = useParams();
    const { data: games } = fetchGames({});
    const { data: categories } = fetchCategories({});
    const {category: activeCategory, search: activeSearch } = useAppSelector(state => state.filter);

    const dispatch = useAppDispatch();
    const buttonProps = {
        size: "small",
        color: "white",
    } as IButton;

    const handleSort = (id: number): void => {
      if(id !== activeCategory) {
        dispatch(setFilterCategory(id));
      }
    }

    return gameId ? (
        <div className={classes.root}>
            <h1>{games.find(game => game.code === gameId)?.name}</h1>
            <div className={classes.categoryFilterRow}>
                <Button to={'/' + paths.games.path} size="small" color="dark" variant="filled"><BackIcon /> Back to games</Button>
            </div>
        </div>
        ) : (
        <div className={classes.root}>
            <h1>{activeSearch && `Search: ${activeSearch}` || "Games"}</h1>
            {categories?.length && (
                <div className={classes.categoryFilterRow}>
                    {categories.map((cat) => {
                        const isActive = activeCategory === cat.id;
                        return (
                            <Button
                                {...buttonProps}
                                key={cat.id}
                                onClick={() => {handleSort(cat.id)}}
                                variant={isActive ? "filled" : "outlined"}
                            >
                                {cat.name.toLowerCase()}
                            </Button>
                        );
                    })}
                </div>
            )}
        </div>
    )
};
