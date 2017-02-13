import React from "react";
import ReactDOM from "react-dom";
import { Route, Router, IndexRoute, hashHistory } from "react-router";

import Main from "Main";
import DogsChecker from "DogsChecker";
import DogsCollector from "DogsCollector";

// Load foundation
require("style!css!foundation-sites/dist/css/foundation.min.css");
$(document).foundation();

// App css
require("style!css!sass!applicationStyles");

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={ Main }>
            <IndexRoute component={ DogsChecker }/>
            <Route path="dogs-collector" component={ DogsCollector }/>
        </Route>
    </Router>,
    document.getElementById("app")
);