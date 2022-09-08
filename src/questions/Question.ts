export type Question = {
    title: string
    options: string[]
    answer: string | undefined
}

export function createQuestion(title: string, options: string[]): Question {
    return {
        title,
        options,
        answer: undefined,
    }
}
