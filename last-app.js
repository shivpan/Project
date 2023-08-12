const express = require("express");
const fs=require("fs")
const app = express();
const path =require("path")
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());
const bcrypt = require("bcryptjs");
app.set("view engine", "ejs");
app.set('views',path.join(__dirname,'views'))
app.use(express.static(`${__dirname}/public`))
app.use(express.urlencoded({ extended: false }));
const multer=require("multer")
// const GeneralDetails = require("../React/src/components/GeneralDetails");
const rewiremock = require('rewiremock/node');
rewiremock.overrideEntryPoint(module);


const jwt = require("jsonwebtoken");
var nodemailer = require("nodemailer");
// const { default: GeneralDetails } = require("../React/src/components/GeneralDetails");

const JWT_SECRET =
  "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";

const mongoUrl =
  "mongodb://localhost:27017/";

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

require("./userDetails");
require("./empDetails")


const User = mongoose.model("UserInfo");
const Emp=mongoose.model("EmpInfo")

// GLOBAL VALUES
var GlobalEmail="";

app.post("/register", async (req, res) => {
  const { fname, lname, email, password, contact } = req.body;

  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.json({ error: "User Exists" });
    }
    await User.create({
      fname,
      lname,
      email,
      password: encryptedPassword,
      contact,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

const storage = multer.diskStorage({
  destination:  (req, file, cb) =>{
    cb(null, "uploads");
  },
  filename: ( req,file, cb) =>{
    cb(null, file.originalname);
  }
});

const upload = multer({
  storage: storage,
  //limits: {
   // fileSize: 1000000 // 1000000 Bytes = 1 MB
 // },
  //fileFilter(req, file, cb) {
    //if (!file.originalname.match(/\.(png|jpg)$/)) { 
       // upload only png and jpg format
     //  return cb(new Error('Please upload a Image'))
    // }
  // cb(undefined, true)
//}
}) 


app.post("/general-details", async (req, res) => {
  const { token } = req.body;
  const { city, headline, description } = req.body; 
  // const jwt = require("jsonwebtoken");
  try {
    const user = jwt.verify(token, JWT_SECRET);
    console.log(user);
    const useremail = user.email;
    // await User.updateOne
    await User.updateOne({ email: useremail },{
      city, 
      headline, 
      description,
      });
      res.send({ status: "ok" });
  } catch (error) {console.log(error);}
});




// app.post("/general-details",
//   upload.single('upimg'),async (req, res,) => {
//   const { token } = req.body;
//   const user = jwt.verify(token, JWT_SECRET);
//   console.log(user);
//   const useremail = user.email;
  
//   const { city, headline, description } = req.body; 
//   // const jwt = require("jsonwebtoken");
//   try {
//     const newFile =User({ email: useremail },{
//        image:{
//         data: fs.readFileSync("uploads/" + req.file.filename),
//             contentType: 'image/png'
//        }
//     });
//     newFile
//     .save()
    
//     console.log(req.file)
    
//     // await User.updateOne
//     await User.updateOne({ email: useremail },{
//       city, 
//       headline, 
//       description,
//       });
//       res.send({ status: "ok" });
//   } catch (error) {console.log(error);}
// });


app.post("/educational-details", async (req, res) => {
  const { token } = req.body;
  const { branch, year, cgpa, clubs, kt } = req.body;
  // const jwt = require("jsonwebtoken");
  try {
    const user = jwt.verify(token, JWT_SECRET);
    console.log(user);
    const useremail = user.email;
    // await User.updateOne
    await User.updateOne({ email: useremail },{
      branch, 
      year, 
      cgpa, 
      clubs, 
      kt,
      });
      res.send({ status: "ok" });
  } catch (error) {console.log(error);}
});


app.post("/skills-edit", async (req, res) => {
  const { token } = req.body;
  const { skills } = req.body;
  // const jwt = require("jsonwebtoken");
  try {
    const user = jwt.verify(token, JWT_SECRET);
    console.log(user);
    const useremail = user.email;
    // await User.updateOne
    await User.updateOne({ email: useremail },{
      skills,
      });
      res.send({ status: "ok" });
  } catch (error) {console.log(error);}
});



app.post("/login-user", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ error: "User Not found" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ email: user.email }, JWT_SECRET);

    if (res.status(201)) {
      return res.json({ status: "ok", data: token });
    } else {
      return res.json({ error: "error" });
    }
  }
  res.json({ status: "error", error: "InValid Password" });
});


