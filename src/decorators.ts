function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger('LOGGING - PERSON')
class Persona {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}

const pers = new Persona();
console.log(pers);
