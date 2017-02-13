let React = require("react"),
    ReactDOM = require("react-dom"),
    {Route, Router, IndexRoute, hashHistory} = require("react-router");

// Load foundation
require("style!css!foundation-sites/dist/css/foundation.min.css");
$(document).foundation();

// App css
require("style!css!sass!applicationStyles");

ReactDOM.render(
    <p>React Boilerplate Project</p>,
    document.getElementById("app")
);