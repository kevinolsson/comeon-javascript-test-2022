import classes from "./page-not-found.module.scss";
import { Link } from "react-router-dom";
import { paths } from "services/routes";

export const PageNotFound = () => (
    <div className={classes.root}>
        <h1>Page not found</h1>
        <p>
            Head back <Link to={paths.index.path}>home</Link> and see if you
            navigate from there!
        </p>
    </div>
);
