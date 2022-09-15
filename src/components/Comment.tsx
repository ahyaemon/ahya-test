import {Component} from "solid-js";
import obasan from "../assets/obasan.webp";
import ojisan from "../assets/ojisan.webp";
import musume from "../assets/musume.webp";
import classes from "./Comment.module.css";
import {CommentIcon} from "../types/CommentIcon";
import {CommentPosition} from "../types/CommentPosition";

type CommentProps = {
    icon: CommentIcon
    message: string
    position: CommentPosition
}

export const Comment: Component<CommentProps> = (props) => {

    const src = getIconSrc(props.icon)

    const iconClass = props.position === CommentPosition.left ?
        classes.left : classes.right

    const messageClass = props.position === CommentPosition.left ?
        classes.right : classes.left

    return (
        <div class={classes.container}>
            <div class={`${classes.icon} ${iconClass}`}>
                <img src={src} alt="icon"/>
            </div>
            <div class={`${classes.message} ${messageClass}`}>
                {props.message}
            </div>
        </div>
    )
}

function getIconSrc(icon: CommentIcon): string {
    switch (icon) {
        case CommentIcon.obasan: return obasan;
        case CommentIcon.ojisan: return ojisan;
        case CommentIcon.musume: return musume;
    }
    throw Error(`invalid icon type: ${icon}`)
}
