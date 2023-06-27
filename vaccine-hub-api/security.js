const bcrypt = require("bcrypt");
const password = "supersecretpassword";

bcrypt.hash(password, 10, (err, hashedpsd) => {
  console.log(hashedpsd);
  console.log(password);
});
