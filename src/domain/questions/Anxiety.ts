import {createYesNoQuestion, YesNo} from "./YesNo";
import {getRandomMessage} from "../../messages/messages";

export const Anxiety = YesNo

export type Anxiety = YesNo

export const initialAnxietyQuestion = createYesNoQuestion(
    '小さいことでも強く心配してしまう',
    () => getRandomMessage(),
)
