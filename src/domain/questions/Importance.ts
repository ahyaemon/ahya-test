import {Question} from "../Question";

export const Importance = {
    family: '家族',
    money: 'お金',
    love: '愛',
    talent: '才能',
    noting: '全て不要',
} as const

export type Importance = typeof Importance[keyof typeof Importance]

export const initialImportanceQuestion = Question.createUnchecked(
    '次のうち人生で一番大切だと思うものはどれ？',
    [Importance.family, Importance.money, Importance.love, Importance.talent, Importance.noting],
)
