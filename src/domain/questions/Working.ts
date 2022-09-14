import {createYesNoQuestion, YesNo} from "./YesNo";
import {getRandomMessage} from "../../messages/messages";

export const Working = YesNo

export type Working = YesNo

export const initialWorkingQuestion = createYesNoQuestion(
    '大人数で何かするよりも、一人の方が気が楽だ',
    () => getRandomMessage(),
)
