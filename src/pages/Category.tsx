import React from 'react'
import CategoryContent from '../components/Category/CategoryContent'

export default function Category() {

  return (
    <CategoryContent />
  )
}


export const loader = async ({params}: any) => { 

const response = await fetch(`https://allegro-642ad-default-rtdb.europe-west1.firebasedatabase.app/categories/${params.categoryId}/${params.subcategoryId}/${params.subcategoryId2}.json`)


return response
 }