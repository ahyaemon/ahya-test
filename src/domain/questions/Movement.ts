import {Question} from "../Question";
import {getRandom} from "../../utils/random";

export const Movement = {
    walk: '歩く',
    run: '走る',
    quit: '行かない',
} as const

export type Movement = typeof Movement[keyof typeof Movement]

export const initialMovementQuestion = Question.createUnchecked(
    '近場に行く時は',
    [Movement.walk, Movement.run, Movement.quit],
    option => {
        switch (option) {
            case Movement.walk: return getRandom(['走ろうよ', 'まあ普通そうだよね'])
            case Movement.run: return getRandom(['急がば回れ', '走るの疲れない？'])
            case Movement.quit: return getRandom(['行こうよ！', '出不精さん！', '怠け者発見！'])
        }
    },
)
