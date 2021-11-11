


const commentController = require('../controllers/commentController');

module.exports = (server) => {
    server.route("/comments")
    .get(commentController.readAllcomment) // Get all comments
    .post(commentController.createAcomment); // Create a comment
    
    server.route("/comments/:comment_id") // req.params.comment_id
    .get(commentController.readAcomment) // Get one comments
    .put(commentController.updateAcomment) // Update one comment
    .delete(commentController.deleteAcomment); // Delete one comment
}