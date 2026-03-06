const express = require('express')

const customerRouter = require('express').Router()

const { getCustomers, createCustomer, customerID, deleteCustomer, updateCustomer } = require('../controllers/customerController')
customerRouter.get('/customers', getCustomers)
customerRouter.post('/customers', createCustomer)
customerRouter.get('/customers/:id', customerID)
customerRouter.delete('/customers/:id', deleteCustomer)
customerRouter.put('/customers/:id', updateCustomer)

module.exports = customerRouter

