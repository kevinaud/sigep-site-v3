import { Injectable }       from '@angular/core';

import { RadioQuestion } from './question-radio';
import { QuestionBase }     from './question-base';
import { TextboxQuestion }  from './question-text';

@Injectable()
export class QuestionService {
  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getQuestions() {
    let questions: QuestionBase<any>[] = [
      new RadioQuestion({
        key: 'class',
        label: 'Classification*',
        options: [
          { key: 'Freshman', value: 'Freshman' },
          { key: 'Sophomore', value: 'Sophomore' },
          { key: 'Junior', value: 'Junior' },
          { key: 'Senior', value: 'Senior' },
        ],
        order: 4
      }),
      new TextboxQuestion({
        key: 'firstName',
        label: 'First name*',
        required: true,
        type: 'text',
        order: 2
      }),
      new TextboxQuestion({
        key: 'lastName',
        label: 'Last Name*',
        required: true,
        type: 'text',
        order: 3
      }),
      new TextboxQuestion({
        key: 'email',
        label: 'Email Address*',
        type: 'email',
        required: true,
        order: 1
      }),
      new TextboxQuestion({
        key: 'major',
        label: 'Major*',
        type: 'text',
        required: true,
        order: 3
      }),
    ];
    return questions.sort((a, b) => a.order - b.order);
  }
}