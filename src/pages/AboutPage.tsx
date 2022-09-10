import {Component} from "solid-js";
import classes from "./AboutPage.module.css";
import externalLinkIcon from "../assets/link.png";

export const AboutPage: Component = () => {
    return (
        <div class={classes.container}>
            <p>制作：あひゃえもん</p>
            <p>
                <a href="https://ahyaemon.com" target="_blank">
                    公式ホームページ
                    <img src={externalLinkIcon} alt="external link to homepage" class={classes.externalLinkIcon}/>
                </a>
            </p>
            <p>
                <a href="https://github.com/ahyaemon/ahya-test" target="_blank">
                    GitHub
                    <img src={externalLinkIcon} alt="external link to github" class={classes.externalLinkIcon}/>
                </a>
            </p>
            <p style={{ "margin-top": "60px" }}>お借りした画像</p>
            <ul>
                <li>https://www.flaticon.com</li>
                <li>https://www.freeiconspng.com</li>
                <li>https://freesvg.org</li>
            </ul>
            <p style={{ "margin-top": "60px" }}>名言</p>
            <p>ジョジョの奇妙な冒険シリーズ</p>
        </div>
    )
}
