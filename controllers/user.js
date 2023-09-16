const User = require('../models/user')


const getUsers = async (req, res) => {
    res.send([{ id: 1, email: "kanza@gamil.com" }])
}
const handleRegister = async (req, res) => {
    console.log('createUser')
    const { name, email, password } = req.body;
    if (!email) {
        return res.status(400).send('Please enter an email address');
    }
    if (!email.endsWith('@gmail.com')) {
        return res.status(400).send('Email end with @gmail.com');
    }
    if (!password) {
        return res.status(400).send('Please enter a password');
    }

    if (password.length < 8) {
        return res.status(400).send('Password must be at least 8 characters long');
    }

    //at least 1 alphabet, 1 special character, and 1 number in password using regular expressions.
    const alphabet = /[a-zA-Z]/.test(password);
    const specialCharacter = /[!@#$%^&*()-_+=<>?]/.test(password);
    const number = /[0-9]/.test(password);

    if (!(alphabet && specialCharacter && number)) {
        return res.status(400).send('Password must include at least 1 alphabet, 1 special character, and 1 number');
    }
    const newUser = {
        name, email, password
    }
    const checkUser = await User.findOne({ email });

    if (checkUser) {
        return res.send('email already exist')
    }
    const user = await User.create(newUser);
    res.status(201).send({
        message: 'user created',
        data: user
    });
    console.log("check User: ", user)
}
const handleLogin = async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    res.send(`${email} is in logged in`)
}

module.exports = { handleLogin, handleRegister, getUsers };

