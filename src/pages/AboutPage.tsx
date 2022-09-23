import {Component} from "solid-js";
import classes from "./AboutPage.module.css";
import externalLinkIcon from "../assets/link.webp";
import {t} from "../i18n/i18nStore";

export const AboutPage: Component = () => {
    return (
        <div class={classes.container}>
            <p>{t('creator')}</p>
            <p>
                <a href="https://ahyaemon.com" target="_blank">
                    {t('officialWebSite')}
                    <img src={externalLinkIcon} alt="external link to homepage" class={classes.externalLinkIcon}/>
                </a>
            </p>
            <p>
                <a href="https://github.com/ahyaemon/ahya-test" target="_blank">
                    GitHub
                    <img src={externalLinkIcon} alt="external link to github" class={classes.externalLinkIcon}/>
                </a>
            </p>
            <p style={{ "margin-top": "60px" }}>{t('borrowedImages')}</p>
            <ul>
                <li>https://www.flaticon.com</li>
                <li>https://www.freeiconspng.com</li>
                <li>https://freesvg.org</li>
            </ul>
            <p style={{ "margin-top": "60px" }}>{t('quote')}</p>
            <p>{t('jojo')}</p>
        </div>
    )
}
