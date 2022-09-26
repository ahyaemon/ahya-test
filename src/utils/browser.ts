export function browserLanguageSettingIsJapanese(): boolean {
    // @ts-ignore
    const language = navigator.language || navigator.userLanguage
    return language === 'ja'
}
