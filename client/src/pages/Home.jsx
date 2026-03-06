import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="max-w-5xl">

        <h1 className="text-4xl font-bold text-center mb-2 p-5">

            Hello there
        </h1>

        <h2 className="text-2xl font-bold text-center mb-2">


            Customer Relationship Management System
        </h2>

        <p className="text-gray-500 text-center mb-5">
          Manage customers and business relationships
        </p>

          {/* View Customers */}

          <div className="text-center">
            <h2 className="text-lg font-semibold mb-2">
              Customers
            </h2>

            <p className="text-gray-500 mb-4 text-sm">
              View all customers
            </p>

            <Link
              to="/dashboard"
              className="bg-blue-500 text-white m-2 px-8 py-2 rounded hover:bg-blue-600"
            >
              View
            </Link>

             <Link
              to="/about"
              className=" bg-blue-500 text-white m-2 px-8 py-2 rounded hover:bg-blue-600"
            >
              About
            </Link>

          </div>

        

      </div>

    </div>
  )
}

export default Home