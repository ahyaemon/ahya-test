import {Question} from "../Question";
import {getReplacedTemplateMessage} from "../../messages/messages";
import {t} from "../../i18n/i18nStore";

export const Animal = {
    dog: 'dog',
    cat: 'cat',
    fox: 'fox',
    rabbit: 'rabbit',
    gorilla: 'gorilla',
} as const

export type Animal = typeof Animal[keyof typeof Animal]

export const initialAnimalQuestion = Question.createUnchecked(
    'animalQuestion',
    [Animal.dog, Animal.cat, Animal.fox, Animal.rabbit, Animal.gorilla],
    option => getReplacedTemplateMessage(option),
)

export function animalName(animal: Animal): string {
    switch (animal) {
        case Animal.dog: return t("dog")
        case Animal.cat: return t("cat")
        case Animal.fox: return t("fox")
        case Animal.rabbit: return t("rabbit")
        case Animal.gorilla: return t("gorilla")
    }
}
