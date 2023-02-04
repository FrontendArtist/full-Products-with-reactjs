 import {React , useContext } from 'react'
import { Link } from 'react-router-dom';
 import "./Product.scss"
 import  {cartContext}  from '../../context/CartContextProvider';
import { isInCart ,quantityCounter } from '../helper/functions';
 function Product({productData}) {
  
  const {state , dispatch}  =  useContext(cartContext);

   return (
     <div className='card'>
      <div className='card__image' >
        <img className='image' alt={productData.title} src={productData.thumbnail}/>
      </div>
        <div className='card__content'>
            <h3 className='card__title'>{productData.title}</h3>
            <p className='card__price'>{productData.price}$</p>
        </div>
                <div className='card__ux'>
                    <Link to={`/products/${productData.id}`} className='card__details'>Details</Link>
                    <div className='card__buy'>
                  
                        {
                          quantityCounter(state , productData.id) === 1 && <button onClick={() => dispatch({type : "REMOVE_ITEM" , payload : productData})} className='card__remove-button'>remove</button>
                        }
                        {
                          quantityCounter(state , productData.id) > 1 && <button onClick={() => dispatch({type : "DECREASE" , payload : productData})} className='card__remove-button'>-</button>
                        }
                            
                    {
                      quantityCounter(state , productData.id) >= 1 && 
                        <p className='card__counter'>
                        {quantityCounter(state , productData.id)}
                        </p>
                    }
                        {
                          isInCart(state , productData.id)?
                          <button onClick={() => dispatch({type : "INCREASE" , payload : productData})} className='card__buy-button'>+</button>
                          :<button onClick={() => dispatch({type : "ADD_ITEM" , payload : productData})} className='card__buy-button'>add to cart</button>
                        }
                        
                    </div>
                </div>
             
     </div>
   )
 }
 
 export default Product;
