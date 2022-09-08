import {createSignal} from "solid-js";

type Question = {
    title: string
    options: string[]
    answer: string | undefined
}

function createStore() {

    const [questions, setQuestions] = createSignal<Question[]>([
        {
            title: '好きな動物は？',
            options: ['犬', '猫', 'キツネ', 'ウサギ', 'ゴリラ'],
            answer: undefined,
        },
        {
            title: '好きな色は？',
            options: ['赤', '青', '黄', '黒', '白'],
            answer: undefined,
        },
    ])

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
        }
    }
}

export const store = createStore()
