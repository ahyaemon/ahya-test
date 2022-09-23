import {createYesNoQuestion, YesNo} from "./YesNo";
import {getRandomMessage} from "../../messages/messages";
import {getRandom} from "../../utils/random";

export const Feeling = YesNo

export type Feeling = YesNo

export const initialFeelingQuestion = createYesNoQuestion(
    'feelingQuestion',
    option => {
        switch (option) {
            case Feeling.yes: return getRandom(['僕も気分屋！', '僕と一緒だね！', '気が合うね！'])
            case Feeling.no: return getRandomMessage()
        }
    },
)
