import {Answer} from "./Answer";

export class QuestionModel {
    text: string;
    answers: Answer [];

    constructor(text: string, answers: Answer []) {
        this.text = text;
        this.answers = answers
    }

    static getQuestions(): QuestionModel [] {
        return [new QuestionModel('Is PCH nice?', [new Answer('Yes, but naaaaaa d asd sad sa dsa dsa f df  asd f a f sa f a sf as  fas fa fg asf'), new Answer('No', true)]),
            new QuestionModel('2 + 2 = 5 ?', [new Answer('Yes'), new Answer('No', true)])];
    }
}
