
import{React, useContext}  from 'react'
import { ProductsContext } from '../context/ProductContextProvider';
import Product from './shared/Product';

  

function Products(productData) {

const prods = useContext(ProductsContext)


  return ( 
    <div style={{width: '100%',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    margin : "50px 0px",
    display: 'flex'}}>
      {prods.map(item=><Product key={item.id} productData={item}/>)}
    </div> 
  )
}

export default Products