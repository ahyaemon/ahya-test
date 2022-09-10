import {Component, onMount} from "solid-js";
import classes from "./ResultPage.module.css";
import {store} from "../store";
import {Result} from "../domain/Result";
import {Animal} from "../domain/questions/Animal";
import {Color} from "../domain/questions/Color";
import {toast} from "solid-toast";
import {Link, useSearchParams} from "@solidjs/router";

export const ResultPage: Component = () => {

    onMount(() => {
        toast.dismiss()
    })

    const [params] = useSearchParams()

    let result: Result
    try {
        result = store.createResultFromAnswerString(params.a)
    } catch (e) {
        if (e instanceof Error) {
            console.log(e)
        }

        return (
            <div>
                <p>何か良く分からないエラー発生！！</p>
                <p><Link href="/">TOPページ</Link>からやり直すべし！！</p>
            </div>
        )
    }

    return (
        <div class={classes.container}>
            <div style={{ "margin-top": "20px" }}>あなたの AHYA-TYPE は・・・</div>
            <div style={{ "margin-top": "40px", "font-size": "24px", "font-weight": "bold", color: "#333" }}>{result.ahyaType}</div>
            <div style={{ "margin-top": "10px" }}>
                <div class={`${classes.image} ${animalImageClass(result.animal)} ${animalColorClass(result.color)}`}></div>
            </div>
            <div style={{ "margin": "20px auto 0 auto", "padding": "0 10px", "max-width": "400px", "text-align": "justify" }}>{result.movementExplanation}</div>
            <div style={{ "margin": "0px auto 0 auto", "padding": "0 10px", "max-width": "400px", "text-align": "justify" }}>{result.anxietyExplanation}</div>
        </div>
    )
}

function animalImageClass(animal: Animal): string {
    switch (animal) {
        case Animal.dog: return classes.dog
        case Animal.cat: return classes.cat
        case Animal.fox: return classes.fox
        case Animal.rabbit: return classes.rabbit
        case Animal.gorilla: return classes.gorilla
    }
}

function animalColorClass(color: Color): string {
    switch (color) {
        case Color.red: return classes.red
        case Color.blue: return classes.blue
        case Color.green: return classes.green
        case Color.black: return classes.black
    }
}
