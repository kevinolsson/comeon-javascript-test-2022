import { Routes, Route } from "react-router-dom";
import { AppWrapper } from "components/AppWrapper/AppWrapper";
import { Home } from "components/Home/Home";
import { GameWrapper } from "components/GameWrapper/GameWrapper";
import { GameLauncher } from "components/GameLauncher/GameLauncher";
import { GameListing } from "components/GameListing/GameListing";
import { PageNotFound } from "components/PageNotFound/PageNotFound";
import { ProtectedComponent } from "components/ProtectedComponent/ProtectedComponent";
import { ContextAwareToast as Toast } from "components/Toast/ContextAwareToast";
import { paths } from "services/routes";

export const App = (): JSX.Element => {
    return (
        <>
            <Toast />
            <Routes>
                <Route path={paths.index.path} element={<AppWrapper />}>
                    <Route index element={<Home />} />
                    <Route
                        path={paths.games.path}
                        element={
                            <ProtectedComponent>
                                <GameWrapper />
                            </ProtectedComponent>
                        }
                    >
                        <Route
                            path={paths.games.gameLauncher.path}
                            element={<GameLauncher />}
                        />
                        <Route index element={<GameListing />} />
                    </Route>
                    <Route
                        path={paths.pageNotFound.path}
                        element={<PageNotFound />}
                    />
                </Route>
            </Routes>
        </>
    );
};
