const express = require('express')

const userRouter = require('express').Router()

const validateToken =  require('../middilewares/validateMiddileware')

const {getUsers , createUser , userID , deleteUser , checkUser , login , updateUser} = require('../controllers/userController')


userRouter.get('/',getUsers)

userRouter.post('/register', createUser)

userRouter.get('/checkUser', validateToken , checkUser)

userRouter.get('/:id',userID)

userRouter.delete('/:id',deleteUser)

userRouter.post('/login', login)

userRouter.put('/:id', validateToken , updateUser)


module.exports = userRouter