


const Comment = require('../models/userModel');

// Get all comments
exports.readAllcomment = (req, res) => {
    Comment.find({}, (error, comments) => {
        if(error){
            res.status(500);
            console.log(error);
            res.end({message: "Erreur serveur."});
        }
        else {
            res.status(200);
            res.json({
                count : comments.length,
                comments
            });
        }
    });
}

// Create a comment
exports.createAcomment = (req, res) => {
    // {
    //     title: "Mon premeir article",
    //     content: "toto"
    // }
    let newComment = new Comment(req.body);

    newComment.save((error, comment) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.end({ message: "Erreur serveur." });
        }
        else {
            res.status(201);
            res.json(comment);
        }
    });
}


// Get a comment
exports.readAcomment = (req, res) => {
    Comment.findById(req.params.comment_id, (error, comment) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.end({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(comments);
        }
    });
}

// Update a comment
exports.updateAcomment = (req, res) => {
    Comment.findByIdAndUpdate(req.params.comment_id, req.body, {new: true}, (error, comment) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.end({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(comment);
        }
    });
}

// Delete a comment
exports.deleteAcomment = (req, res) => {
    Comment.findByIdAndDelete(req.params.comment_id, (error) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.end({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json({message: "Article supprimé"});
        }
    });
}




















