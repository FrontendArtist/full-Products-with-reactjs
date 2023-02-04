import React , {useState , useEffect} from 'react';
import {loginValidate} from './loginValidate';
import { useHistory } from 'react-router-dom';
import "./signUp.scss"
import { useAlert } from 'react-alert';

const SignUp = () => {
    const hist = useHistory();
    const [data , setData] = useState({
        email : "",
        password : "",
    });
    const [errors , setErrors] = useState({});
    const [touched , setTouched] = useState({});
    
    
    useEffect(()=>{
        setErrors(loginValidate(data))
        console.log(errors);

    },[data]);
    const changeHandler = event => { 
        setData({...data , [event.target.name] : event.target.value})
        console.log(data);
    }
    const focusHandler = event =>{

        setTouched(
            {...touched , [event.target.name] : true}
        )
        console.log(touched);
    }
    const LogInHandler = event =>{
        event.preventDefault()
         
        if (Object.keys(errors).length === 0) {
            console.log(JSON.parse(localStorage.getItem(data.email)));
            if (localStorage.getItem(data.email)) {
                if(data.password === JSON.parse(localStorage.getItem(data.email))["password"]){
                   console.log("Loged in") 
                    
                     
                   hist.replace(`/profile/${JSON.parse(localStorage.getItem(data.email))["email"]}`)
                }

                    else{
                setErrors({password : "password is wrong"})
                setTouched({password  : true})
                
            }
            }else{
                setErrors({email : "email is wrong"})
                setTouched({email  : true})
            }

        } else {
            console.log(`${Object.values(errors)} `)
            setTouched({
                email : true , 
                password : true , 
            })
        }
        
        
    }
   
  return (
    <div className='signUp'>
        <form className='signUp-form'>
            <h2 className='signUp-form__header'>Log in</h2>

            <div className='signUp-form__content'>
                <lalbel className='signUp-form__label'>email</lalbel>
                <input className={(errors.email && touched.email) ? "signUp-form__input signUp-form__input--onError" : "signUp-form__input" } type="text" name="email" value={data.email} onChange={changeHandler} onBlur={focusHandler}/>
                {errors.email&& touched.email && <span  className='signUp-form__error'>{errors.email}</span>}
            </div>
            <div className='signUp-form__content'>
                <lalbel className='signUp-form__label'>password</lalbel>
                <input className={(errors.password && touched.password) ? "signUp-form__input signUp-form__input--onError" : "signUp-form__input" } type="password" name="password" value={data.password} onChange={changeHandler} onBlur={focusHandler}/>
                {errors.password&& touched.password && <span className='signUp-form__error'>{errors.password.split(",").map((ev)=><span>{ev}<br/></span>)}</span>}
            </div>

           
            <div className='signUp-form__buttons' >
                
                <button  className='signUp-form__signUp' onClick={LogInHandler}>Log in</button>
            </div>
            
        </form>
    </div>
  )
}

export default SignUp