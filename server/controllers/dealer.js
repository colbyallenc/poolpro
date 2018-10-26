const data = require('../data/dealers.json');
// const _ = require("lodash");
const Mail = require('../config/email');
const EmailTemplates = require('../config/emailTemplates');

// Handle errors thrown by API requests.
function handleErrors(res, err) {
  console.log(`📛\tError occurred: ${err}`);
  res.status(400).json(err);
}

// Create endpoint /api/dealers for GET
exports.getDealers = async (req, res) => {
	var dealersObj = data.dealers;
	// var filtered = _.filter(dealersObj, { certifications : "Service Pro"});
	// console.log(filtered);
	res.json(dealersObj);
};

// send mail 
exports.sendEmailDealer = async(req,res)=>{
    var mailOptions = {
        from: "poolpros <support@poolpros.co>",
        to: req.body.to_email,
        subject: 'Enquiry mail',
        text: req.body.comment
    };
    res.json(req.body);
    /*var emailContentDealer = EmailTemplates.SEND_MAIL_DEALER.TEMPLATE
		.replace(/{DEALER_NAME}/g, req.body.)
		.replace(/{CUSTOMER_NAME}/g, order._id)
		.replace(/{CUSTOMER_PHONE}/g, (order.status.paid)?"Paid":"Unpaid")
		.replace(/{CUSTOMER_EMAIL}/g, order.delivery_address.firstName)
		.replace(/{CUSTOMER_COMMENT}/g, order.delivery_address.lastName)
		.replace(/{CUSTOMER_POOL}/g, order.delivery_address.streetAddress);

    Mail.sendMail(order.baker.owner.email, EmailTemplates.SEND_MAIL_DEALER.SUBJECT,emailContentDealer, function(err) {
        if(err)
        	console.log(err);

     	res.json(order);
    });*/
};