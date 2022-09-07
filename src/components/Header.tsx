import {Component} from "solid-js";
import logo from "../assets/logo.png";
import classes from "./Header.module.css";
import {useNavigate} from "@solidjs/router";

export const Header: Component = () => {

    const navigate = useNavigate()

    const navigateTop = () => {
        navigate('/')
    }

    return (
        <div class={classes.container}>
            {/* FIXME navigateTop を親要素のみに持たせたい（親の width が画面いっぱいになっちゃうから現状は子供に持たせてる） */}
            <div class={classes.logo} onClick={navigateTop}>
                <img src={logo} alt="logo"/>
            </div>
            <div class={classes.title} onClick={navigateTop}>
                AHYA-TEST
            </div>
            <div class={classes.subtitle} onClick={navigateTop}>
                絶対当たる性格診断
            </div>
        </div>
    )
}
