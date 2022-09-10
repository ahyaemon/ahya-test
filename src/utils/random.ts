/**
 * ar の中からランダムで一つ取得する
 *
 * 直前の値と同じものは出さない（やりかたは適当）
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
 * n% の確率で true を返す
 * @param n
 */
export function trueByPercent(n: number): boolean {
    return n / 100 > Math.random()
}
