import {createSignal} from "solid-js";
import {Question} from "./questions/Question";
import {animalQuestion} from "./questions/Animal";
import {colorQuestion} from "./questions/Color";
import {Result} from "./types/Result";
import {Exam} from "./domain/Exam";

function createStore(_questions: Question<any>[]) {

    const [exam, setExam] = createSignal<Exam>(Exam.init())

    return {
        questions: exam().questions(),
        checked: (checkNumber: number, i: number, option: string): boolean => exam().checked(checkNumber, option),
        check: (checkNumber: number, answer: string) => setExam(exam().check(checkNumber, answer)),
        createResultFromAnswerString: (params: string): Result => exam().createResultFromAnswerString(params),
        allChecked: (): boolean => exam().allQuestionAnswered(),
        getFirstUncheckedQuestion: (): number | undefined => exam().firstUncheckedQuestionIndex(),
        createQueryParams: (): string => exam().createQueryParams()
    }
}

export const store = createStore([
    animalQuestion,
    colorQuestion,
])
