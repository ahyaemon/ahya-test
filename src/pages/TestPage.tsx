import {Component} from "solid-js";
import classes from "./TestPage.module.css";
import {Introduction} from "../components/Introduction";
import {CheckList} from "../components/CheckList";

export const TestPage: Component = () => {
    return (
        <>
            <div class={classes.introduction}>
                <Introduction/>
            </div>
            <div class={classes.checkList}>
                <CheckList/>
            </div>
        </>
    )
}
