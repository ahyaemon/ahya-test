import {Component, For} from "solid-js";
import classes from "./Question.module.css";
import {store} from "../store";
import {toast} from "solid-toast";
import ojisan from "../assets/ojisan.png";
import {getRandom} from "../utils/random";
import {Question} from "../domain/Question";
import {templateMessages, messages} from "../messages/messages";

type QuestionProps = {
    questionNumber: number
    question: Question<any>
}

// FIXME Question の判定方法が微妙な気がする。引数に Question をとる形にできないか
// Question クラス自体に回答を返すメソッドをつければいける？
function createMessage(questionNumber: number, answer: string): string {
    if ([1, 2, 5].includes(questionNumber)) {
        return getRandom(templateMessages).replace('$answer', answer)
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

export const QuestionC: Component<QuestionProps> = ({ questionNumber, question }) => {

    const handleClick = (option: string) => {
        showToast(createMessage(questionNumber, option))
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