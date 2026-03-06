const customer = require('../models/customerSchema')

const getCustomers = async (req, res) => {

    try {

        const customers = await customer.find()
        res.status(200).json(customers)

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Error fetching customers",
            error: error.message
        })

    }
}

const createCustomer = async (req, res) => {

    try {

        const { email } = req.body

        const existingCustomer = await customer.findOne({ email })

        if (existingCustomer) {

            return res.status(409).json({
                message: "Customer already exists"
            })

        }

        const Customer = new customer(req.body)

        await Customer.save()

        res.status(201).json({
            success: true,
            customer: Customer,
            message: "Customer created successfully"
        })

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Failed to create customer",
            error: error.message
        })

    }
}

const customerID = async (req, res) => {

    try {

        const { id } = req.params

        const Customer = await customer.findById(id)

        if (!Customer) {

            return res.status(404).json({
                success: false,
                message: "Customer not found"
            })

        }

        res.status(200).json({
            success: true,
            customer: Customer,
            message: "Customer fetched successfully"
        })

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Failed to fetch customer",
            error: error.message
        })

    }
}

const deleteCustomer = async (req, res) => {

    try {

        const { id } = req.params

        const data = await customer.findByIdAndDelete(id)

        if (!data) {

            return res.status(404).json({
                success: false,
                message: "Customer not found"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Customer deleted successfully"
        })

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Failed to delete customer",
            error: error.message
        })

    }
}

const updateCustomer = async (req, res) => {

    try {

        const { id } = req.params

        const data = req.body

        const update = await customer.findByIdAndUpdate(
            id,
            data,
            {
                new: true,
                runValidators: true
            }
        )

        if (!update) {

            return res.status(404).json({
                success: false,
                message: "Customer not found"
            })

        }

        return res.status(200).json({
            success: true,
            customer: update,
            message: "Customer updated successfully"
        })

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Failed to update customer",
            error: error.message
        })

    }
}

module.exports = { getCustomers, createCustomer, customerID, deleteCustomer, updateCustomer }