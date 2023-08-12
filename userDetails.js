// const mongoose = require("mongoose");

// const UserDetailsScehma = new mongoose.Schema(
//   {
//     // _id: String,
//     fname: String,
//     lname: String,
//     email: { type: String, unique: true },
//     password: String,
//     contact: Number,
//     city: String,
//     headline: String,
//     description: String,
//     branch: String,
//     cYear: String,
//     //cgpa: float,
//     clubs: String,
//     KTs: Number,
//   },
//   {
//     collection: "UserInfo",
//   }
// );

// mongoose.model("UserInfo", UserDetailsScehma);


const mongoose = require("mongoose");

const UserDetailsScehma = new mongoose.Schema(
  {
    fname: String,
    lname: String,
    email: { type: String, unique: true },
    password: String,
    contact: Number,
    city: String,
    headline: String,
    domain:String,
    description: String,
    branch: String,
    year: String,
    cgpa: String,
    clubs: String,
    kt: Number,
    skills:String,
  },
  {
    collection: "UserInfo",
  }
);

mongoose.model("UserInfo", UserDetailsScehma);