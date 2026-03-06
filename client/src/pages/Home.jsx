import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="max-w-5xl">

        <h1 className="text-3xl font-bold text-center mb-2">

            Customer Relationship Management System
        </h1>

        <p className="text-gray-500 text-center mb-10">
          Manage customers and business relationships
        </p>


          {/* View Customers */}

          <div className="bg-white p-10 rounded-lg shadow hover:shadow-md transition text-center">
            <h2 className="text-lg font-semibold mb-2">
              Customers
            </h2>

            <p className="text-gray-500 mb-4 text-sm">
              View all customers
            </p>

            <Link
              to="/dashboard"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              View
            </Link>
          </div>

        

      </div>

    </div>
  )
}

export default Home