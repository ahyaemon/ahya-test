/**
 * ar の中からランダムで一つ取得する
 */
export function getRandom<T>(ar: T[]) : T {
    const i = Math.floor(Math.random() * ar.length)
    return ar[i]
}

/**
 * n% の確率で true を返す
 * @param n
 */
export function trueByPercent(n: number): boolean {
    return n / 100 > Math.random()
}
