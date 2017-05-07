export const email = (value = '') => {
  if ((/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/).test(value)) {
    return undefined;
  }
  return 'Please enter a valid email adress';
};
