/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { PRODUCTS } from '../constants/Products';
import { IProduct } from '../interfaces/Product';
import { BiArrowBack } from "react-icons/bi";
import Button from '../components/Button';

type Props = {}

const Product = (props: Props) => {

    

    const {id} = useParams();
    const [product, setProduct] = useState<IProduct>({
        _id: 0,
        image: "",
        name: "",
        price: 0,
        date_created: "",
        description: "",
        status: ""
    });

    const navigate = useNavigate();

    const getProduct = () => {
        const product: any = PRODUCTS.find((p: any) => p._id == id);
        console.log("product", product);
        setProduct(product);
    }

    useEffect(() => {
        getProduct();
    }, []);

  return (
    <div className='w-[80%] mx-auto mt-10'>
        
        <div onClick={() => navigate(-1)} className='mb-3 cursor-pointer flex items-center'>
            <BiArrowBack size={22} />
            <h2>Back</h2>
        </div>
        <div className="flex">
            <div className="flex-2">
                <img src={product.image} alt="" />
            </div>
            <div className="border py-3">
                <ul className='divide-y space-y-5'>
                    <li className='p-3'>Product Name: {product.name}</li>
                    <li className='p-3'>Product Price: {product.price}</li>
                    <li className='p-3'>Product Description: {product.description}</li>
                    <li className='p-3'>Created: {product.date_created}</li>
                    <li className='p-3'>Status: {product.status}</li>
                    <li>    </li>
                </ul>
                <div className="px-3">
                    <Button buttonName='Check Out' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product