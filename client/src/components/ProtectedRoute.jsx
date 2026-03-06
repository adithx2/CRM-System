import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { checkUser } from '../services/userApi'

const ProtectedRoute = ({ children }) => {

    const [isAuthentication, setAuthentication] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {

        verifyUser()

    }, [])

    async function verifyUser() {

        try {

            const response = await checkUser()

            // Access cookies

             setAuthentication(true)

            console.log(response)

        } catch (error) {

            console.log(error)
            setAuthentication(false)
            navigate('/login')
        }
    }

    if (isAuthentication === null) {
        return <p>Checking Authentication..</p>

    }

    if (isAuthentication === false) {
        return null
    }

    return children

}

export default ProtectedRoute