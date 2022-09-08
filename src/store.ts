import {createSignal} from "solid-js";

type Check = {
    title: string
    options: string[]
    answer: string | undefined
}

function createStore() {

    const [checks, setChecks] = createSignal<Check[]>([
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
        checks,
        setChecks,
        checked: (checkNumber: number, i: number, option: string): boolean => {
            return checks()[checkNumber - 1].answer === option
        },
        check: (checkNumber: number, answer: string) => {
            const check = checks()[checkNumber - 1]
            const newCheck = { ...check, answer }
            const newChecks = [...checks()]
            newChecks[checkNumber - 1] = newCheck
            store.setChecks(newChecks)
        }
    }
}

export const store = createStore()
