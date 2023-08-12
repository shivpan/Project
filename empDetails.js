const mongoose = require("mongoose");

const EmpDetailsScehma = new mongoose.Schema(
  {
    fname: String,
    lname: String,
    email: { type: String, unique: true },
    password: String,
    contact: Number,
    city: String,
    description:String,
    Occupation:String,
    Purpose:String,
    projects:String,
  },
  {
    collection: "EmpInfo",
  }
);

mongoose.model("EmpInfo", EmpDetailsScehma);