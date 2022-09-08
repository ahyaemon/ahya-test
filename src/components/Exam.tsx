import {Component, For} from "solid-js";
import {Question} from "./Question";
import classes from "./Exam.module.css";
import {useNavigate} from "@solidjs/router";
import {store} from "../store";
import {toast} from "solid-toast";
import ojisan from "../assets/ojisan.png";

function showToast(message: string) {
    toast.dismiss()
    toast(message, {
        position: 'bottom-right',
        style: {
            'background-color': '#ffdddd'
        },
        icon: <img src={ojisan} class={classes.icon}/>
    })
}

export const Exam: Component = () => {

    const navigate = useNavigate()

    const handleSubmit = () => {
        const unchecked = store.getFirstUncheckedQuestion()
        if (unchecked === undefined) {
            navigate('/result')
            return
        }

        showToast(`Q${unchecked + 1} 回答してなくない？`)
    }

    return (
        <div class={classes.container}>
            <For each={store.questions()}>{ (question, i) =>
                <Question questionNumber={i() + 1} title={question.title} options={question.options}/>
            }</For>
            <button class={classes.submit} onClick={handleSubmit}>回答する</button>
        </div>
    )
}
