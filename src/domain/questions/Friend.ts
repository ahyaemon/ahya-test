import {createYesNoQuestion, YesNo} from "./YesNo";
import {getRandomMessage} from "../../messages/messages";

export const Friend = YesNo

export type Friend = YesNo

export const initialFriendQuestion = createYesNoQuestion(
    '初対面でもすぐに仲良くなれる',
    () => getRandomMessage(),
)
