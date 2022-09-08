import {createSignal} from "solid-js";
import {Question} from "./questions/Question";
import {animalQuestion} from "./questions/Animal";
import {colorQuestion} from "./questions/Color";

function createStore(_questions: Question[]) {

    const [questions, setQuestions] = createSignal<Question[]>(_questions)

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
    }
}

export const store = createStore([
    animalQuestion,
    colorQuestion,
])
