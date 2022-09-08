import {Component, createSignal, For} from "solid-js";
import classes from "./Check.module.css";

type CheckProps = {
    checkNumber: number
    title: string
    options: string[]
}

export const Check: Component<CheckProps> = (props) => {

    let [checkedIndex, setCheckedIndex] = createSignal<number | undefined>(undefined)

    const toggleCheck = (i: number) => {
        setCheckedIndex(i)
    }

    return (
        <div>
            <div class={classes.title}>Q{props.checkNumber}. {props.title}</div>
            <div class={classes.optionContainer}>
                <For each={props.options}>{ (option, i) =>
                    <div class={classes.optionArea} onClick={ () => toggleCheck(i())}>
                        <div class={classes.checkBox}>{checkedIndex() === i() ? "✔️" : ""}️</div>
                        <div class={classes.option}>{option}</div>
                    </div>
                }</For>
            </div>
        </div>
    )
}