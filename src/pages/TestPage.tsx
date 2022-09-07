import {Component} from "solid-js";
import classes from "./TestPage.module.css";
import {Introduction} from "../components/Introduction";
import {CheckList} from "../components/CheckList";

export const TestPage: Component = () => {
    return (
        <>
            {/* FIXME 親要素の grid に依存している */}
            <div class={classes.introduction}>
                <Introduction/>
            </div>
            <div class={classes.checkList}>
                <CheckList/>
            </div>
        </>
    )
}
