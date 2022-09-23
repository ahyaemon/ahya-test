import {Question} from "../Question";
import {I18nKey} from "../../i18n/i18n";

export const YesNo = {
    yes: 'yes',
    no: 'no',
} as const

export type YesNo = typeof YesNo[keyof typeof YesNo]

export function createYesNoQuestion(title: I18nKey, getComment: (option: YesNo) => string): Question<YesNo> {
    return Question.createUnchecked(
        title,
        [YesNo.yes, YesNo.no],
        getComment,
    )
}
