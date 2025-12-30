"use client"
import { useRouter } from 'next/navigation'
import React from 'react'


export default function ProductCard({ productName, productPrice }: { productName: string, productPrice: number }) {
const router = useRouter()

const handleClick = () => {
    router.push(`/products/product?productName=${productName}&productPrice=${productPrice}`)
}

  return (
    <div onClick={handleClick} className="bg-white shadow rounded-lg p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-200">
      <h1 className="text-lg font-semibold text-gray-800 mb-2">{productName}</h1>
      <p className="text-blue-600 text-xl font-bold">{`$${productPrice.toFixed(2)}`}</p>
    </div>
  )
}
