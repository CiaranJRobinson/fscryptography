const users = []
const bcrypt = require("bcryptjs");


module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body

      for (let i = 0; i < users.length; i++) {
        const pinExists = bcrypt.compareSync(password, users[i].password);
        if (users[i].username === username && pinExists) {
          let userObjToReturn = users[i];
          delete userObjToReturn.password;
          return res.status(200).send(users[i])
        }

      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        console.log('Registering User')
        console.log(req.body)
        const pin = req.body.password
        const salt = bcrypt.genSaltSync(10);
        const pinHash = bcrypt.hashSync(pin, salt);

        let hashUserObj = req.body;
        hashUserObj.password = pinHash;
        console.log(hashUserObj);



        users.push(hashUserObj);
        res.status(200).send(req.body)


    }
}