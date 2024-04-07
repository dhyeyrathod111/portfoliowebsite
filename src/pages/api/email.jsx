import nodemailer from 'nodemailer'

export default function handler(req, res) {

    var transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // use TLS
        auth: {
            user: "jayantmishrademo@gmail.com",
            pass: "9967313968",
        }        
    });

    var mailOptions = {
        from: 'jayantmishrademo@gmail.com',
        to: 'dhyeyrathod111@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

}