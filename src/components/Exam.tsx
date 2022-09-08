import {Component, For} from "solid-js";
import {Question} from "./Question";
import classes from "./Exam.module.css";
import {useNavigate} from "@solidjs/router";
import {store} from "../store";

export const Exam: Component = () => {

    const navigate = useNavigate()

    const handleSubmit = () => {
        navigate('/result')
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
