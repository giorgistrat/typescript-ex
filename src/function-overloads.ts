type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// * Function Overloads
function add2(a: string; b: string): string
function add2(a: number, b: number): number

// * Main Function
function add2(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }

  return a + b;
};

const result = add2('Hello ', 'World');
result.split(' ');


// ! Without the function overloads if we write const result = add2('Hello ', 'World');
// ! And after that result.split(' ') typeScript will give as an error because typescript doesn't know if result is number or string because function return is Combinable type string | number, that why we are using function overloads


