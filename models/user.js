// Import Schema and Model
const {Schema, model} = require("../db/connection")
// The Image Schema
const Dog = new Schema({
    id: String,
    name: String,
    temperament: String,
    life_span: String,
    wikipedia_url: String,
    origin: String,
    weight: {},
    country_code: String,
    height: {},
    hypoallergenic: Number
})
// The User Schema
const UserSchema = new Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    dogs: [Dog],
}, {timestamps: true})
// The User Model
const User = model("User", UserSchema)
// Export the User Model
module.exports = User
