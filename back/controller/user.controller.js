const userModel = require("../model/user.model");

class User {
    async getUser(req, res) {
        try {
            const response = await userModel.find();
            res.status(200).json({
                message: "SUCCESS",
                data: response,
            });
        } catch (error) {
            res.send(error.message);
        }
    }
    async getOneUser(req, res) {
        const { id } = req.params;
        console.log(id);
        try {
            const response = await userModel.findById(id);
            res.status(200).json({
                message: "SUCCESS",
                data: response,
            });
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    }

    async addUser(req, res) {
        const payload = req.body;
        try {
            const isRegistered = await userModel.findOne({ email: payload.email });
            if (isRegistered) {
                throw new Error("email has been registered");
            }
            const response = await userModel.create(payload);
            res.status(201).json({
                message: "SUCCESS",
                data: response,
            });
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    }
    async editUser(req, res) {
        const payload = req.body;
        const { id } = req.params;
        try {
            const response = await userModel.findByIdAndUpdate(id, {
                name: payload.name,
                email: payload.email,
            });
            console.log(response)
            res.status(201).json({
                message: "SUCCESS",
                data: response,
            });
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    }
    async deleteUser(req, res) {
        const { id } = req.params;
        console.log(id);
        try {
            const response = await userModel.findByIdAndDelete(id);
            res.status(201).json({
                message: "SUCCESS",
                data: response,
            });
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    }
}

module.exports = User;
