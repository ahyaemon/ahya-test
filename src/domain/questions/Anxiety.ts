import {Question} from "../Question";

export const Anxiety = {
    yes: 'はい',
    no: 'いいえ'
} as const

export type Anxiety = typeof Anxiety[keyof typeof Anxiety]

export const initialAnxietyQuestion = Question.createUnchecked(
    '小さいことでも強く心配してしまう',
    [Anxiety.yes, Anxiety.no]
)
