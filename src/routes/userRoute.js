


const userController = require('../controllers/userController');

module.exports = (server) => {
    server.route("/users")
    .get(userController.readAlluser) // Get all users
    .post(userController.createAuser); // Create a user
    
    server.route("/users/:user_id") // req.params.user_id
    .get(userController.readAuser) // Get one users
    .put(userController.updateAuser) // Update one user
    .delete(userController.deleteAuser); // Delete one user
}