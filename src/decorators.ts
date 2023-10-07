// function Logger(logString: string) {
//   console.log('LOGGER FACTORY');

import { StringLiteral } from 'typescript';

//   return function (constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   };
// }

// function withTemplate(template: string, hookId: string) {
//   console.log('TEMPLATE FACTORY');

//   return function (constructor: any) {
//     console.log('Rendering template');
//     const hookEl = document.getElementById(hookId);
//     const p = new constructor();
//     if (hookEl) {
//       hookEl.innerHTML = template;
//       hookEl.querySelector('h1')!.textContent = p.name;
//     }
//   };
// }

// @Logger('LOGGING - PERSON')
// @withTemplate('<h1>My Person Object</h1>', 'app')
// class Persona {
//   name = 'Max';

//   constructor() {
//     console.log('Creating person object...');
//   }
// }

// const pers = new Persona();
// console.log(pers);

// * --

function Log(target: any, propertyName: string | Symbol) {
  console.log('Property decorator!');
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log('Method decorator');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log('Parameter decorator');
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private priceProduct: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this.priceProduct = val;
    } else {
      throw new Error('Invalid price - should be positive!');
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this.priceProduct = p;
  }

  @log3
  getPriceWithTax(@Log4 tax: number) {
    return this.priceProduct * (1 + tax);
  }
}

// * --

function Autobind(
  __: any,
  ____: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const originalMethod = descriptor.value;
  const odjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return odjDescriptor;
}

class Printer {
  message = 'This works!';

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const button = document.querySelector('button')!;
button.addEventListener('click', p.showMessage);

// * --

interface ValidatorConfig {
  [property: string]: {
    [validateProp: string]: string[];
  };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ['required'],
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ['positive'],
  };
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case 'required':
          isValid = isValid && !!obj[prop];
          break;
        case 'positive':
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  courseTitle: string;
  @PositiveNumber
  coursePrice: number;

  constructor(t: string, p: number) {
    this.courseTitle = t;
    this.coursePrice = p;
  }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const titleEl = document.querySelector('#title')! as HTMLInputElement;
  const priceEl = document.querySelector('#price')! as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);

  if (!validate(createdCourse)) {
    alert('Invalid input, please try again!');
    return;
  }
});
