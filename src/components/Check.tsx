import {Component, For} from "solid-js";
import classes from "./Check.module.css";

type CheckProps = {
    checkNumber: number
    title: string
    options: string[]
}

export const Check: Component<CheckProps> = (props) => {
    return (
        <div>
            <div class={classes.title}>Q{props.checkNumber}. {props.title}</div>
            <div class={classes.optionContainer}>
                <For each={props.options}>{ option =>
                    <div class={classes.optionArea}>
                        <div class={classes.checkBox}></div>
                        <div class={classes.option}>{option}</div>
                    </div>
                }</For>
            </div>
        </div>
    )
}