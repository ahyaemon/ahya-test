import {Component, For} from "solid-js";
import {Comment} from "./Comment";
import {CommentIcon} from "../types/CommentIcon";
import {CommentPosition} from "../types/CommentPosition";
import classes from "./Introduction.module.css";
import {getRandom} from "../utils/random";

type Comment = {
    icon: CommentIcon
    message: string
    position: CommentPosition
}

type Conversation = Comment[]

const conversations: Conversation[] = [
    [
        createObasanComment(CommentPosition.left, '数問で性格が分かるらしいわよ。とりあえずやってみたら？'),
        createMusumeComment(CommentPosition.right, 'やなこった！'),
        createObasanComment(CommentPosition.left, 'クソガキ！'),
    ],
    [
        createObasanComment(CommentPosition.left, '質問に答えて性格を診断しましょう'),
        createMusumeComment(CommentPosition.right, '当てはまる回答がない'),
        createObasanComment(CommentPosition.left, 'それでも答えるのが大人なのよ'),
    ],
    [
        createObasanComment(CommentPosition.left, 'あんまり考え込まずに直感で回答しましょう'),
        createMusumeComment(CommentPosition.right, 'うーん、本当にそれで良いのかな'),
        createObasanComment(CommentPosition.left, '言うこと聞いてたか？'),
    ],
]

function createObasanComment(position: CommentPosition, message: string): Comment {
    return { icon: CommentIcon.obasan, message, position }
}

function createMusumeComment(position: CommentPosition, message: string): Comment {
    return { icon: CommentIcon.musume, message, position }
}

function getRandomConversation(): Conversation {
    return getRandom(conversations)
}

export const Introduction: Component = () => {

    const comments = getRandomConversation()

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
