import {createSignal, JSX} from "solid-js";
import {en, ja} from "./i18n";
import {replace} from "../utils/string";

export const Language = {
    jp: 'JP',
    en: 'EN',
} as const

export type Language = typeof Language[keyof typeof Language]

function createI18nStore() {

    const [selectedLanguage, setSelectedLanguage] = createSignal<Language>('JP')

    return {
        selectedLanguage,
        setSelectedLanguage,
        isJP: (): boolean => selectedLanguage() === Language.jp,
        isEN: (): boolean => selectedLanguage() === Language.en,
    }
}

export const i18nStore = createI18nStore()

// translate
export function t(key: keyof typeof ja, ...replacing: string[]): string {
    const translated = _t(key)
    if (typeof translated !== 'string') {
        throw Error('translated value is not string')
    }
    return replace(translated, ...replacing)
}

// get translated component
export function tc(key: keyof typeof ja): () => JSX.Element {
    const translated = _t(key)
    if (typeof translated === 'string') {
        throw Error('translated value is not component')
    }
    return translated
}

function _t(key: keyof typeof ja): string | (() => JSX.Element) {
    switch (i18nStore.selectedLanguage()) {
        case Language.jp: return ja[key]
        case Language.en: return en[key]
    }
}
