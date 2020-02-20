//require('dotenv').config();
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'testone1510@gmail.com',
        pass: '227788ad@'
    }
});


let mailOption = {
    from: 'testone1510@gmail.com',
    to: 'almamun.it.15@gmail.com, rmamunme@gmail.com',
    subject: 'Testing and testin',
    text: 'It works!!'
}


transporter.sendMail(mailOption, (err, data) => {
    if (err) {
        console.log('Error occurs')
    } else {
        console.log('Email sent')
    }
});