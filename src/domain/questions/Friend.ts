import {Question} from "../Question";

export const Friend = {
    yes: 'はい',
    no: 'いいえ',
} as const

export type Friend = typeof Friend[keyof typeof Friend]

export const initialFriendQuestion = Question.createUnchecked(
    '初対面でもすぐに仲良くなれる',
    [Friend.yes, Friend.no],
)
