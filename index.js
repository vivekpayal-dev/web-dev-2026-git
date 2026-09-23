function add(a, b) {
  return a + b;
}

function sub(a, b) {
  if (!(a > b)) throw new Error("A should be bigger than b");
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

add(5, 5);
add(10, 5);
add(100, 5);

sub(5, 1);

multiply(5, 4);
multiply(34, 4);
multiply(12, 45);
