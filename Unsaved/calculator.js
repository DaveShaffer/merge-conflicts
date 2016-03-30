var value = 0;

function addIt(n1) {
  return value += n1;
}

function subtractIt(m1) {
  return value -= m1;
}

function multiplyIt(o1) {
  return value *= o1;
}

function divideIt(p1) {
  return value /= p1;
}

function exponentIt(q1) {
  return value = Math.pow(value, q1);
}

function squareIt() {
  return value *= value;
}

function clearIt() {
  return value *= 0;
}
