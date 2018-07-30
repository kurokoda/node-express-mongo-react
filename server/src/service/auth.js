const randomstring = require('randomstring');

export const generateID = (length) => {
  const half   = Math.floor(length / 2);
  const result = randomstring.generate({
      length : half,
      charset: 'alphabetic'
    }).toUpperCase() + randomstring.generate({
      length : length - half,
      charset: 'numeric'
    }).toUpperCase();
  return result;
};
