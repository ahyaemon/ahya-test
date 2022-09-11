export function sum(ar: number[]): number {
    if (ar.length === 0) {
        return 0
    }

    return ar.reduce((prev, cur) => prev + cur)
}
