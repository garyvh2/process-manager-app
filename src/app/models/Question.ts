import { BaseEntity } from './interface/BaseEntity';

export class Question extends BaseEntity {
    constructor (
      public name: string,
      public label?: string,
      public options?: string[],
      public placeholder?: string,
      public value?: any
    ) {
      super();
    }
}
