import {createYesNoQuestion, YesNo} from "./YesNo";
import {getRandom} from "../../utils/random";

export const Friend = YesNo

export type Friend = YesNo

export const initialFriendQuestion = createYesNoQuestion(
    'friendQuestion',
    option => {
        switch (option) {
            case Friend.yes: return getRandom(['コミュ力の化け物！', 'うらやましい'])
            case Friend.no: return getRandom(['難しいよね', '人見知りってやつ〜？'])
        }
    },
)
