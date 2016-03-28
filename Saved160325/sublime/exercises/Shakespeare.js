var shakespeare = "Our doubts aare traitors, and make us lose the good we oft might win, by fearinag to atteampt.";
var a = 0;
var word = 1;
flag = 0;
for (ndx = 0; ndx < shakespeare.length; ndx++) {
  console.log(shakespeare.charAt(ndx));
  if (shakespeare.charAt(ndx) == 'a') {
    if (flag < 1) {
      a++;
      flag = 1;
      console.log(a);
    }
  }
  else if (shakespeare.charAt(ndx) == ' ') {
    word++;
    flag = 0;
    console.log(word);
  }
}
console.log(word, a);
