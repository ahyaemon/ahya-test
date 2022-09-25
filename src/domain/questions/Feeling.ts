import {createYesNoQuestion, YesNo} from "./YesNo";
import {getRandomMessage} from "../../messages/messages";
import {getRandom} from "../../utils/random";
import {t} from "../../i18n/i18nStore";

export const Feeling = YesNo

export type Feeling = YesNo

export const initialFeelingQuestion = createYesNoQuestion(
    'feelingQuestion',
    option => {
        switch (option) {
            case Feeling.yes: return t(getRandom(['feelingYesComment1', 'feelingYesComment2', 'feelingYesComment3']))
            case Feeling.no: return getRandomMessage()
        }
    },
)
