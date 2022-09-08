import {Component, For} from "solid-js";
import {Check} from "./Check";
import classes from "./CheckList.module.css";
import {useNavigate} from "@solidjs/router";
import {store} from "../store";

export const CheckList: Component = () => {

    const navigate = useNavigate()

    const handleSubmit = () => {
        navigate('/result')
    }

    return (
        <div class={classes.container}>
            <For each={store.checks()}>{ (check, i) =>
                <Check checkNumber={i() + 1} title={check.title} options={check.options}/>
            }</For>
            <button class={classes.submit} onClick={handleSubmit}>回答する</button>
        </div>
    )
}
