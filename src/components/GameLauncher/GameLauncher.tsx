import { useParams } from "react-router-dom";

export const GameLauncher = () => {
    const { gameId } = useParams();
    return (
        <div>
            <h2>Game: {gameId}</h2>
        </div>
    );
};
