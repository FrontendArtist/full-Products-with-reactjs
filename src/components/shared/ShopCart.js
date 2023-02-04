import {React , useContext} from 'react'
import { cartContext } from '../../context/CartContextProvider'
import { isInCart ,quantityCounter } from '../helper/functions';
import './ShopCart.scss'

function ShopCart(props) {
    const {state , dispatch} = useContext(cartContext)
    const {thumbnail , title , price } = props.data;
      return (
    <div className='shop-cart'>
        <img className='shop-cart__image' src={thumbnail} alt='x'/>
        <div className='shop-cart__info'>
          <p className='shop-cart__title'>{title}</p>
          <p className='shop-cart__price'>{price}$</p>
        </div>
        <div className='shop-cart__buttons'>
        <div className='card__buy'>
                    {
                      quantityCounter(state , props.data.id) >= 1 && 
                        <p className='card__counter'>
                        {quantityCounter(state , props.data.id)}
                        </p>
                    }
                      
                        {
                          quantityCounter(state , props.data.id) === 1 && <button onClick={() => dispatch({type : "REMOVE_ITEM" , payload : props.data})} className='card__remove-button'>remove</button>
                        }
                        {
                          quantityCounter(state , props.data.id) > 1 && <button onClick={() => dispatch({type : "DECREASE" , payload : props.data})} className='card__remove-button'>-</button>
                        }
                        
                        {
                          isInCart(state , props.data.id)?
                          <button onClick={() => dispatch({type : "INCREASE" , payload : props.data})} className='card__buy-button'>+</button>
                          :<button onClick={() => dispatch({type : "ADD_ITEM" , payload : props.data})} className='card__buy-button'>add to cart</button>
                        }
                        
                    </div>
        </div>
      </div>
  )
}

export default ShopCart