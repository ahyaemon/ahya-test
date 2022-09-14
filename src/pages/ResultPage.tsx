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
            <div>
                <div style={{ "margin-top": "20px" }}>あなたの AHYA-TYPE は・・・</div>
                <div style={{ "margin-top": "40px", "font-size": "24px", "font-weight": "bold", color: "#333" }}>{result.ahyaType}</div>
                <div style={{ "margin-top": "10px" }}>
                    <div class={`${classes.image} ${animalImageClass(result.animal)} ${animalColorClass(result.color)}`}></div>
                </div>
            </div>

            <div class={classes.h2} style={{ "margin-top": "60px", "padding": "0 20px" }}>
                &#128065; {result.ahyaType}タイプの特徴
            </div>

            <div style={{ "margin-top": "10px", "padding": "0 20px" }}>
                <div class={classes.explanation}>{result.movementExplanation}</div>
                <div class={classes.explanation}>{result.anxietyExplanation}</div>
            </div>

            <div class={classes.quote}>
                <div class={classes.quoteMessage}>{result.quote.message}</div>
                <div class={classes.quoteAuthor}>{result.quote.author}</div>
            </div>

            <div style={{ "margin-top": "20px", "padding": "0 20px" }}>
                <div class={classes.explanation}>{result.seasonExplanation}{result.feelingExplanation}</div>
                <div class={classes.explanation}>{result.importanceExplanation}</div>
            </div>

            <div class={classes.h2} style={{ "margin-top": "40px", "padding": "0 20px" }}>
                &#128578; {result.ahyaType}タイプの長所
            </div>

            <div style={{ "margin-top": "10px", "padding": "0 20px" }}>
                <div class={classes.explanation}>{result.prosOfFriend}</div>
                <div class={classes.explanation}>{result.propsOfWorking}</div>
            </div>

            <div class={classes.h2} style={{ "margin-top": "40px", "padding": "0 20px" }}>
                &#128542; {result.ahyaType}タイプの短所
            </div>

            <div style={{ "margin-top": "10px", "padding": "0 20px" }}>
                <div class={classes.explanation}>{result.consOfFriend}</div>
                <div class={classes.explanation}>{result.consOfWorking}</div>
            </div>

            <div class={classes.h2} style={{ "margin-top": "40px", "padding": "0 20px" }}>
                &#127808; {result.ahyaType}タイプの人へのアドバイス
            </div>

            <div style={{ "margin-top": "10px", "padding": "0 20px" }}>
                <div class={classes.explanation}>{result.ahyaType}タイプの人に言えることはただ一つ。この性格診断を間に受けないことです。</div>
            </div>
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
