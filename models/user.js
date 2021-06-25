// Import Schema and Model
const { Schema, model } = require("../db/connection");
// The Image Schema
const Dog = new Schema({
  id: String,
  name: String,
  temperament: String,
  breed_group: String,
  bred_for: String,
  life_span: String,
  origin: String,
  weight: {},
  country_code: String,
  height: {},
  hypoallergenic: Number,
  image: {
    id: String,
    width: String,
    height: String,
    url: String,
  },
});
// The User Schema
const UserSchema = new Schema(
  {
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    dogs: [Dog],
  },
  { timestamps: true }
);
// The User Model
const User = model("User", UserSchema);
// Export the User Model
module.exports = User;
