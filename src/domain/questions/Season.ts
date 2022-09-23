import {Question} from "../Question";
import {getReplacedTemplateMessage} from "../../messages/messages";

export const Season = {
    spring: 'spring',
    summer: 'summer',
    autumn: 'autumn',
    winter: 'winter',
} as const

export type Season = typeof Season[keyof typeof Season]

export const initialSeasonQuestion = Question.createUnchecked(
    'seasonQuestion',
    [Season.spring, Season.summer, Season.autumn, Season.winter],
    option => getReplacedTemplateMessage(option),
)
