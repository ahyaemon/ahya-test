import {Component, For} from "solid-js";
import {Check} from "./Check";
import classes from "./CheckList.module.css";

const checks = [
    {
        title: '好きな動物は？',
        options: ['犬', '猫', 'キツネ', 'トラ', 'ゴリラ'],
    },
    {
        title: '好きな色は？',
        options: ['赤', '青', '黄', '黒', '白'],
    },
]

export const CheckList: Component = () => {
    return (
        <div class={classes.container}>
            <For each={checks}>{ (check, i) =>
                <Check checkNumber={i() + 1} title={check.title} options={check.options}/>
            }</For>
        </div>
    )
}
