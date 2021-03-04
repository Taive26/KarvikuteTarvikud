const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jwt = require(`jsonwebtoken`);
const bcrypt = require(`bcryptjs`);

const usersSchema = new Schema({
  userType: {
    type: String,
    enum: ["ADMIN", "NOT_ADMIN"],
    required: true,
  },
  firstName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 15,
  },
  lastName: {
    type: String,
    required: true,
    maxlength: 15,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  password: {
    type: String,
    required: [true, "Please Include your password"],
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

//this method will hash the password before saving the user model
usersSchema.pre(`save`, async function (next) {
  const user = this;
  if (user.isModified(`password`)) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

//this method generates an auth token for the user
usersSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign(
    { _id: user._id, firstName: user.firstName, lastName: user.lastName, email: user.email, userType: user.userType },
    process.env.TOKEN_SECRET
  );
  res.header('jwt_token', token);
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

//this method search for a user by email and password.
usersSchema.statics.findByCredentials = async (email, password) => {
  const user = await Users.findOne({ email });
  if (!user) {
    throw new Error({ error: "Invalid login details" });
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    throw new Error({ error: "Invalid login details" });
  }
  return user;
};

usersSchema.set("toJSON", { virtuals: true });
const Users = mongoose.model(`users`, usersSchema);
module.exports = Users;
