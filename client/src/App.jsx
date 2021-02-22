import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Test } from "./components/Test";

const App = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Test} />
            </Switch>
        </>
    );
};

ReactDOM.render(
        <Router>
            <Route path="/" component={App} />
        </Router>,
    document.getElementById("root")
);