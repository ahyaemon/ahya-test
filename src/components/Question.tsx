import {Component, For} from "solid-js";
import classes from "./Question.module.css";
import {store} from "../store";
import {toast} from "solid-toast";
import ojisan from "../assets/ojisan.png";
import {getRandom, trueByPercent} from "../utils/random";

type QuestionProps = {
    questionNumber: number
    title: string
    options: string[]
}

const messages: string[] = [
    'へえ、そうなんだ！',
    '知らなかった！',
    'マジで？',
]

function createMessage(questionNumber: number, answer: string): string {
    if (questionNumber === 1 || questionNumber == 2) {
        if (trueByPercent(30)) {
            return `僕は${answer}は嫌いだな`
        }
    }

    return getRandom(messages)
}

function showToast(message: string) {
    toast.dismiss()
    toast(message, {
        position: 'bottom-right',
        style: {
            'background-color': '#E5FDE5'
        },
        icon: <img src={ojisan} class={classes.icon}/>
    })
}

// FIXME どのオプションがチェックされてるかは上から渡したほうが良いと思う
export const Question: Component<QuestionProps> = (props) => {

    const handleClick = (option: string) => {
        showToast(createMessage(props.questionNumber, option))
        store.check(props.questionNumber, option)
    }

    return (
        <div>
            <div class={classes.title}>Q{props.questionNumber}. {props.title}</div>
            <div class={classes.optionContainer}>
                <For each={props.options}>{ (option, i) =>
                    <div class={classes.optionArea} onClick={ () => handleClick(option)}>
                        <div class={classes.checkBox}>{store.checked(props.questionNumber, i(), option) ? "✔" : ""}</div>
                        <div class={classes.option}>{option}</div>
                    </div>
                }</For>
            </div>
        </div>
    )
}