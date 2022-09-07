import type { Component } from 'solid-js';
import {Header} from "./components/Header";
import classes from "./App.module.css";
import {Conversation} from "./components/Conversation";

const App: Component = () => {
    return (
        <div class={classes.container}>
            <div class={classes.header}>
                <Header/>
            </div>
            <div class={classes.conversation}>
                <Conversation/>
            </div>
        </div>
    );
};

export default App;
