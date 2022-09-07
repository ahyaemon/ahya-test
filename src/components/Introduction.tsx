import {Component, For} from "solid-js";
import {Comment} from "./Comment";
import {CommentIcon} from "../types/CommentIcon";
import {CommentPosition} from "../types/CommentPosition";
import classes from "./Introduction.module.css";

const comments = [
    {
        icon: CommentIcon.obasan,
        message: '数問で性格が分かるらしいわよ。とりあえずやってみたら？',
        position: CommentPosition.left,
    },
    {
        icon: CommentIcon.musume,
        message: 'やなこった！',
        position: CommentPosition.right,
    },
    {
        icon: CommentIcon.obasan,
        message: 'クソガキ！',
        position: CommentPosition.left,
    },
]

export const Introduction: Component = () => {

    return (
        <div class={classes.container}>
            <For each={comments}>{comment =>
                <div class={comment.position === CommentPosition.left ? classes.left : classes.right}>
                    <Comment {...comment}/>
                </div>
            }</For>
        </div>
    )
}
