const Case = require('../models/casesSchema')

const getCases = async (req, res) => {

    try {

        const cases = await Case.find()
        res.status(200).json(cases)
    } catch (error) {

        res.status(500).json({ message: 'Error fetching cases' })


    }
}

const createCases = async (req, res) => {

    try {

        const cases = new Case(req.body)
        await cases.save()
        res.status(201).json({ Case: cases, message: "Case created successfully" })


    } catch (error) {

        res.status(500).json({
            success: false,
            error: error.message,
            message: "Failed to create cases"
        })


    }
}

const casesID = async (req, res) => {

    try {

        const { id } = req.params

        const cases = await Case.findById(id)
        if (!cases) {
            return res.status(404).json({

                success: false,
                message: "Case not found"
            })
        }

        res.status(200).json({
            success: true,
            Case: cases,
            message: "Case fetched successfully"

        })
    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Failed to fetch case",
            error: error.message
        })


    }
}


const deleteCases = async (req, res) => {

    try {

        const { id } = req.params

        const data = await Case.findByIdAndDelete(id)

        if (!data) {

            return res.status(404).json({

                success: false,
                message: "Case not found"
            })

        }

        return res.status(200).json({

            success: true,
            message: "Case deleted successfully"
        })



    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
            message: "Failed to delete case"
        })


    }
}


const updateCases = async (req, res) => {

    try {

        const { id } = req.params

        const data = req.body

        const update = await Case.findByIdAndUpdate(
            id, data, {
            new: true,
            runvalidates: true,
        })

        if (!update) {

            return res.status(404).json({

                success: false,
                message: "Case not found"
            })

        }

        return res.status(201).json({

            success: true,
            Case: update,
            message: "Case updated successfully"
        })



    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
            message: "Failed to update case"
        })


    }
}



module.exports = { getCases, createCases, casesID, deleteCases, updateCases }