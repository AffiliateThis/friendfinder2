// // // * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible 
// friends.
// // * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will 
// also be used to handle the compatibility logic.

var users = require('../data/friends');

module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        res.json(users);
    });

    app.post('/api/friends', function(req, res) {
        var newUser = friends.addFriend(req, res);
        res.json(newUser);


        res.json({ ok: true});
    });




};