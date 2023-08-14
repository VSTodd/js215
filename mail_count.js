/*
- Build a function that parses a string of email data. The function takes an
  argument that contains the data, parses it, then produces two basic statistics
  about the email:
    - The number of email messages found in the string
    - The date range of the email messages

- The email messages string has the following characteristics:
    - The string contains multiple email messages separated by the delimiter
      string ##||##.
    - Each email message has five parts, the delimiter string #/# separates the
      parts.
    - The five parts are:
        Sender
        Subject
        Date
        Recipient
        Body

  - All five parts occur in the sequence shown above.

  - initialize variable emailData, set equal to the email data file split by the
    delimiter ##||##
  - initialize variable emailCount, set equal to the length of emailData
  - iterate over each element in emailData, splitting each email by the
    delimiter #/#
  - initialize two variables, oldest and newest, both set to the first email's
    date
  - iterate over each element in emailData; if a date is older than what is
    currently in oldest, update it; same with newest if newer
  - log the appropriate data to the console
*/

function mailCount(emailData) {
  emailData = emailData.split('##||##');
  let emailCount = emailData.length;
  let emailParsed = [];

  emailData.forEach((email) => {
    let parsed = {};
    email.split('#/#').forEach((part) => {
      part = part.split(': ');
      part[0] = part[0].replace(/\n/gm, '').toLowerCase()
      parsed[part[0]] = part[1];
    })
    emailParsed.push(parsed)
  });

  let oldest = new Date(emailParsed[0].date);
  let newest = new Date(emailParsed[0].date);

  emailParsed.forEach(email => {
    let emailDate = new Date(email.date);
    if (emailDate > newest) {
      newest = emailDate;
    } else if (emailDate < oldest) {
      oldest = emailDate;
    }
  });

  console.log(`Count of Email: ${emailCount}`)
  console.log(`Date Range: ${oldest.toDateString()} - ${newest.toDateString()}`)
}

let emailDataFile = require('./email_data_v2.js');
let emailData = emailDataFile.emailData

mailCount(emailData);

// console output

/*
Count of Email: 5
Date Range: Sat Jun 25 2016 - Thu Aug 11 2016
*/