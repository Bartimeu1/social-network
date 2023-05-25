const User = require('../models/user');

const handleError = (res, error) => {
  res.status(500).json({ error });
};

const addUser = (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => handleError(res, err));
};

module.exports = { addUser };
