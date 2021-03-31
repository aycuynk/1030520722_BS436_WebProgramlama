import React from "react";
import  ReactDOM from "react-dom";
import Game from "./game";

export const App = () => {

    return (
        <Game/>
    );

};
ReactDOM.render(<App />, document.getElementById("root"));

