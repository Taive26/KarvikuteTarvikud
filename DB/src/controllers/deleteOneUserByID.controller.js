const db = require('../db');
const Users = db.Users;

module.exports = async function (req, res) {
  try {
    const user = await Users.deleteOne({ _id: req.params.id });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};