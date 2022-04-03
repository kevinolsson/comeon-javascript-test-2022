import React from "react";
import { fetchGames } from "services/comeonAPI";
import { useAppSelector, useAppDispatch } from "state/hooks"
import { TGameCollection  } from "services/interfaces";
import { GameSearch } from "components/GameSearch/GameSearch";

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
    

    return (
        <>
            <GameSearch />
            { games ? (
                <div>
                    {filteredList?.map(g => (
                        <div key={g.name}><h3>{g.name}</h3></div>
                    ))}
                </div>
            ) : <div />}
        </>
    )
};
