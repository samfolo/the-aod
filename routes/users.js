var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

router.use(bodyParser.urlencoded({ extended: true }))
router.use(methodOverride(function(req, res){
      if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
      }
}));

/* GET users listing. */
router.get('/', function(req, res, next) {
  mongoose.model('User').find({}, function (err, users) {
    if (err) {
        return console.error(err);
    } else {
      //respond to both HTML and JSON. JSON responses require 'Accept: application/json;' in the Request Header
      res.format({
        //JSON response will show all blobs in JSON format
        json: function(){
          res.json(users);
        }
      });
    }     
  });
})
.post('/', function(req, res) {
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var email = req.body.email;
  var facebookUrl = req.body.facebookUrl;
  var instagramUrl = req.body.instagramUrl;
  var twitterUrl = req.body.twitterUrl;
  var password = req.body.password;

  mongoose.model('User').create({ 
    firstName: firstName,
    lastName: lastName,
    email: email,
    facebookUrl: facebookUrl,
    instagramUrl: instagramUrl,
    twitterUrl: twitterUrl,
    password: password,
  }, function(err, user) {
    if (err) {
      res.send('error..')
    } else {
      console.log('POST creating user..');
      res.format({
        json: function(){
          res.json(user);
        }
      });
    }
  });
});

module.exports = router;
