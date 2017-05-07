export const maxLength = max => (value = '') => {
  if (value.length <= max) {
    return undefined;
  }
  return `Input is to long. Max lenght is ${max}`;
};
