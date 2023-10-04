const inputElement = document.getElementById('input')! as HTMLInputElement;

// ! const inputElement: HTMLElement | null
// * TypeScript doesn't know about if we really have input Element with id input, it didn't checks the HTML.
// * Because of that we should cast our input Element to HTMLINputElement and add exclamation mark (!) to it.

// * const inputElement = document.getElementById('input')! as HTMLInputElement;

inputElement.value = 'Hi There';
