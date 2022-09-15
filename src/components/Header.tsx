import {Component} from "solid-js";
import logo from "../assets/logo.webp";
import classes from "./Header.module.css";
import {useNavigate} from "@solidjs/router";

export const Header: Component = () => {

    const navigate = useNavigate()

    const navigateTop = () => {
        navigate('/')
    }

    return (
        <div class={classes.container} onClick={navigateTop}>
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
