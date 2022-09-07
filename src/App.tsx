import type { Component } from 'solid-js';
import {Header} from "./components/Header";
import classes from "./App.module.css";
import {Introduction} from "./components/Introduction";
import {CheckList} from "./components/CheckList";

const App: Component = () => {
    return (
        <div class={classes.container}>
            <div class={classes.header}>
                <Header/>
            </div>
            <div class={classes.introduction}>
                <Introduction/>
            </div>
            <div class={classes.checkList}>
                <CheckList/>
            </div>
        </div>
    );
};

export default App;