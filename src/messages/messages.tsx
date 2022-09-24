import {getRandom} from "../utils/random";
import {I18nKey} from "../i18n/i18n";
import {t} from "../i18n/i18nStore";

export const templateMessages: I18nKey[] = [
    'templateToastComment1',
    'templateToastComment2',
    'templateToastComment3',
    'templateToastComment4',
    'templateToastComment5',
    'templateToastComment6',
    'templateToastComment7',
]

export function getReplacedTemplateMessage(answer: I18nKey): string {
    const message = t(getRandom(templateMessages), t(answer))
    return message[0].toUpperCase() + message.slice(1)
}

export const messages: I18nKey[] = [
    'toastComment1',
    'toastComment2',
    'toastComment3',
    'toastComment4',
    'toastComment5',
]

export function getRandomMessage(): string {
    return getRandom(messages)
}
