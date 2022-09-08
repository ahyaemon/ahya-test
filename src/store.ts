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
        result: (): Result => {
            return {
                ahyaType: toAdjective(questions()[1].answer ?? Color.black) + questions()[0].answer,
                animal: questions()[0].answer,
                color: questions()[1].answer,
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
        }
    }
}

export const store = createStore([
    animalQuestion,
    colorQuestion,
])
