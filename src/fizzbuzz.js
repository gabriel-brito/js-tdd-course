const fizzbuzz = (param) => {
  if(param % 3 === 0 && param % 5 === 0) return 'fizzbuzz';
  if(param % 3 === 0) return 'fizz';
  if(param % 5 === 0) return 'buzz';
  if(typeof param !== Number) return 'invalid param';
};

export { fizzbuzz };