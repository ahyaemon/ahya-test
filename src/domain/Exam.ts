import {Animal, initialAnimalQuestion} from "./questions/Animal";
import {Color, initialColorQuestion} from "./questions/Color";
import {Question} from "./Question";
import {Result} from "./Result";
import {initialMovementQuestion, Movement} from "./questions/Movement";
import {Anxiety, initialAnxietyQuestion} from "./questions/Anxiety";
import {initialSeasonQuestion, Season} from "./Season";
import {Quote, quotes} from "../messages/quote";
import {sum} from "../utils/number";

export class Exam {

    private constructor(
        private readonly animalQuestion: Question<Animal>,
        private readonly colorQuestion: Question<Color>,
        private readonly movementQuestion: Question<Movement>,
        private readonly anxietyQuestion: Question<Anxiety>,
        private readonly seasonQuestion: Question<Season>,
    ) {}

    static init(): Exam {
        return new Exam(
            initialAnimalQuestion,
            initialColorQuestion,
            initialMovementQuestion,
            initialAnxietyQuestion,
            initialSeasonQuestion,
        )
    }

    private static initFromArray(questions: Question<any>[]): Exam {
        return new Exam(
            questions[0],
            questions[1],
            questions[2],
            questions[3],
            questions[4],
        )
    }

    questions(): Question<any>[] {
        return [
            this.animalQuestion,
            this.colorQuestion,
            this.movementQuestion,
            this.anxietyQuestion,
            this.seasonQuestion,
        ]
    }

    checked(checkNumber: number, option: any): boolean {
        if (checkNumber === 1) {
            return this.animalQuestion.optionChecked(option)
        } else if (checkNumber === 2) {
            return this.colorQuestion.optionChecked(option)
        }
        return false
    }

    check(question: Question<any>, answer: any): Exam {
        const newQuestions = this.questions().map(q => {
            return (q === question) ? q.check(answer) : q
        })
        return Exam.initFromArray(newQuestions)
    }

    allQuestionAnswered(): boolean {
        return this.questions().every(q => q.answered())
    }

    firstUncheckedQuestionIndex(): number | undefined {
        const uncheckedQuestions = this.questions().filter(q => !q.answered())
        if (uncheckedQuestions.length === 0) {
            return undefined
        }
        return this.questions().indexOf(uncheckedQuestions[0])
    }

    createQueryParams(): string {
        return this.questions().map(q => q.selected).join('')
    }

    createResultFromAnswerString(params: string): Result {
        const answerIndexes = params.split('').map(s => parseInt(s))
        if (answerIndexes.length !== this.questions().length) {
            throw Error(`invalid query params length. expected: ${this.questions().length}, actual: ${answerIndexes.length}`)
        }

        return new Result(
            this.animalQuestion.options[answerIndexes[0]],
            this.colorQuestion.options[answerIndexes[1]],
            this.movementQuestion.options[answerIndexes[2]],
            this.anxietyQuestion.options[answerIndexes[3]],
            this.seasonQuestion.options[answerIndexes[4]],
            getQuote(answerIndexes)
        )
    }
}

function getQuote(ar: number[]): Quote {
    const v = sum(ar)
    const i = v % quotes.length
    return quotes[i]
}
