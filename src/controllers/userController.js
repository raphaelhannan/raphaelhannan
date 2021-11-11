


const User = require('../models/userModel');



// Create a user
exports.createAuser = (req, res) => {
    // {
    //     title: "Mon premeir article",
    //     content: "toto"
    // }
    let newuser = new User(req.body);

    newuser.save((error, user) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.end({ message: "Erreur serveur." });
        }
        else {
            res.status(201);
            res.json(user);
        }
    });
}















