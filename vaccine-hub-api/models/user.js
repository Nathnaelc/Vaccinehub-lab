const { UnathorizedError } = require("./utils/errors");

class User {
  static async login(credentials) {
    // submit their email and password
    // if fields are missing, throw an error
    //look for user in the database by email
    //if user doesn't exist, throw an error
    throw new UnathorizedError("Invalid credentials");
  }
  static async register(credentials) {
    // submit their email and password
    // if fields are missing, throw an error
    //take the user email and hash it
    //create a new user object in the database with their info
  }
}

module.exports = User;
