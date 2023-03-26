import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div", {id: "parent"}, React.createElement(
        "div", {id: "child"}, [React.createElement(
            "h1", {}, "I'm a h1 tag"
        ), React.createElement(
            "h2", {}, "I'm a h2 tag"
        )]
    ));

const heading = React.createElement("h1", { id: "heading" }, "Hello World");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(heading);