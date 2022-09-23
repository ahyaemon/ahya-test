import {Component} from "solid-js";
import classes from "./Footer.module.css";
import {Link} from "@solidjs/router";
import {t} from "../i18n/i18nStore";

export const Footer: Component = () => {
    return (
        <div class={classes.copyright}>
            <small>&copy; {t("ahyaemon")} | <Link href="/about">{t("about")}</Link></small>
        </div>
    )
}
