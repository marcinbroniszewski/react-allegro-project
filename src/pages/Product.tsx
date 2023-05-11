import React from 'react'
import ProductLayout from '../components/Product/ProductLayout'

export default function ProductPage() {
  return (
    <ProductLayout />
  )
}

export const loader = async ({params}: any) => { 

    const response = await fetch(`https://allegro-642ad-default-rtdb.europe-west1.firebasedatabase.app/categories/${params.categoryId}/${params.subcategoryId}/${params.subcategoryId2}/${params.product}.json`)
    
    
    return response
     }