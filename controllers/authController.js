const User = require('../model/User');

exports.getLogin = (req, res, next) => {
  res.render('login');
};

exports.getRegister = (req, res, next) => {
  res.render('register');
};

exports.postLogin = (req, res, next) => {
  const { username, password } = req.body;

  User.findOne({ name: username })
    .then((user) => {
      if (user.password === password) {
        res.render('secrets');
      } else {
        console.log('please enter pass');
      }
    })
    .catch((e) => console.log(e));
};

exports.postRegister = (req, res, next) => {
  const { username, password } = req.body;
  const user = new User({
    name: username,
    password: password,
  });
  user
    .save()
    .then(() => {
      console.log('user created!');
      res.render('secrets');
    })
    .catch((e) => console.log(e));
};
