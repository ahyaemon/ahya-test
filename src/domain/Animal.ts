export const Animal = {
    dog: '犬',
    cat: '猫',
    fox: 'キツネ',
    rabbit: 'ウサギ',
    gorilla: 'ゴリラ',
} as const

export type Animal = typeof Animal[keyof typeof Animal]
