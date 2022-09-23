import {Question} from "../Question";
import {getReplacedTemplateMessage} from "../../messages/messages";
import {t} from "../../i18n/i18nStore";

export const Color = {
    red: 'red',
    blue: 'blue',
    yellow: 'yellow',
    green: 'green',
    black: 'black',
} as const

export type Color = typeof Color[keyof typeof Color]

export function toAdjective(color: Color): string {
    switch (color) {
        case Color.red: return t("redAdjective")
        case Color.blue: return t("blueAdjective")
        case Color.yellow: return t("yellowAdjective")
        case Color.green: return t("greenAdjective")
        case Color.black: return t("blackAdjective")
    }
}

export const initialColorQuestion = Question.createUnchecked(
    'colorQuestion',
    [Color.red, Color.blue, Color.yellow, Color.green, Color.black],
    option => getReplacedTemplateMessage(option),
)
