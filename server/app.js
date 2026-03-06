const express = require("express")

const cors = require('cors')
const cookieParser = require('cookie-parser')
const connectDB = require('./config/db')
const userRouter = require('./routers/userRouter')
const casesRouter = require("./routers/casesRouter")
const customerRouter = require("./routers/customerRouter")

require('dotenv').config()

connectDB()
const app = express()

app.use(cookieParser())
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }))

app.use(express.json())

app.use('/users', userRouter)
app.use('/cases', casesRouter)
app.use('/', customerRouter)

app.get('/', (req, res) => {

    res.send("Hello World")
})


port = process.env.PORT || 3000

app.listen(port, () => {

    console.log("Server started successfully")
})