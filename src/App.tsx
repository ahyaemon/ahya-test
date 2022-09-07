import type { Component } from 'solid-js';
import {Header} from "./components/Header";
import classes from "./App.module.css";

const App: Component = () => {
    return (
        <div>
            <div class={classes.header}>
                <Header/>
            </div>
        </div>
    );
};

export default App;
