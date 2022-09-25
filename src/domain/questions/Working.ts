import {createYesNoQuestion, YesNo} from "./YesNo";
import {t} from "../../i18n/i18nStore";

export const Working = YesNo

export type Working = YesNo

export const initialWorkingQuestion = createYesNoQuestion(
    'workingQuestion',
    option => {
        switch (option) {
            case Working.yes: return t("workingYesComment")
            case Working.no: return t("workingNoComment")
        }
    },
)
