import React from 'react'
import Button from './Button';
import { useNavigate } from 'react-router';

type ProductItemProps = {
    id: number;
    image: string;
    name: string;
    price: number;
}

const ProductItem = ({ image, name, price, id }: ProductItemProps) => {

  const navigate = useNavigate();

  return (
    <div>
        <img src={image} className='w-[350px] object-cover rounded-md' alt={name} />
        <h2 className='text-lg font-bold'>{name}</h2>
        <p>${price}</p>
        <div onClick={() => navigate(`/products/${id}`)}>
          <Button buttonName='Buy Now' />
        </div>
    </div>
  )
}

export default ProductItem