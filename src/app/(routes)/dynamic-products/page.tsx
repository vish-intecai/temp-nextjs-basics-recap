"use client"
import DynamicProductCard from '@/components/DynamicProductCard'
import ProductCard from '@/components/ProductCard'
import Titlebar from '@/components/Titlebar'
import { ProductType } from '@/types/global.types'
import React, { useState } from 'react'

export default function Page() {

  const [ products, setProducts ] = useState<ProductType[]>([{
    id: 1,
    productName: "Product 1",
    productPrice: 100,
  }, {
    id: 2,
    productName: "Product 2",
    productPrice: 200,
  }, {
    id: 3,
    productName: "Product 3",
    productPrice: 300,
  }])

  return (
    <div>
      <Titlebar title="Dynamic Products" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {
        products.map((product: ProductType) => (
            <DynamicProductCard key={product.id} productName={product.productName} productPrice={product.productPrice} productId={product.id} />
          ))
        }
      </div>
    </div>
  )
}
