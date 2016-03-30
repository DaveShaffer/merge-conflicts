function fact(n) {
  if (n === 1) {
    return 1;
  }
  else {
    return n * fact(n - 1);
  }
}


function fact(n) {
  return n === 1 ? 1 : n * fact(n - 1);
}

console.log('the factorial of 3 is', fact(3));
