import {Component, createSignal, For} from "solid-js";
import classes from "./Check.module.css";
import {store} from "../store";

type CheckProps = {
    checkNumber: number
    title: string
    options: string[]
}

// FIXME Check -> Question
export const Check: Component<CheckProps> = (props) => {
    return (
        <div>
            <div class={classes.title}>Q{props.checkNumber}. {props.title}</div>
            <div class={classes.optionContainer}>
                <For each={props.options}>{ (option, i) =>
                    <div class={classes.optionArea} onClick={ () => store.check(props.checkNumber, option)}>
                        <div class={classes.checkBox}>{store.checked(props.checkNumber, i(), option) ? "✔️" : ""}️</div>
                        <div class={classes.option}>{option}</div>
                    </div>
                }</For>
            </div>
        </div>
    )
}