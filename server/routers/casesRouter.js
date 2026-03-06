const express = require('express')
const casesRouter = require('express').Router()

const { getCases, createCases, casesID, deleteCases, updateCases } = require('../controllers/casesController')
casesRouter.get('/cases', getCases)

casesRouter.post('/cases', createCases)

casesRouter.get('/cases/:id', casesID)

casesRouter.delete('/cases/:id', deleteCases)
casesRouter.put('/cases/:id', updateCases)

module.exports = casesRouter