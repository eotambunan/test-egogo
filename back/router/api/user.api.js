const express = require('express')
const userRouter = express.Router()
const UserController = require("../../controller/user.controller")
const userController = new UserController


userRouter.get("/",userController.getUser)
userRouter.get("/:id",userController.getOneUser)
userRouter.post("/",userController.addUser)
userRouter.patch("/:id",userController.editUser)
userRouter.delete("/:id",userController.deleteUser)


module.exports = userRouter
