import {Component} from "solid-js";
import logo from "../assets/logo.webp";
import classes from "./Header.module.css";
import {useNavigate} from "@solidjs/router";
import {selectedLanguage, Language, setSelectedLanguage} from "../i18n/i18nStore";

export const Header: Component = () => {

    const navigate = useNavigate()

    const navigateTop = () => {
        navigate('/')
    }

    const getClasses = (language: Language): string => {
        if (selectedLanguage() === language) {
            return `${classes.language} ${classes.languageSelected}`
        } else {
            return classes.language
        }
    }

    return (
        <div class={classes.container}>
            <div class={classes.logoContainer} onClick={navigateTop}>
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
            <div class={classes.i18nContainer}>
                <div
                    class={getClasses(Language.jp)}
                    onClick={() => { setSelectedLanguage(Language.jp) }}
                >
                    JP
                </div>
                <div
                    class={getClasses(Language.en)}
                    onClick={() => { setSelectedLanguage(Language.en) }}
                >
                    EN
                </div>
            </div>
        </div>
    )
}
