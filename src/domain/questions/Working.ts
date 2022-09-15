import {createYesNoQuestion, YesNo} from "./YesNo";

export const Working = YesNo

export type Working = YesNo

export const initialWorkingQuestion = createYesNoQuestion(
    '大人数で何かするよりも、一人の方が気が楽だ',
    option => {
        switch (option) {
            case Working.yes: return '一人っていいよね'
            case Working.no: return '僕は一人の方が気楽だな'
        }
    },
)
