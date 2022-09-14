import {Question} from "../Question";

export const Feeling = {
    yes: 'はい',
    no: 'いいえ',
} as const

export type Feeling = typeof Feeling[keyof typeof Feeling]

export const initialFeelingQuestion = Question.createUnchecked(
    '気分屋さんである',
    [Feeling.yes, Feeling.no],
)
