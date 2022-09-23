import {Question} from "../Question";
import {getReplacedTemplateMessage} from "../../messages/messages";

export const Importance = {
    family: 'family',
    money: 'money',
    love: 'love',
    talent: 'talent',
    nothing: 'nothing',
} as const

export type Importance = typeof Importance[keyof typeof Importance]

export const initialImportanceQuestion = Question.createUnchecked(
    'importanceQuestion',
    [Importance.family, Importance.money, Importance.love, Importance.talent, Importance.nothing],
    option => {
        switch (option) {
            case Importance.nothing: return 'まじ？何も要らないの？'
            case Importance.family: return 'まあ家族は大事だわな'
            case Importance.money: return '金に溺れるなよ！'
            case Importance.love: return '愛こそ全て！'
            case Importance.talent: return '才能ってそんなに大事？'
            default: return getReplacedTemplateMessage(option)
        }
    },
)
