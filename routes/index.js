const express = require('express')
const passport = require('passport')

const routes = express.Router()

const { userRegister, userLogin } = require('../controller/auth')

const { addData, getAllData, getAllTransactionDescriptions, deleteTransaction } = require('../controller/index')

routes.post('/user/register', userRegister)

routes.post('/user/login', userLogin)

routes.post('/user/transaction', passport.authenticate('jwt', { session: false }), addData)

routes.get('/user/transaction', passport.authenticate('jwt', { session: false }), getAllData)

routes.get('/user/transactiondescription', passport.authenticate('jwt', { session: false }), getAllTransactionDescriptions)

routes.delete('/user/transactiondescription/:id', passport.authenticate('jwt', { session: false }), deleteTransaction)

module.exports = routes