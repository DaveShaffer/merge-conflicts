'use strict';

var ride = require ('./car');
let tesla = new ride ('Tesla', 'S', 'black', false);
tesla.acl(60);
tesla.dcl(10);
console.log(tesla.toString());
console.log('${tesla}');
console.log('' + tesla);
