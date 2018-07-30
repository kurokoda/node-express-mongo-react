const nodemailer = require('nodemailer');

// TODO add these properties to environment vars
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth   : {
    user: 'stepping.up.apaf@gmail.com',
    pass: 'st3pp1ng'
  }
});

// create -------------------------------------------------------------------

export const sendInvitationEmail = (password, email) => {
  if (!process.env.SERVER_ENV) return; // Interrupt if testing
  const options = {
    from   : 'stepping.up.apaf@gmail.com',
    to     : `${email}, stepping.up.apaf@gmail.com`,
    subject: 'You have been added to Stepping Up',
    text   : `Your temporary password is ${password}. Please personalize your password on our website.`,
    html   : `<p>Your temporary password is ${password}. </p><p>Please personalize your password on our website.</p>`,
  };

  transporter.sendMail(options, (err, info) => {
    err ?
      console.log(err) :
      console.log(info);
  });
};

