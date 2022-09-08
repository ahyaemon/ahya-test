import {Component} from "solid-js";
import classes from "./TestPage.module.css";
import {Introduction} from "../components/Introduction";
import {Exam} from "../components/Exam";

export const TestPage: Component = () => {
    return (
        <div class={classes.container}>
            <div class={classes.introduction}>
                <Introduction/>
            </div>
            <div class={classes.exam}>
                <Exam/>
            </div>
        </div>
    )
}
