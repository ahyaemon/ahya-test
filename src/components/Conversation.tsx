import {Component, For} from "solid-js";
import {Comment} from "./Comment";
import {CommentIcon} from "../types/CommentIcon";
import {CommentPosition} from "../types/CommentPosition";

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

export const Conversation: Component = () => {

    return (
        <div>
            <For each={comments}>{comment =>
                <Comment {...comment}/>
            }</For>
        </div>
    )
}
