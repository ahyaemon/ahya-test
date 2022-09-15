import {Component, For} from "solid-js";
import classes from "./Question.module.css";
import {store} from "../store";
import {toast} from "solid-toast";
import ojisan from "../assets/ojisan.webp";
import {Question} from "../domain/Question";

type QuestionProps = {
    questionNumber: number
    question: Question<any>
}

function showToast(message: string) {
    toast.dismiss()
    toast(message, {
        position: 'bottom-right',
        style: {
            'background-color': '#E5FDE5'
        },
        icon: <img src={ojisan} alt="toast" class={classes.icon}/>
    })
}

export const QuestionC: Component<QuestionProps> = ({ questionNumber, question }) => {

    const handleClick = (option: string) => {
        showToast(question.comment(option))
        store.check(question, option)
    }

    return (
        <div>
            <div class={classes.title}>Q{questionNumber}. {question.title}</div>
            <div class={classes.optionContainer}>
                <For each={question.options}>{ option =>
                    <div class={classes.optionArea} onClick={ () => handleClick(option) }>
                        <div class={classes.checkBox}>{question.optionChecked(option) ? "✔" : ""}</div>
                        <div class={classes.option}>{option}</div>
                    </div>
                }</For>
            </div>
        </div>
    )
}