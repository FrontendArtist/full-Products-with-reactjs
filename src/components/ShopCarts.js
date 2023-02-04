import {React , useContext} from 'react'
import { Link } from 'react-router-dom';
import { cartContext } from '../context/CartContextProvider'
import ShopCart from './shared/ShopCart';
import "./ShopCarts.scss"

function ShopCarts() {

  const wantBuy  = useContext(cartContext);
  const {state , dispatch} = wantBuy
  return (
    <div className='shop-carts' >
      
      <div className='shop-carts__carts' >
        {state.selectedItems.map(item=><ShopCart key={item.id} data={item} />)}
       </div>
          <div className='shop-carts__pay-cart'>
            <div className='shop-carts__price'>
              <p className='shop-carts__p'>Total Items: {state.itemsCounter}</p>
              <p className='shop-carts__p'>Total Payments: {state.total} $</p>
            </div>
           { state.itemsCounter > 0 &&
           <div className='shop-carts__buttons'>
              <button className='shop-carts__button-clear' onClick={() => dispatch({type : "CLEAR"})}>Clear</button>
              <button className='shop-carts__button-checkout' onClick={() => dispatch({type : "CHECKOUT"})}>Checkout</button>

            </div>
            }
            {
              state.checkout &&
              <div className='shop-carts__checkedout'>
                <h1>checked out</h1>
                <Link to="/products">buy more</Link>
                </div>
            }
            {
              !state.checkout && state.itemsCounter === 0 && 
              <div className='shop-carts__empty'>
                <h3 >do you want buy product ?</h3>
                <Link to="/products">buy</Link>
              </div>
            }
          </div>

      </div>
    
  )
}

export default ShopCarts;