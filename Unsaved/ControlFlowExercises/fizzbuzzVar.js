// for (ndx = 1; ndx <= 100; ndx++) {
//  if ((ndx % 3) && (ndx % 5)) {
//    x = ndx;
//  } else if ((ndx % 3)) {
//    x = 'buzz';
//  } else if ((ndx % 5)) {
//    x = 'fizz';
//  } else x = 'fizzbuzz';
// console.log(x);
// }

// var x;
// var y;
// var z;
// for (i = 1; i <= 100; i++) {
//  x = (i % 3);
//  y = (i % 5);
//  if ((x === 0) && (y === 0)) {
//      z = 'fizzbuzz';
//  } else if (x === 0) {
//    z = 'fizz';
//  } else if (y === 0) {
//    z = 'buzz';
//  } else z = i;
//  console.log(z);
// }

// for (n = 1; n <= 100; n++) {
//  str = '';
//  if ((n % 3) === 0) {
//    str += 'fizz';
//  }
//  if ((n % 5) === 0) {
//    str += 'buzz'
// }
//  if (!(str)) {
//    str = n;
//  }
//  console.log(str);
// }

function fizz () {
  for (var i = 1; i <= 100; i++) {
    var m3 = i % 3 === 0;
    var m5 = i % 5 === 0;
    if (m3 && m5) {
      console.log('fizzbuzz');
    }
    else if (m3) {
      console.log('fizz');
    }
    else if (m5) {
      console.log('buzz');
    }
    else {
      console.log(i);
    }
  }
}

function fizz (n) {
  var m3 = n % 3 === 0;
  var m5 = n % 5 === 0;
  if (m3 && m5) {
    return('fizzbuzz');
  }
  else if (m3) {
    return('fizz');
  }
  else if (m5) {
    return('buzz');
  }
  else {
    return(n);
  }
}
for (var i = 1; i <= 100; i++) {
  console.log(fizz(i));
}
}
