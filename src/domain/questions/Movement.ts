import {Question} from "../Question";
import {getRandom} from "../../utils/random";
import {t} from "../../i18n/i18nStore";

export const Movement = {
    walk: 'walk',
    run: 'run',
    quit: 'quit',
} as const

export type Movement = typeof Movement[keyof typeof Movement]

export const initialMovementQuestion = Question.createUnchecked(
    'movementQuestion',
    [Movement.walk, Movement.run, Movement.quit],
    option => {
        switch (option) {
            case Movement.walk: return t(getRandom(['movementWalkComment1', 'movementWalkComment2']))
            case Movement.run: return t(getRandom(['movementRunComment1', 'movementRunComment2']))
            case Movement.quit: return t(getRandom(['movementQuitComment1', 'movementQuitComment2', 'movementQuitComment3']))
        }
    },
)
