import {Component} from "solid-js";
import classes from "./Footer.module.css";
import {Link} from "@solidjs/router";

export const Footer: Component = () => {
    return (
        <div class={classes.copyright}>
            <small>&copy; あひゃえもん | <Link href="/about">このサイトについて</Link></small>
        </div>
    )
}
