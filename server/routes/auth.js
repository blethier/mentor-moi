const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {registerValidation, loginValidation} = require('../routes/validation');
const nodemailer = require('nodemailer')

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    port: 465,               // true for 465, false for other ports
    host: "smtp.gmail.com",
       auth: {
            user: 'mentor.moi2021@gmail.com',
            pass: 'Mansour77.',
         },
    secure: true,
    });


router.post('/register', async (req,res) => {
     // Validate Data before we create user
    const {error} = registerValidation(req.body);
   
    if (error) return res.status(400).send(error.details[0].message);

    //Check if User is already in db
    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send('L\'email est déjà utilisé');

    //Hash passwords
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

   // Create New User 
   const user = new User({
      email: req.body.email,
      password: hashedPassword
    });
    try {
        const savedUser = await user.save();
        res.status(201).send({user});
        const mailData = {
            from: 'mentor.moi2021@gmail.com',  // sender address
              to: req.body.email,   // list of receivers
              subject: 'Sending Email using Node.js',
              text: 'That was easy!',
              html: "<b>Hello world?</b>", 
            };
    
            transporter.sendMail(mailData, function (err, info) {
                if(err)
                  console.log(err)
                else
                  console.log(info);
             });
    } catch (err) {
        res.status(400).send(err);
    } 
});

//LOGIN
router.post('/login', async (req, res) => {
    // Validate Data before we create user
    const {error} = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //Check if email exist
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).send('Cet email n\'existe pas !');

    //Check Password is correct
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Le mot de passe est incorrect !');

    //Create and assign token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET , {
        expiresIn : '1h'
    });

    
    res.header('auth-token', token).send({user, token})
});


router.post('/forgot', async (req, res) => {
    
    

    //Check if email exist
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).send('Cet email n\'existe pas !');

    //Check Password is correct
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Le mot de passe est incorrect !');

    //Create and assign token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET , {
        expiresIn : '3h'
    });
    res.header('auth-token', token).send({user, token})
});

module.exports = router;