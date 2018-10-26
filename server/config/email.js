var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: 'md-55.webhostbox.net',
    port: 465,
    secure: "STARTTLS", // upgrade later with STARTTLS
    auth: {
        user: 'colby@gmail.com',
        pass: 'colby'
    }
});

module.exports = {
    sendMail : function(to, subject, content, callback) {
        var mailOptions = {
            from: 'PoolPros <colby@gmail.com>',
            to: to,
            subject: subject,
            html: content
        };
        transporter.sendMail(mailOptions, function(error, info){
            console.log(info);
            if (error) {
                callback(error.message);
            } else {
                callback(null);
            }
        });
    }
}