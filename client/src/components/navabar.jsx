import { Link } from "react-router-dom"
import { useState } from "react"

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false)

    return (

        <nav className="bg-blue-400 text-white px-6 py-4">

            <div className="max-w-6xl mx-auto px-4">

                <div className="flex justify-between items-center h-14">

                    <h1 className="text-xl font-bold">
                        CRM System
                    </h1>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-6">

                        <Link to="/" className="hover:text-gray-200">
                            Home
                        </Link>

                        <Link to="/dashboard" className="hover:text-gray-200">
                            Dashboard
                        </Link>

                        <Link to="/about" className="hover:text-gray-200">
                            About
                        </Link>

                        <Link to="/login" className="hover:text-gray-200">
                            Login
                        </Link>

                        <Link to="/signup" className="hover:text-gray-200">
                            Signup
                        </Link>


                    </div>

                    <button
                        className="md:hidden text-xl"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        ☰
                    </button>

                </div>

            </div>

            {menuOpen && (

                <div className="md:hidden flex flex-col p-5 gap-4 pb-4">

                    <Link to="/">Home</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/about">About</Link>
                    <Link to="/login"></Link>
                     <Link to="/signup"></Link>


                </div>

            )}

        </nav>
    )
}

export default Navbar