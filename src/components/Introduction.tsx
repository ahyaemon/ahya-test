import {Component, For} from "solid-js";
import {Comment} from "./Comment";
import {CommentIcon} from "../types/CommentIcon";
import {CommentPosition} from "../types/CommentPosition";
import classes from "./Introduction.module.css";
import {getRandom} from "../utils/random";
import {I18nKey} from "../i18n/i18n";

type Comment = {
    icon: CommentIcon
    message: I18nKey
    position: CommentPosition
}

type Conversation = Comment[]

const conversations: Conversation[] = [
    [
        createObasanComment(CommentPosition.left, 'conversation1a'),
        createMusumeComment(CommentPosition.right, 'conversation1b'),
        createObasanComment(CommentPosition.left, 'conversation1c'),
    ],
    [
        createObasanComment(CommentPosition.left, 'conversation2a'),
        createMusumeComment(CommentPosition.right, 'conversation2b'),
        createObasanComment(CommentPosition.left, 'conversation2c'),
    ],
    [
        createObasanComment(CommentPosition.left, 'conversation3a'),
        createMusumeComment(CommentPosition.right, 'conversation3b'),
        createObasanComment(CommentPosition.left, 'conversation3c'),
    ],
]

function createObasanComment(position: CommentPosition, message: I18nKey): Comment {
    return { icon: CommentIcon.obasan, message, position }
}

function createMusumeComment(position: CommentPosition, message: I18nKey): Comment {
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
