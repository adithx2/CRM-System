import { useEffect, useState } from "react"
import { getCustomers } from "../services/customerApi"

function Customers() {

 const [customers,setCustomers] = useState([])

 useEffect(()=>{

  fetchCustomers()

 },[])

 const fetchCustomers = async()=>{

  try{

   const data = await getCustomers()
   setCustomers(data)

  }catch(error){

   console.log(error)

  }

 }

 return(

  <div className="p-6">

   <div className="flex justify-between items-center mb-6">

    <h1 className="text-2xl font-bold">
     Customers
    </h1>

   </div>

   <div className="bg-white shadow rounded">

    <table className="w-full">

     <thead className="bg-gray-100">

      <tr>
       <th className="p-3 text-left">Name</th>
       <th className="p-3 text-left">Email</th>
       <th className="p-3 text-left">Phone</th>
      </tr>

     </thead>

     <tbody>

      {customers.map((customer)=>(
       
       <tr key={customer._id} className="border-t">

        <td className="p-3">{customer.name}</td>
        <td className="p-3">{customer.email}</td>
        <td className="p-3">{customer.phone}</td>

       </tr>

      ))}

     </tbody>

    </table>

   </div>

  </div>

 )

}

export default Customers