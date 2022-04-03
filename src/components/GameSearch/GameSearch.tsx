import { useAppSelector, useAppDispatch } from "state/hooks";
import { setFilterSearch } from "state/actions";
import { SearchIcon } from "components/SearchIcon/SearchIcon";
import classes from "./game-search.module.scss";

export const GameSearch = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const { search: activeSearch } = useAppSelector((state) => state.filter);

    console.log({ activeSearch });
    const handleChange = ({
        target: { value },
    }: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFilterSearch(value));
    };

    return (
        <div className={classes.root}>
            <SearchIcon />
            <input
                placeholder={"Search games"}
                name="search"
                onChange={handleChange}
                value={activeSearch || ""}
                autoComplete="off"
            />
        </div>
    );
};
