const passport = require('passport');
const User = require('../models/user');

module.exports = function addAuthRoutes(router) {
  router.post('/login', function login(req, res, next) {
    // TODO: validate username/password
    passport.authenticate('local', function(err, user, info) {
      if (err) return next(err);
      if (!user) return res.json({success: false, message: "No user with that name exists"});
      
      res.json({success: true, message:"Logged in"});
    })(req, res, next);
  });
  
  router.post('/register', function register(req, res, next) {
    // TODO: validate username/password
    const user = new User();
    user.username = req.body.username;
    user.hashPassword(req.body.password);
  
    user.save(function(err, user) {
      if (err) return next(err);
  
      res.json({
        success: true, 
        message:"User created successfully",
      });
  
    });
  });
}