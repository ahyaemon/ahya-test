import {Component} from "solid-js";
import logo from "../assets/logo.webp";
import classes from "./Header.module.css";
import {useNavigate} from "@solidjs/router";
import {Language, i18nStore, t} from "../i18n/i18nStore";

export const Header: Component = () => {

    const navigate = useNavigate()

    const navigateTop = () => {
        navigate('/')
    }

    const getClasses = (language: Language): string => {
        if (i18nStore.selectedLanguage() === language) {
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
                    {t("pageSubtitle")}
                </div>
            </div>
            <div class={classes.i18nContainer}>
                <div
                    class={getClasses(Language.jp)}
                    onClick={() => { i18nStore.setSelectedLanguage(Language.jp) }}
                >
                    JP
                </div>
                <div
                    class={getClasses(Language.en)}
                    onClick={() => { i18nStore.setSelectedLanguage(Language.en) }}
                >
                    EN
                </div>
            </div>
        </div>
    )
}
