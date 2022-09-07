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
            <header class={classes.header}>
                <Header/>
            </header>
            <main class={classes.main}>
                <Routes>
                    <Route path="/" component={TestPage}/>
                    <Route path="/result" component={ResultPage}/>
                </Routes>
            </main>
            <footer class={classes.footer}>
                <Footer/>
            </footer>
        </div>
    );
};

export default App;
