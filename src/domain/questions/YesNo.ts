import {Question} from "../Question";
import {messages} from "../../messages/messages";

export const YesNo = {
    yes: 'はい',
    no: 'いいえ',
} as const

export type YesNo = typeof YesNo[keyof typeof YesNo]

export function createYesNoQuestion(title: string): Question<YesNo> {
    return Question.createUnchecked(
        title,
        [YesNo.yes, YesNo.no],
        messages,
    )
}
