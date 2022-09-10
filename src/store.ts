import {createSignal} from "solid-js";
import {Result} from "./domain/Result";
import {Exam} from "./domain/Exam";
import {Question} from "./domain/Question";

function createStore() {

    const [exam, setExam] = createSignal<Exam>(Exam.init())

    return {
        questions: (): Question<any>[] => exam().questions(),
        checked: (checkNumber: number, i: number, option: string): boolean => exam().checked(checkNumber, option),
        check: (question: Question<any>, answer: string) => setExam(exam().check(question, answer)),
        createResultFromAnswerString: (params: string): Result => exam().createResultFromAnswerString(params),
        allChecked: (): boolean => exam().allQuestionAnswered(),
        getFirstUncheckedQuestion: (): number | undefined => exam().firstUncheckedQuestionIndex(),
        createQueryParams: (): string => exam().createQueryParams()
    }
}

export const store = createStore()
