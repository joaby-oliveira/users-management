var User = require("../models/User");

class UserController {
  async index(req, res) {}

  async create(req, res) {
    const {name, email, password} = req.body;

    if(email == undefined) {
      res.statusCode = 400;
      res.json({error: "O email é invalido"});
      return;
    }

    const emailExists = await User.findEmail(email);
    
    if (emailExists) {
      res.statusCode = 400;
      res.json({error: "Email já cadastrado"});
      return;
    }
    

    await User.new(name, email, password);
    
    
    res.statusCode = 200;
    res.send({email, password});
  }
}
module.exports = new UserController();