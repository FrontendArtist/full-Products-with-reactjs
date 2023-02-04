import React ,{ useContext} from 'react'
import { ProductsContext } from '../context/ProductContextProvider' 
import './productDetails.scss'
const ProductDetails = (props) => {



    const id = props.match.params.id;
    const data = useContext(ProductsContext);
    const Product = data[id - 1];
    console.log(data[id]);
    const {images , title, rate , description ,brand ,  price , category} = Product;


  return (
    <div className='product'>
        <div className='product__img'>
            <img className='product__image'  src={images[0]} alt="sdf" ></img>
        </div>
        
        <div className='product__details'>
          <div className='product__head'>
          <h1 className='product__title'>{title}</h1>
          <h2 className='product__rate'>{rate}</h2>
          </div>
          <div className='product__mid' >
            <p className='product__description'>{description}</p>
            <div className='product__intro'>
              <h3 className='product__h'>{brand}</h3>
              <h3 className='product__h'>{category}</h3>
              <h3 className='product__h'>{price}$</h3>
            </div>    
          </div>
          <div className='product__foot'>
            <button >back</button>
          </div>
        </div>
    </div>
    
  )
}

export default ProductDetails