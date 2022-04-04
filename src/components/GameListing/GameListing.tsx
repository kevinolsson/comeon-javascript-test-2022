import React from "react";
import { fetchGames } from "services/comeonAPI";
import { useAppSelector, useAppDispatch } from "state/hooks"
import { TGameCollection  } from "services/interfaces";
import { GameSearch } from "components/GameSearch/GameSearch";
import { GameThumbnail } from "components/GameThumbnail/GameThumbnail";
import classes from './game-listing.module.scss';

const isPatternValid = (pattern: string): boolean => {
    try {
        !!"".match(new RegExp(pattern));
        return true;       
    } catch (err) {
        return false
    }
}

export const GameListing = () => {
    const { data: games} = fetchGames({});
    const {category: activeCategory, search: activeSearch } = useAppSelector(state => state.filter);
    const [filteredList, setFilteredList] = React.useState<TGameCollection | null>(games);
   
    React.useEffect(() => {
        // search
        const searchPattern = activeSearch && activeSearch?.length > 0 && isPatternValid(activeSearch) && new RegExp(activeSearch, "i");
        const filterBySearch = searchPattern && games?.filter(g => searchPattern.test(g.name)) || games;
        
        // category
        const filterByCategory = games?.filter(g => g.categoryIds.includes(activeCategory)) || []

        // both
        const newFilteredList = filterBySearch?.filter(game => {
            return filterByCategory.find(g => g.code === game.code)
        })

        setFilteredList(newFilteredList);
    }, [activeCategory, activeSearch, games])
    
    console.log({ games });

    return (
        <>
            <GameSearch />
            { games ? (
                <div className={[filteredList?.length && classes.listing].filter(Boolean).join(' ')}>
                    { filteredList?.length ? filteredList?.map(game => (
                        <div key={game.name}>
                            <GameThumbnail {...game} />
                        </div>
                    )) : (
                        <div className={classes.empty}>
                            <h2>Oops!</h2>
                            <p>It looks like we dont have <strong>{activeSearch}</strong> in our list of games yet!</p>
                        </div>
                        ) }

                </div>
            ) : <div/>}
        </>
    )
};
