import {Component} from "solid-js";
import logo from "../assets/logo.png";
import classes from "./Header.module.css";

export const Header: Component = () => {
    return (
        <div class={classes.container}>
            <div class={classes.logo}>
                <img src={logo} alt="logo"/>
            </div>
            <div class={classes.title}>
                AHYA-TEST
            </div>
            <div class={classes.subtitle}>
                絶対当たる性格診断
            </div>
        </div>
    )
}
