import React from 'react'
import {Link} from "react-router-dom";

type Props = {}

const Home = (props: Props) => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <h2 className='text-3xl'>Welcome to products App</h2>
        <Link to="/products" className='border px-10 py-5 rounded-md mt-3 cursor-pointer hover:bg-black hover:text-white'>
            See All Products
        </Link>
    </div>
  )
}

export default Home