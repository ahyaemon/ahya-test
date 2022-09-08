export type Question<T> = {
    title: string
    options: T[]
    answer: T | undefined
}

export function createQuestion <T> (title: string, options: T[]): Question<T> {
    return {
        title,
        options,
        answer: undefined,
    }
}
