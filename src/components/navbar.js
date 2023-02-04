import {React,useContext} from 'react'
import  {Link}  from 'react-router-dom'
import sabad from "./sabad.png"
import "./navbar.scss"
import  { cartContext } from '../context/CartContextProvider'

  

function Navbar() {
  
  const {state} = useContext(cartContext);

  return (
    <div className='navbar'>
    <h1 className='navbar__logo'>AD WEB</h1>
    <ul className='navbar__items'>
       <li className='navbar__item'><Link to="/shopcarts">
        <img width='23px' src={sabad} alt='xs'/>
        <span>{state.itemsCounter}</span>
       </Link></li> 
       <li className='navbar__item'><Link to="/products">Products</Link></li> 
        <li className='navbar__item'><Link to="/signup">Sign up</Link></li> 
    </ul>
    </div>
  )
}

export default Navbar