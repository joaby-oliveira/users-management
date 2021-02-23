var knex = require("../database/connection")

var bcrypt = require("bcrypt")

class User {
  async new(name, email, password) {
    try {
      const hash = await bcrypt.hash(password, 10);
      await knex.insert({name, email, password: hash, role: 0}).table("users");
    } catch (error) {
      return error;
    }
  }

  async findEmail(email) {
    try {
      const result = await knex.select("*").from("users").where({email});
      if (result.length > 0) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

module.exports = new User();