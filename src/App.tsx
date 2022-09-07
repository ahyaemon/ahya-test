import type { Component } from 'solid-js';
import {Header} from "./components/Header";
import classes from "./App.module.css";
import {Footer} from "./components/Footer";
import {TestPage} from "./pages/TestPage";
import {Route, Routes} from '@solidjs/router';
import {ResultPage} from "./pages/ResultPage";

const App: Component = () => {

    return (
        <div class={classes.container}>
            <div class={classes.header}>
                <Header/>
            </div>
            <Routes>
                <Route path="/" component={TestPage}/>
                <Route path="/result" component={ResultPage}/>
            </Routes>
            <div class={classes.footer}>
                <Footer/>
            </div>
        </div>
    );
};

export default App;
