import {Component, createSignal, For} from "solid-js";
import classes from "./Question.module.css";
import {store} from "../store";

type QuestionProps = {
    questionNumber: number
    title: string
    options: string[]
}

export const Question: Component<QuestionProps> = (props) => {
    return (
        <div>
            <div class={classes.title}>Q{props.questionNumber}. {props.title}</div>
            <div class={classes.optionContainer}>
                <For each={props.options}>{ (option, i) =>
                    <div class={classes.optionArea} onClick={ () => store.check(props.questionNumber, option)}>
                        <div class={classes.checkBox}>{store.checked(props.questionNumber, i(), option) ? "✔" : ""}</div>
                        <div class={classes.option}>{option}</div>
                    </div>
                }</For>
            </div>
        </div>
    )
}