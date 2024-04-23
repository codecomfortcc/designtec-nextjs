import React from 'react'
import ProductSidebar from './_components/productSidebar'

const ProductLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='flex w-full md:flex-row flex-col '>
    <div className='md:w-72 p-2 w-full '><ProductSidebar/></div>
    <div className='grow'>{children}</div>
    </div>
  )
}

export default ProductLayout
