const express = require("express")

const router = express.Router();
// const {home , register} = require("../controllers/auth-controller")
const authcontrollers = require("../controllers/auth-controller")

 
// router.get("/",(req,res) => {
//     res.status(200).send("Welcome using router")
// } );

router.route("/").get(authcontrollers.home);// 
router.route("/new").get((req,res)=>{   //both are same
    res.status(200).send("Welcome using router new")
})

router.route("/register").post(authcontrollers.register);
router.route("/login").post(authcontrollers.login);

module.exports = router;