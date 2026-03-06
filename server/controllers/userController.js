const user = require('../models/userSchema')
const bcrypt = require('bcrypt')
const generateToken = require('../utils/generateToken')

const getUsers = async (req, res) => {

    try {

        const users = await user.find()
        res.status(200).json(users)
    } catch (error) {

        res.status(500).json({ message: 'Error fetching users' })


    }
}

const createUser = async (req, res) => {

    try {

        const { email, password, name, role } = req.body

        const saltRounds = 10;

        bcrypt.hash(password, saltRounds, async (err, hash) => {

            if (err) {

                res.status(500).json({ error: err.message })
            }
            var userItems = {

                name: name,
                email: email,
                password: hash,
                role: role
            }

            const User = new user(userItems)
            await User.save()
            res.status(201).json({ user: User, message: "User created" })
        })


    } catch (error) {

        res.status(500).json({ message: error.message })


    }
}

const userID = async (req, res) => {

    try {

        const { id } = req.params

        const User = await user.findById(id)
        if (!User) {
            return res.status(404).json({

                success: false,
                message: "User not found"
            })
        }

        res.status(200).json({
            success: true,
            user: User,
            message: "User fetched succesfully"

        })
    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Failed to fetch user",
            error: error.message
        })


    }
}


const deleteUser = async (req, res) => {

    try {

        const { id } = req.params

        const data = await user.findByIdAndDelete(id)

        if (!data) {

            return res.status(404).json({

                success: false,
                message: "User not found"
            })

        }

        return res.status(200).json({

            success: true,
            message: "User deleted successfully"
        })



    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
            message: "Failed to delete user"
        })


    }
}


const updateUser = async (req, res) => {

    try {

        const { id } = req.params

        const data = req.body

        const update = await user.findByIdAndUpdate(
            id, data, {
            new: true,
            runValidators: true
        })

        if (!update) {

            return res.status(404).json({

                success: false,
                message: "User not found"
            })

        }

        return res.status(201).json({

            success: true,
            user: update,
            message: "User updated successfully"
        })



    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
            message: "Failed to update user"
        })


    }
}

const login = async (req, res) => {

    try {

        if (!req.body) {

            return res.status(400).json({ error: "Login deatils cannot be empty" })
        }

        const { email, password } = req.body

        if ((!email) || (!password)) {

            return res.status(400).json({ error: "Email password are required " })
        }

        const User = await user.findOne({ email: email })
        if (!User) {
            return res.status(404).json({ message: "user not found" })
        }

        // Password validation will change later

        const isValid = await bcrypt.compare(password, User.password)
        if (!isValid) {

            return res.status(404).json({ message: "Invalid Password" })
        }

        console.log(isValid)

        // User is autheticated , create token

        let payload = { User: email, role: User.role }
        const token = generateToken(payload)
        res.cookie("token", token)
        res.status(200).json({ message: "Login successful" })

    } catch (error) {

        console.log(error)
        res.status(500).json({ error : error.message })
    }
}

const checkUser = async (req, res) => {

    return res.status(200).json({ message: "User validate" })
}



module.exports = { getUsers, createUser, userID, deleteUser, checkUser, updateUser, login }