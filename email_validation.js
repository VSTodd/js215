/*
- Implement a function that checks whether an email address is valid
- An email address has two parts: A "local part" and a "domain part."
- An @ sign separates the two parts: local-part@domain-part
- The local part is the name of the mailbox; this is usually a username
- The domain part is the domain name (e.g., gmail.com, yahoo.com.ph, or
  myCompanyName.com)
- The domain name contains a server name (sometimes called the mail server name)
  and a top-level domain (.com, .ph, etc.).

- Use the following criteria to determine whether an email address is valid:
    - There must be one @ sign.
    - The local part must contain one or more letters (A-Z, a-z) and/or digits
      (0-9). It may not contain any other characters.
    - The domain part must contain two or more components with a single dot (.)
      between each component. Each component must contain one or more letters
      (A-Z, a-z) only.

- Abstraction:
  - return false if the email does not contain @
  - split email into two variables, local and domain
  - return false if local contains anything other than letters and digits
  - return false if domain contains anything other than letters or periods
  - reassign local to local split by a dot; return false if either is empty or
    the array is longer than 2
  - otherwise return true if everything else if passed

*/

function isValidEmail(email) {
  if (!email.includes('@')) return false;

  email = email.split('@');
  let local = email[0];
  let domain = email[1];

  if (local.match(/[^a-z0-9]/gi)) return false;
  if (domain.match(/[^a-z.]/gi)) return false;

  domain = domain.split('.');

  if (domain.length < 2 || domain[0] === '' || domain[1] === '') return false;

  return true
};

console.log(isValidEmail('Foo@baz.com.ph'));          // returns true
console.log(isValidEmail('Foo@mx.baz.com.ph'));       // returns true
console.log(isValidEmail('foo@baz.com'));             // returns true
console.log(isValidEmail('foo@baz.ph'));              // returns true
console.log(isValidEmail('HELLO123@baz'));            // returns false
console.log(isValidEmail('foo.bar@baz.to'));          // returns false
console.log(isValidEmail('foo@baz.'));                // returns false
console.log(isValidEmail('foo_bat@baz'));             // returns false
console.log(isValidEmail('foo@bar.a12'));             // returns false
console.log(isValidEmail('foo_bar@baz.com'));         // returns false
console.log(isValidEmail('foo@bar.....com'));         // returns false