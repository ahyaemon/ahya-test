import {Component, For} from "solid-js";
import {QuestionC} from "./QuestionC";
import classes from "./Exam.module.css";
import {useNavigate} from "@solidjs/router";
import {store} from "../store";
import {toast} from "solid-toast";
import ojisan from "../assets/ojisan.webp";
import {t} from "../i18n/i18nStore";

function showToast(message: string) {
    toast.dismiss()
    toast(message, {
        position: 'bottom-right',
        style: {
            'background-color': '#ffdddd'
        },
        icon: <img src={ojisan} alt="ojisan" class={classes.icon}/>
    })
}

export const Exam: Component = () => {

    const navigate = useNavigate()

    const handleSubmit = () => {
        const unchecked = store.getFirstUncheckedQuestion()
        if (unchecked === undefined) {
            navigate(`/result?a=${store.createQueryParams()}`)
            return
        }

        showToast(t("notAnswered", `Q${unchecked + 1}`))
    }

    return (
        <div class={classes.container}>
            <For each={store.questions()}>{ (question, i) =>
                <QuestionC questionNumber={i() + 1} question={question}/>
            }</For>
            <button class={classes.submit} onClick={handleSubmit}>{t("answer")}</button>
        </div>
    )
}
