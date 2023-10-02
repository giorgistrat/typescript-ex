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
