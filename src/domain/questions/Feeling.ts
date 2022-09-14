import {createYesNoQuestion, YesNo} from "./YesNo";
import {getRandomMessage} from "../../messages/messages";

export const Feeling = YesNo

export type Feeling = YesNo

export const initialFeelingQuestion = createYesNoQuestion(
    '気分屋さんである',
    () => getRandomMessage(),
)
