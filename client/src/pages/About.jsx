import React from "react"

function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="max-w-3xl  p-8">

        <h1 className="text-3xl font-bold mb-4 text-center">
            
            CRM System

        </h1>

        <p className="text-gray-600 mb-4 text-center">
          This Customer Relationship Management (CRM) application helps
          businesses manage and organize customer information efficiently.
        </p>

        <div className="space-y-4 text-gray-700">

          <p>
            The system is developed using the <b>MERN Stack</b> which includes
            MongoDB, Express.js, React.js, and Node.js. It allows users to
            register, login, and manage customer data easily.
          </p>

        </div>

      </div>

    </div>
  )
}

export default About