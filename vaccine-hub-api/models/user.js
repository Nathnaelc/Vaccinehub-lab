const { BadRequestError, UnathorizedError } = require("../utils/errors");
const db = require("../db");
const { BYCRYPT_WORK_FACTOR } = require("../config");
const bycrypt = require("bcrypt");

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
    const requiredFields = ["email", "password", "first_name", "last_name"];
    requiredFields.forEach((field) => {
      if (!credentials.hasOwnProperty(field)) {
        throw new BadRequestError(`Missing field: ${field} is required boody.`);
      }
    });

    if (credentials.email.indexOf("@") <= 0) {
      throw new BadRequestError("Invalid Email");
    }
    //take the user email and hash it
    //create a new user object in the database with their info
    const existingUser = await User.fetchUserByEmail(credentials.email);
    if (existingUser) {
      throw new BadRequestError(`User already exists: ${existingUser.email}`);
    }

    const hashedPassword = await bycrypt.hash(
      credentials.password,
      BYCRYPT_WORK_FACTOR
    );

    const lowercasedEmail = credentials.email.toLowerCase();
    const result = await db.query(
      `INSERT INTO users (email, password, first_name, last_name) VALUES ($1, $2, $3, $4) RETURNING *
      `,
      [
        lowercasedEmail,
        hashedPassword,
        credentials.firstName,
        credentials.lastName,
      ]
    );
    const user = result.rows[0];
    return user;
  }
  static async fetchUserByEmail(email) {
    if (!email) {
      throw new BadRequestError("No email provided");
    }
    const query = "SELECT * FROM users WHERE email = $1";
    const result = await db.query(query, [email.toLowerCase()]);
    const user = result.rows[0];
    return user;
  }
}

module.exports = User;
