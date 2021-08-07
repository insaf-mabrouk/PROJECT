const { body, validationResult } = require('express-validator');

const RegisterRules =()=>[
body("name","you have to enter your name").notEmpty(),
body("email","not valid email").isEmail(),
body("password","password must contain at least 6 characters").isLength({min:6,max:18}),

]

const LoginRules =()=>[

body("email","not valid email").isEmail(),
body("password","password must contain at least 6 characters").isLength({min:6,max:18}),

]

const validator =(req, res, next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array().map(el=>el.msg) });
    }
    next()
}

module.exports = {
    RegisterRules,
    LoginRules,
    validator
}