import React from 'react'
import { toast } from "react-toastify";

const Toaster = () => {
  return (
      <button className='bg-gray-800 text-white rounded-lg p-2' onClick={()=>toast("wow juda oson")}>Show</button>
  )
}

export default Toaster