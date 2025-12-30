"use client"
import Titlebar from '@/components/Titlebar'
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function Page() {
  const searchParams = useSearchParams()
  const productName = searchParams.get('productName')
  const productPrice = searchParams.get('productPrice')
  return (
    <div>
      <Titlebar title="Product" />
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="bg-white shadow-xl rounded-lg p-8 min-w-[320px] text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{productName}</h1>
          <p className="text-blue-600 text-xl font-semibold mb-2">
            {productPrice ? `$${parseFloat(productPrice).toFixed(2)}` : null}
          </p>
        </div>
      </div>
    </div>
  )
}
