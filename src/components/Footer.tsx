import {Component} from "solid-js";
import classes from "./Footer.module.css";

export const Footer: Component = () => {
    return (
        <div class={classes.copyright}>
            <small>&copy; あひゃえもん</small>
        </div>
    )
}