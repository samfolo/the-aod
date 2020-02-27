var mongoose = require('mongoose');  

var userSchema = new mongoose.Schema({  
  firstName: String,
  lastName: String,
  email: String,
  facebookUrl: String,
  instagramUrl: String,
  twitterUrl: String,
  password: String,
});

mongoose.model('User', userSchema);
