const User = require('../models/user.model');

const userController = {};

userController.createUser = async (req, res) => {
    const body = req.body;

    try {
        if (body.km > 4) {
            const createdUser = await User.create(body);
            return res.status(201).json(createdUser);
        }
        return res.status(200).json({response: 'Debes de caminar más.'});
    } catch (error) {
        return res.status(400).json(error);
    }
}

userController.listUser = async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(400).json(error);
    }
}

module.exports = userController;