import {Question} from "../Question";
import {getReplacedTemplateMessage} from "../../messages/messages";

export const Season = {
    spring: '春',
    summer: '夏',
    autumn: '秋',
    winter: '冬',
} as const

export type Season = typeof Season[keyof typeof Season]

export const initialSeasonQuestion = Question.createUnchecked(
    '好きな季節は？',
    [Season.spring, Season.summer, Season.autumn, Season.winter],
    option => getReplacedTemplateMessage(option),
)
