import {Question} from "../Question";
import {getReplacedTemplateMessage} from "../../messages/messages";
import {t} from "../../i18n/i18nStore";

export const Importance = {
    family: 'family',
    money: 'money',
    love: 'love',
    talent: 'talent',
    nothing: 'nothing',
} as const

export type Importance = typeof Importance[keyof typeof Importance]

export const initialImportanceQuestion = Question.createUnchecked(
    'importanceQuestion',
    [Importance.family, Importance.money, Importance.love, Importance.talent, Importance.nothing],
    option => {
        switch (option) {
            case Importance.nothing: return t("importanceNothingComment")
            case Importance.family: return t("importanceFamilyComment")
            case Importance.money: return t("importanceMoneyComment")
            case Importance.love: return t("importanceLoveComment")
            case Importance.talent: return t("importanceTalentComment")
            default: return getReplacedTemplateMessage(option)
        }
    },
)
