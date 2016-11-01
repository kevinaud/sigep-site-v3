import { Injectable }       from '@angular/core';

import { RadioQuestion } from './question-radio';
import { QuestionBase }     from './question-base';
import { TextboxQuestion }  from './question-text';
import { DateQuestion }  from './question-date';
import { AddressQuestion }  from './question-address';

@Injectable()
export class QuestionService {
  
  getRecruitmentQuestions() {
    let questions: QuestionBase<any>[] = [
      new RadioQuestion({
        key: 'class',
        label: 'Classification*',
        errorLabel: 'Classification',
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
        label: 'First Name*',
        errorLabel: 'First Name',
        required: true,
        type: 'text',
        order: 2
      }),
      new TextboxQuestion({
        key: 'lastName',
        label: 'Last Name*',
        errorLabel: 'Last Name',
        required: true,
        type: 'text',
        order: 3
      }),
      new TextboxQuestion({
        key: 'email',
        label: 'Email Address*',
        errorLabel: 'Email Address',
        type: 'email',
        required: true,
        order: 1
      }),
      new TextboxQuestion({
        key: 'major',
        label: 'Major*',
        errorLabel: 'Major',
        type: 'text',
        required: true,
        order: 3
      }),
    ];
    return questions.sort((a, b) => a.order - b.order);
  }

  getAlumniQuestions() {
    let questions: QuestionBase<any>[] = [
      new TextboxQuestion({
        key: 'email',
        label: 'Email Address*',
        errorLabel: 'Email Address',
        type: 'email',
        required: true,
        order: 1
      }),
      new TextboxQuestion({
        key: 'firstName',
        label: 'First Name*',
        errorLabel: 'First Name',
        required: true,
        type: 'text',
        order: 2
      }),
      new TextboxQuestion({
        key: 'lastName',
        label: 'Last Name*',
        errorLabel: 'Last Name',
        required: true,
        type: 'text',
        order: 3
      }),
      new DateQuestion({
        key: 'gradDate',
        label: 'Graduation Date*',
        errorLabel: 'Graduation Date',
        required: true,
        type: 'text',
        order: 4
      }),
      new AddressQuestion({
        key: 'address',
        label: 'Address',
        errorLabel: 'Address',
        required: false,
        type: 'text',
        order: 5
      })
    ];
    return questions.sort((a, b) => a.order - b.order);
  }

}