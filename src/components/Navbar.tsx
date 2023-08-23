import React from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {}

const Navbar = (props: Props) => {

  const navigate = useNavigate();

  return (
    <nav className='bg-black text-white py-5'>
      <div className="container mx-auto flex items-center justify-between">
        
        <h2 onClick={() => navigate("/")} className='cursor-pointer text-4xl'>Product App</h2>
        

          <ul>
              <li onClick={() => navigate("/products")} className='cursor-pointer text-base'>Products</li>
          </ul>
      </div>
    </nav>
  )
}

export default Navbar