import {Question} from "../Question";
import {getReplacedTemplateMessage} from "../../messages/messages";

export const Importance = {
    family: '家族',
    money: 'お金',
    love: '愛',
    talent: '才能',
    noting: '全て不要',
} as const

export type Importance = typeof Importance[keyof typeof Importance]

export const initialImportanceQuestion = Question.createUnchecked(
    '次のうち人生で一番大切だと思うものはどれ？',
    [Importance.family, Importance.money, Importance.love, Importance.talent, Importance.noting],
    option => {
        switch (option) {
            case Importance.noting: return 'まじ？要らないの？'
            case Importance.family: return 'まあ家族は大事だわな'
            case Importance.money: return '金に溺れるなよ！'
            case Importance.love: return '愛こそ全て！'
            case Importance.talent: return '才能ってそんなに大事？'
            default: return getReplacedTemplateMessage(option)
        }
    },
)
