import {createYesNoQuestion, YesNo} from "./YesNo";
import {getRandom} from "../../utils/random";
import {t} from "../../i18n/i18nStore";

export const Friend = YesNo

export type Friend = YesNo

export const initialFriendQuestion = createYesNoQuestion(
    'friendQuestion',
    option => {
        switch (option) {
            case Friend.yes: return t(getRandom(['friendYesComment1', 'friendYesComment2']))
            case Friend.no: return t(getRandom(['friendNoComment1', 'friendNoComment2']))
        }
    },
)
