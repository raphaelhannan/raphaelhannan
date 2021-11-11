


const postController = require('../controllers/postController');

module.exports = (server) => {
    server.route("/posts")
    .get(postController.readAllpost) // Get all posts
    .post(postController.createApost); // Create a post
    
    server.route("/posts/:post_id") // req.params.post_id
    .get(postController.readApost) // Get one posts
    .put(postController.updateApost) // Update one post
    .delete(postController.deleteApost); // Delete one post
}