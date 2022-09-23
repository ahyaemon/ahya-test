import {I18nKey} from "../i18n/i18n";

export type Quote = {
    message: I18nKey
    author: I18nKey
}

function createQuote(message: I18nKey, author: I18nKey): Quote {
    return { message, author }
}

export const quotes: Quote[] = [
    createQuote(
        'quote1',
        'quote1Author',
    ),
    createQuote(
        'quote2',
        'quote2Author',
    ),
    createQuote(
        'quote3',
        'quote3Author',
    ),
    createQuote(
        'quote4',
        'quote4Author',
    ),
    createQuote(
        'quote5',
        'quote5Author',
    ),
    createQuote(
        'quote6',
        'quote6Author',
    ),
    createQuote(
        'quote7',
        'quote7Author',
    ),
    createQuote(
        'quote8',
        'quote8Author',
    ),
]
