import {Question} from "../Question";

export const YesNo = {
    yes: 'はい',
    no: 'いいえ',
} as const

export type YesNo = typeof YesNo[keyof typeof YesNo]

export function createYesNoQuestion <T> (title: string, getComment: (option: YesNo) => string): Question<YesNo> {
    return Question.createUnchecked(
        title,
        [YesNo.yes, YesNo.no],
        getComment,
    )
}
