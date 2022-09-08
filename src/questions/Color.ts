import {createQuestion} from "./Question";

export const Color = {
    red: '赤',
    blue: '青',
    green: '緑',
    black: '黒',
} as const

export type Color = typeof Color[keyof typeof Color]

export const colorQuestion = createQuestion(
    '好きな色は？',
    [Color.red, Color.blue, Color.green, Color.black]
)
