import {getRandom} from "../utils/random";

export const templateMessages: string[] = [
    '僕は$answerは嫌いだな',
    'へえ、$answerが好きなんだ',
    '$answer、良いよね',
    '$answerか〜',
    '$answer！',
    '$answer！？',
    'いるいる、$answer好きな人',
]

export function getReplacedTemplateMessage<T extends string>(answer: T): string {
    return getRandom(templateMessages).replace('$answer', answer)
}

export const messages: string[] = [
    'へえ、そうなんだ！',
    '知らなかった！',
    'マジで？',
    'まあそうだよね',
    'それ本当？',
]

export function getRandomMessage(): string {
    return getRandom(messages)
}
