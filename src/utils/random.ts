/**
 * Get one at random from ar.
 *
 * The same value as the previous one is not chosen.
 * (the way to do it is appropriate)
 */
let recently: number = -1
export function getRandom<T>(ar: T[]) : T {
    if (ar.length === 1) {
        return ar[0]
    }

    const i = Math.floor(Math.random() * ar.length)

    if (i === recently) {
        return getRandom(ar)
    } else {
        recently = i
        return ar[i]
    }
}

/**
 * Return true with n% probability
 * @param n
 */
export function trueByPercent(n: number): boolean {
    return n / 100 > Math.random()
}
