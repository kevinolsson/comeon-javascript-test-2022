import React from "react";

export const useGames = () => {
    const [games, setGames] = React.useState([]);

    React.useEffect(() => {
        if (!games.length) {
            fetch("http://localhost:3001/games", { method: "get" })
                .then((response) => response.json())
                .then((data) => setGames(data));
        }
    }, []);

    return games;
};
