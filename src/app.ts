const button = document.querySelector('button')!;

function clickHandler(message: string) {
  console.log('Clicked! ' + message);
}

const testFunc = (num1: number, num2: number): boolean => {
  if (num1 > num2) {
    return true;
  }

  return false;
};

button.addEventListener('click', () =>
  clickHandler.bind(null, "You're Welcome!")
);

const hobbies: string[] = ['Sports', 'Cooking'];
const activeHobbies: string[] = ['Hiking'];

activeHobbies.push(...hobbies);

// Functions
const add = (...numbers: number[]): number => {
  return numbers.reduce((acc, item) => {
    return acc + item;
  }, 0);
};

const addedNumbers = add(231, 321);
console.log('addedNumbers ' + addedNumbers);

type PersonTypes = {
  firstName: string;
  age: number;
};

const person: PersonTypes = {
  firstName: 'Giorgi',
  age: 23,
};

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);

const { firstName: userName, age } = person;
console.log(userName, age);
