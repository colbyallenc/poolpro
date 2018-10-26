var emailHeader = `<div style="background-color:#e3e5e7">
        <table style="margin:0 auto 10px;max-width:800px;background:white;width:100%;" cellspacing="0" cellpadding="0" border="0" align="center">
            <tbody>
                <tr>
                    <td style="text-align:center;vertical-align:top;font-size:0px;padding:30px 0px;background: #083d8c;">&nbsp;
                    </td>
                </tr>`;
var emailFooter = `<tr>
                    <td style="word-break:break-word;font-size:0px;padding: 25px 20px;background: #F5F7F9;" align="center">
                        <font style="color:#222228;font-family:\'Avenir Next\',Avenir,sans-serif;font-size:13px;line-height:20px;">If you are having any issues with your account, please don't hesitate to contact us by replying to this mail.</font>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>`;

module.exports = {
    SEND_MAIL_DEALER: {
        SUBJECT: 'PoolPros : Email from customer',
        TEMPLATE: emailHeader+
            `<tr>
                <td style="word-break:break-word;font-size:0px;padding: 40px 25px 0px;" align="left">
                <font style="color:#222228;font-family:\'Avenir Next\',Avenir,sans-serif;font-size:18px;font-weight:500;line-height:30px">Hello {DEALER_NAME},</font>
                <font style="color:#222228;font-family:\'Avenir Next\',Avenir,sans-serif;font-size:16px;line-height:30px;display:block;padding-top: 25px;"><b style="font-weight:500;white-space:nowrap">You have received an enquiry. The details are below: </b></font>
                <font style="color:#222228;font-family:\'Avenir Next\',Avenir,sans-serif;font-size:16px;line-height:30px;display: block;padding-top: 10px;"><b>Name:</b> {CUSTOMER_NAME}</font>
                <font style="color:#222228;font-family:\'Avenir Next\',Avenir,sans-serif;font-size:16px;line-height:30px;display: block;padding-top: 10px;"><b>Phone:</b> {CUSTOMER_PHONE}</font>
                <font style="color:#222228;font-family:\'Avenir Next\',Avenir,sans-serif;font-size:16px;line-height:30px;display: block;padding-top: 10px;"><b>Email:</b> {CUSTOMER_EMAIL}</font>
                <font style="color:#222228;font-family:\'Avenir Next\',Avenir,sans-serif;font-size:16px;line-height:30px;display: block;padding-top: 10px;"><b>Comments or Questions:</b> {CUSTOMER_COMMENT}</font>
                <font style="color:#222228;font-family:\'Avenir Next\',Avenir,sans-serif;font-size:16px;line-height:30px;display: block;padding-top: 10px;"><b>Do you currently own a pool or spa?:</b> {CUSTOMER_POOL}</font>
                </td>
            </tr>`
            +emailFooter
    },
};