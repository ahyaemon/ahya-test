import {createYesNoQuestion, YesNo} from "./YesNo";
import {getRandom} from "../../utils/random";
import {t} from "../../i18n/i18nStore";

export const Anxiety = YesNo

export type Anxiety = YesNo

export const initialAnxietyQuestion = createYesNoQuestion(
    'anxietyQuestion',
    option => {
        switch (option) {
            case Anxiety.yes: return t(getRandom([
                'anxietyYesComment1',
                'anxietyYesComment2',
                'anxietyYesComment3',
                'anxietyYesComment4',
                'anxietyYesComment5',
            ]))
            case Anxiety.no: return t(getRandom(['anxietyNoComment1', 'anxietyNoComment2']))
        }
    },
)
