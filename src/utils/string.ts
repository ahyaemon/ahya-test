export function replace(s: string, ...replacingList: string[]): string {
    let result = s
    for (const replacing of replacingList) {
        result = result.replace('$$', replacing)
    }
    return result
}
