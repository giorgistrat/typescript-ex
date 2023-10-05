interface ErrorContainer {
  // * { email: 'Not a valid email ' }
  [props: string]: string; // * we dont know the exact key for the object that's why we are using index properties for it
}

const errorBag: ErrorContainer = {
  email: 'not a valid email',
  username: 'Must start with a capital character!',
};

// * This is extra flexibility that we don't need to know in advance which property names we want to use and how many properties we need
