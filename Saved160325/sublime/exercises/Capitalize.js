var Rslt = '';
var Ary = [];
var thisIsInput = "hello walls. nice to see you. it's been a long while.";
for (N = 0; N < thisIsInput.length; N++) {
  Ary[N] = thisIsInput.charAt(N);
  // console.log(Ary[N], N);
  if ((Ary[N - 1] === ' ') || (N === 0)) {
    Ary[N] = Ary[N].toUpperCase();
  }
  Rslt = Rslt + Ary[N];
}
console.log(Rslt);
