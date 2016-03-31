// Dramatis Personae
var fellowship = {
  hobbits: [
    "Frodo Baggins of the Shire",
    "Samwise 'Sam' Gamgee",
    "Meriadoc 'Merry' Brandybuck",
    "Peregrin 'Pippin' Took"
  ],
  buddies: [
    "Gandalf the Grey",
    "Legolas of Mirkwood",
    "Gimli of Moria",
    "Strider, the ranger",
    "Boromir of Gondor"
  ],
  lands: [
    "The Shire", "Rivendell", "Mordor"
  ],
  makeMiddleEarth: function(lands) {
    // console.log(lands)
    // create a section tag with an id of middle-earth
    // add each land as an article tag
    // inside each article tag include an h1 with the name of the land
    // append middle-earth to your document body
    // var newSec = document.createElement("section");
    for (var n = 0; n < this.lands.length; n++) {
      var newArt = document.createElement("article");
      var newHead = document.createElement("h1");
      var newLands = document.createTextNode(lands[n]);
      newArt.appendChild(newHead);
      newHead.appendChild(newLands); // adding lands to article
      var currentSec = document.querySelector("section");
      currentSec.appendChild(newArt); // assoc articles to Middle Earth
    }
  },
  makeHobbits: function(hobbits) {
    // console.log(hobbits);
    // display an unordered list of hobbits in the shire
    // give each hobbit a class of hobbit
    var newUl = document.createElement("ul");
    for (var m = 0; m < this.hobbits.length; m++) {
      var newLi = document.createElement("li");
      var newHobbit = document.createTextNode(hobbits[m]);
      newUl.appendChild(newLi);
      newLi.appendChild(newHobbit); // adding hobbit to <ul>
    }
    var currentArt = document.querySelectorAll("article")[0];
    currentArt.appendChild(newUl); // assoc <ul> to Shire
  },
  keepItSecretKeepItSafe: function() {
    // create a div with an id of 'the-ring'
    // add the ring as a child of Frodo
    var Ring = document.createElement("div");
    Ring.id = 'the-ring';
    var ringText = document.createTextNode("One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them.");
    // newDiv.appendChild(ringText);
    var currentLi = document.getElementsByTagName("li")[0];
    currentLi.appendChild(newDiv); // adding Ring to Frodo
    // console.log(ringText);
  },
  makeBuddies: function(buddies) {
    // console.log(buddies);
    // create an aside tag
    // display an unordered list of buddies in the aside
    // insert your aside before rivendell
    var newAside = document.createElement("aside");
    var newUl = document.createElement("ul");
    for (var l = 0; l < this.buddies.length; l++) {
      var newLi = document.createElement("li");
      var newBud = document.createTextNode(buddies[l]);
      newUl.appendChild(newLi);
      newLi.appendChild(newBud); // adding buddy to <ul>
    }
    newAside.appendChild(newUl); // assoc <ul> to the aside
    var currentArt = document.getElementsByTagName("article")[1];
    var currentHead = document.getElementsByTagName("h1")[1];
    currentArt.insertBefore(newAside, currentHead);  // adding buddy before Rivendell
  },
  beautifulStranger: function() {
    // change the buddy 'Strider' textnode to "Aragorn"
    var newLi = document.createElement("li");
    var newBud = document.createTextNode("Aragorn, rightful claimant to the thrones of Arnor and Gondor");
    newLi.appendChild(newBud); // assoc Aragorn to new <li>
    var currentUl = document.getElementsByTagName("ul")[1];
    var currentBud = document.getElementsByTagName("li")[7];
    currentUl.replaceChild(newLi, currentBud); // adding Aragorn to buddies
    this.buddies[3] = "Aragorn, rightful claimant to the thrones of Arnor and Gondor"; // changing orig buddy list
    // console.log(this.buddies[3]);
  },
  forgeTheFellowShip: function() {
    // move the hobbits and the buddies to Rivendell
    // create a new div called 'the-fellowship'
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party
    var newDiv = document.createElement("div");
    newDiv.id = 'the-fellowship';
    var currentHead = document.getElementsByTagName("article")[1];
    currentHead.appendChild(newDiv); // adding the fellowship to Rivendell
    var newUl = document.createElement("ul");
    var currentDiv = document.getElementById("the-fellowship");
    currentDiv.appendChild(newUl); // adding <ul> to the fellowship
    for (var k = this.hobbits.length - 1; k >= 0; k--) {
      // var currentUl = document.getElementsByTagName("ul")[0];
      // var currentHob = document.getElementsByTagName("li")[k];
      // currentUl.removeChild(currentHob); //removing hobbits
      var newLi = document.createElement("li");
      // var newHob = document.createTextNode(fellowship.hobbits[k]);
      var newHob = document.getElementsByTagName("li")[k];
      newLi.appendChild(newHob);
      var newUl = document.getElementsByTagName("ul")[2];
      newUl.appendChild(newLi); // adding hobbits in Rivendell
      alert(this.hobbits[k] + " has joined the fellowship in Rivendell.");
    }
    for (var j = this.buddies.length - 1; j >= 0; j--) {
      // var currentUl = document.getElementsByTagName("ul")[1];
      // var currentBud = document.getElementsByTagName("li")[j];
      // currentUl.removeChild(currentBud); // removing buddies
      var newLi = document.createElement("li");
      // var newBud = document.createTextNode(fellowship.buddies[j]);
      var newBud = document.getElementsByTagName("li")[j];
      newLi.appendChild(newBud);
      var newUl = document.getElementsByTagName("ul")[2];
      newUl.appendChild(newLi); // adding buddies in Rivendell
      alert(this.buddies[j] + " has joined the fellowship in Rivendell.");
    }
    var par1 = document.getElementsByTagName("aside")[0]; // clean up <ul>s
    var chi1 = document.getElementsByTagName("ul")[1];
    par1.removeChild(chi1);
    var par2 = document.getElementsByTagName("article")[0];
    var chi2 = document.getElementsByTagName("ul")[0];
    par2.removeChild(chi2);
  },
  makeEverything: function() {
    this.makeMiddleEarth(this.lands);
    this.makeHobbits(this.hobbits);
    this.keepItSecretKeepItSafe();
    this.makeBuddies(this.buddies);
    this.beautifulStranger();
    this.forgeTheFellowShip();
  }
}
