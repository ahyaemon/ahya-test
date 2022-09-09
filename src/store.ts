import {createSignal} from "solid-js";
import {Question} from "./questions/Question";
import {animalQuestion} from "./questions/Animal";
import {Color, colorQuestion, toAdjective} from "./questions/Color";
import {Result} from "./types/Result";

// FIXME any
function createStore(_questions: Question<any>[]) {

    const [questions, setQuestions] = createSignal<Question<any>[]>(_questions)

    return {
        questions,
        checked: (checkNumber: number, i: number, option: string): boolean => {
            return questions()[checkNumber - 1].answer === option
        },
        check: (checkNumber: number, answer: string) => {
            const check = questions()[checkNumber - 1]
            const newCheck = { ...check, answer }
            const newChecks = [...questions()]
            newChecks[checkNumber - 1] = newCheck
            setQuestions(newChecks)
        },
        createResultFromAnswerString: (params: string): Result => {
            const answerIndexes = params.split('').map(s => parseInt(s))
            if (answerIndexes.length !== questions().length) {
                throw Error()
            }

            const animal = questions()[0].options[answerIndexes[0]]
            if (animal === undefined) {
                throw Error()
            }

            const color = questions()[1].options[answerIndexes[1]]
            if (color === undefined) {
                throw Error()
            }

            return {
                ahyaType: toAdjective(color) + animal,
                animal,
                color,
            }
        },
        allChecked: (): boolean => {
            return questions().every(q => q.answer !== undefined)
        },
        getFirstUncheckedQuestion: (): number | undefined => {
            const uncheckedQuestions = questions().filter(q => q.answer === undefined)
            if (uncheckedQuestions.length === 0) {
                return undefined
            }
            return questions().indexOf(uncheckedQuestions[0])
        },
        createQueryParams: (): string => {
            return questions().map(q => q.options.indexOf(q.answer)).join('')
        }
    }
}

export const store = createStore([
    animalQuestion,
    colorQuestion,
])
