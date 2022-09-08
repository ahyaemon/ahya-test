import {Component, createSignal, onMount, Show} from "solid-js";
import classes from "./ResultPage.module.css";
import {store} from "../store";
import {Result} from "../types/Result";
import {Animal} from "../questions/Animal";
import {Color} from "../questions/Color";

// FIXME 回答は query parameter で渡すようにする
export const ResultPage: Component = () => {

    const [result, setResult] = createSignal<Result | undefined>()

    onMount(() => {
        setResult(store.result())
    })

    return (
        <Show when={result() !== undefined} keyed fallback={<div>解析中・・・</div>}>
                <div class={classes.container}>
                    <div style={{ "margin-top": "20px" }}>あなたの AHYA-TYPE は・・・</div>
                    <div style={{ "margin-top": "40px", "font-size": "24px", "font-weight": "bold", color: "#333" }}>{result()!.ahyaType}</div>
                    <div style={{ "margin-top": "10px"}}>
                        <div class={`${classes.image} ${animalImageClass(result()!.animal)} ${animalColorClass(result()!.color)}`}></div>
                    </div>
                </div>
        </Show>

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
