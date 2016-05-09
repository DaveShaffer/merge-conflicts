var mongoose = require('mongoose');
var db = require('./db');
var CarConstructorFnc = require('./car');

// Connect to the database
// To connect use the following:
//   mongoose.connect('mongodb://username:password@localhost:27027/dbname');
// where the username, password, and port are all optional
mongoose.connect('mongodb://localhost/cars');

// our app will not exit until we have disconnected from the db.
function quit() {
    mongoose.disconnect();
    console.log('All Done!');
}

// a simple error handler
function handleError(err) {
    console.log('ERROR:', err);
    return err;
}

// /var tesla = new CarConstructorFnc({ make: 'Tesla', model: 'S', color: 'black', year: 2014 });
// // tesla.print();

// // // save the car to the DB
// // tesla.save(function(err, saved) {
// //   if (err) return handleError(err);
// //   console.log('Car saved: ', saved);
// //   quit();
// // });/
console.log('Removing any old cars...');
CarConstructorFnc.remove({}, function(err) {
    if (err) return handleError(err);
    console.log('Creating some cars...');
    var theCars = [
        { make: 'Tesla', model: 'S', color: 'grey', year: 2014 },
        { make: 'Porsche', model: '914', color: 'green', year: 2002 }
    ];
    CarConstructorFnc.create(theCars, function(err, savedCars) {
        if (err) return handleError(err);
        console.log('Car saved: ', savedCars.length);
        // Find All
        CarConstructorFnc.find({}, function(err, cars) {
            if (err) return handleError(err);
            cars.forEach(function(car) {
                car.print();
            });
            console.log('Updating the Tesla...');
            var updates = { model: 'X', color: 'beige' };
            var options = { new: true };
            CarConstructorFnc.findOneAndUpdate({ make: 'Tesla' }, updates, options, function(err, updated) {
                if (err) return handleError(err);
                console.log('Updated!');
                updated.print();
                quit();
            });
        });
    });
});
