import {createYesNoQuestion, YesNo} from "./YesNo";
import {getRandom} from "../../utils/random";

export const Anxiety = YesNo

export type Anxiety = YesNo

export const initialAnxietyQuestion = createYesNoQuestion(
    '小さいことでも強く心配してしまう',
    option => {
        switch (option) {
            case Anxiety.yes: return getRandom([
                'ガスの元栓閉めた？',
                '窓閉めた？',
                '家の鍵閉めた？',
                '電気消した？',
                'エアコン切った？',
            ])
            case Anxiety.no: return getRandom(['図太いw', '無神経w'])
        }
    },
)
