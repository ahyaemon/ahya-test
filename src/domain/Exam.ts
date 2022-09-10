import {Animal, initialAnimalQuestion} from "./Animal";
import {Color, initialColorQuestion} from "./Color";
import {Question} from "./Question";
import {Result} from "./Result";
import {initialMovementQuestion, Movement} from "./Movement";

export class Exam {

    private constructor(
        private readonly animalQuestion: Question<Animal>,
        private readonly colorQuestion: Question<Color>,
        private readonly movementQuestion: Question<Movement>
    ) {}

    static init(): Exam {
        return new Exam(
            initialAnimalQuestion,
            initialColorQuestion,
            initialMovementQuestion,
        )
    }

    questions(): Question<any>[] {
        return [
            this.animalQuestion,
            this.colorQuestion,
            this.movementQuestion,
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

    // FIXME できれば checkNumber じゃなくて question で受け取りたい。questions() を呼び出せばいけるか？
    check(checkNumber: number, answer: any): Exam {
        if (checkNumber === 1) {
            return new Exam(
                this.animalQuestion.check(answer),
                this.colorQuestion,
                this.movementQuestion,
            )
        } else if (checkNumber === 2) {
            return new Exam(
                this.animalQuestion,
                this.colorQuestion.check(answer),
                this.movementQuestion,
            )
        } else if (checkNumber === 3) {
            return new Exam(
                this.animalQuestion,
                this.colorQuestion,
                this.movementQuestion.check(answer),
            )
        }
        return this
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

        const animal = this.animalQuestion.options[answerIndexes[0]]
        const color = this.colorQuestion.options[answerIndexes[1]]
        return new Result(animal, color)
    }
}