app.post("/userData", async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET);
    console.log(user);

    const useremail = user.email;
    User.findOne({ email: useremail })
      .then((data) => {
        res.send({ status: "ok", data: data });
      })
      .catch((error) => {
        res.send({ status: "error", data: error });
      });
  } catch (error) {}
});

// EMP SEARCH

app.post("/empsearch", async (req, res) => {
  const { token } = req.body;
  const {domain,skills}=req.body
  console.log(domain)
  // const query={headline: domain }
  
  // const headline = req.body.domain
  // const {description}= req.body

  const jwt = require("jsonwebtoken");
  try {
    // await User.updateOne
    // const show=await User.find(req.body);
    //
    // // 
    const show = await User.find({domain:domain})
        console.log(show);
        if (!show) {
          res.status(400).json({
            mensaje: "This products is not in our DataBase",
          });
        }
    }catch(error){}
    
})




app.listen(5000, () => {
  console.log("Server Started");
});

app.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  try {
    const oldUser = await User.findOne({ email });
    if (!oldUser) {
      return res.json({ status: "User Not Exists!!" });
    }
    const secret = JWT_SECRET + oldUser.password;
    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: "5m",
    });
    const link = `http://localhost:5000/reset-password/${oldUser._id}/${token}`;
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "adarsh438tcsckandivali@gmail.com",
        pass: "rmdklolcsmswvyfw",
      },
    });

    var mailOptions = {
      from: "youremail@gmail.com",
      to: "thedebugarena@gmail.com",
      subject: "Password Reset",
      text: link,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    console.log(link);
  } catch (error) {}
});

app.get("/reset-password/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  console.log(req.params);
  const oldUser = await User.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: "User Not Exists!!" });
  }
  const secret = JWT_SECRET + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    res.render("index", { email: verify.email, status: "Not Verified" });
  } catch (error) {
    console.log(error);
    res.send("Not Verified");
  }
});

app.post("/reset-password/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;

  const oldUser = await User.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: "User Not Exists!!" });
  }
  const secret = JWT_SECRET + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    const encryptedPassword = await bcrypt.hash(password, 10);
    await User.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          password: encryptedPassword,
        },
      }
    );
    

    res.render("index", { email: verify.email, status: "verified" });
  } catch (error) {
    console.log(error);
    res.json({ status: "Something Went Wrong" });
  }
});

// module.exports = mongoose.model("UserInfo", UserDetailsScehma);

////////////EMPLOYEE PART////////////



app.post("/register-emp", async (req, res) => {
  const { fname, lname, email, password, contact,Occupation,Purpose } = req.body;

  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldEmp = await Emp.findOne({ email });

    if (oldEmp) {
      return res.json({ error: "Employee Exists" });
    }
    await Emp.create({
      fname,
      lname,
      email,
      password: encryptedPassword,
      contact,
      Occupation,
      Purpose,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

app.post("/login-emp", async (req, res) => {
  const { email, password } = req.body;

  const emp = await Emp.findOne({ email });
  if (!emp) {
    return res.json({ error: "Employer Not found" });
  }
  if (await bcrypt.compare(password, emp.password)) {
    const token = jwt.sign({ email: emp.email }, JWT_SECRET);

    if (res.status(201)) {
      return res.json({ status: "ok", data: token });
    } else {
      return res.json({ error: "error" });
    }
  }
  res.json({ status: "error", error: "InValid Password" });
});

app.post("/empData", async (req, res) => {
  const { token } = req.body;
  try {
    const emp = jwt.verify(token, JWT_SECRET);
    console.log(emp);

    const empemail = emp.email;
    Emp.findOne({ email: empemail })
      .then((data) => {
        res.send({ status: "ok", data: data });
      })
      .catch((error) => {
        res.send({ status: "error", data: error });
      });
  } catch (error) {}
});

app.post("/emp-general-details", async (req, res) => {
  const { token } = req.body;
  const { city, description, projects } = req.body; 
  // const jwt = require("jsonwebtoken");
  try {
    const emp = jwt.verify(token, JWT_SECRET);
    console.log(emp);
    const empemail = emp.email;
    // await User.updateOne
    await Emp.updateOne({ email: empemail },{
      city, 
      description,
      projects,
      });
      res.send({ status: "ok" });
  } catch (error) {console.log(error);}
});

