import {Question} from "../Question";
import {getRandomMessage} from "../../messages/messages";

export const Movement = {
    walk: '歩く',
    run: '走る',
    quit: '行かない',
} as const

export type Movement = typeof Movement[keyof typeof Movement]

export const initialMovementQuestion = Question.createUnchecked(
    '近場に行く時は',
    [Movement.walk, Movement.run, Movement.quit],
    () => getRandomMessage(),
)
