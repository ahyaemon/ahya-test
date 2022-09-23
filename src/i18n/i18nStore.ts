import {createSignal} from "solid-js";
import {en, ja} from "./i18n";

export const Language = {
    jp: 'JP',
    en: 'EN',
} as const

export type Language = typeof Language[keyof typeof Language]

export const [selectedLanguage, setSelectedLanguage] = createSignal<Language>('JP')

export function t(key: keyof typeof ja): string {
    switch (selectedLanguage()) {
        case Language.jp: return ja[key]
        case Language.en: return en[key]
    }
}
