import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUser } from '../services/userApi'

const SignUp = () => {

    const navigate = useNavigate()

    const [data, setData] = useState({ email: "", password: "" })

    const handleChange = (event) => {

        setData((prev) => ({ ...prev, [event.target.name]: event.target.value }))
    }

    const handleSubmit = async (event) => {

        event.preventDefault()

        try {

            // const response = await axios.post("http://localhost:3000/users/register",
            //     data, )

            await createUser(data)

            navigate('/login')
            console.log(response)

        } catch (error) {

            console.log(error, "Signup failed")
        }

    }


    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100'>

            <div className='bg-white p-8 rounded-2xl shadow-md w-full max-w-md'>

                <h1 className='text-2xl fornt-bold text-center text-gray-800 mb-6'>Signup</h1>
                <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-1'>

                        <label htmlFor="name" className='text-sm font-medium text-gray-600'>Name</label>

                        <input type="text"
                            name='name'
                            id='name'
                            className='border border-gray-300 rounded-lg px-4 py-2 
                                text-sm'

                            onChange={handleChange} />

                        <label htmlFor="email" className='text-sm font-medium text-gray-600'>Email</label>

                        <input type="text"
                            name='email'
                            id='email'
                            className='border border-gray-300 rounded-lg px-4 py-2 
                                text-sm'

                            onChange={handleChange} />


                        <label htmlFor="name" className='text-sm font-medium text-gray-600'>Password</label>

                        <input type="password"
                            name='password'
                            id='password'
                            className='border border-gray-300 rounded-lg px-4 py-2 
                            text-sm'
                            onChange={handleChange} />

                    </div>

                    <button type='submit' className='mt-2 bg-blue-500 hover:bg-blue-700
                         text-white py-2 rounded-lg transition
                          duration-200'>
                        Signup
                    </button>
                </form>
            </div>

        </div>
    )
}

export default SignUp