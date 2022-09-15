import {Question} from "../Question";
import {getReplacedTemplateMessage} from "../../messages/messages";

export const Color = {
    red: '赤',
    blue: '青',
    yellow: '黄色',
    green: '緑',
    black: '黒',
} as const

export type Color = typeof Color[keyof typeof Color]

export function toAdjective(color: Color): string {
    switch (color) {
        case Color.red: return '赤い'
        case Color.blue: return '青い'
        case Color.yellow: return '黄色い'
        case Color.green: return '緑の'
        case Color.black: return '黒い'
    }
}

export const initialColorQuestion = Question.createUnchecked(
    '好きな色は？',
    [Color.red, Color.blue, Color.yellow, Color.green, Color.black],
    option => getReplacedTemplateMessage(option),
)
