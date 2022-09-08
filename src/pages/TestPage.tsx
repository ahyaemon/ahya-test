import {Component, onMount} from "solid-js";
import classes from "./TestPage.module.css";
import {Introduction} from "../components/Introduction";
import {Exam} from "../components/Exam";
import {preloadImages} from "../utils/preload";

export const TestPage: Component = () => {

    onMount(() => {
        preloadImages()
    })

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
