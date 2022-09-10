import {Question} from "./Question";

export const Animal = {
    dog: '犬',
    cat: '猫',
    fox: 'キツネ',
    rabbit: 'ウサギ',
    gorilla: 'ゴリラ',
} as const

export type Animal = typeof Animal[keyof typeof Animal]

export const initialAnimalQuestion = Question.createUnchecked(
    '好きな動物は？',
    [Animal.dog, Animal.cat, Animal.fox, Animal.rabbit, Animal.gorilla],
)