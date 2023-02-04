import React , {useState , useEffect} from 'react';
import {validate} from './validate';
import "./signUp.scss"
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [data , setData] = useState({
        name : "" ,
        email : "",
        password : "",
        confirmPass : "",
        checkBox : false 
    });
    const [errors , setErrors] = useState({});
    const [touched , setTouched] = useState({});
    
    
    useEffect(()=>{
        setErrors(validate(data))
        console.log(errors);

    },[data]);
    const changeHandler = event => { 
        if (event.target.name === "checkBox") {
            setData({...data , [event.target.name] : event.target.checked})

        }else
        setData({...data , [event.target.name] : event.target.value})
        console.log(data);
    }
    const focusHandler = event =>{

        setTouched(
            {...touched , [event.target.name] : true}
        )
        console.log(touched);
    }
    const SignUpHandler = event =>{
        event.preventDefault()
         
        if (Object.keys(errors).length === 0) {
           // console.log("signed Up")
            
                if (!localStorage.getItem(data.email)) {
                    console.log("signed up");
                localStorage.setItem(`${data.email}` , JSON.stringify(data));
                console.log(localStorage.getItem(data.email));
                
                }else{
                    setErrors({
                        email : "email exist"
                    })
                    setTouched ({
                        email : true
                    })
                }
        } else {
            console.log(`${Object.values(errors)} `)
            setTouched({
                name : true , 
                email : true , 
                password : true , 
                confirmPass : true , 
                checkBox : true
            })
        }
        
        
    }
   
  return (
    <div className='signUp'>
        <form className='signUp-form'>
            <h2 className='signUp-form__header'>Sign Up</h2>
            <div className='signUp-form__content'>
                <label className='signUp-form__label'>name</label>
                <input className={(errors.name && touched.name) ? "signUp-form__input signUp-form__input--onError" : "signUp-form__input" } type="text" name="name" value={data.name} onChange={changeHandler} onBlur={focusHandler}/>
                {errors.name && touched.name &&  <span className='signUp-form__error'>{errors.name}</span>}
            </div>
            <div className='signUp-form__content'>
                <label className='signUp-form__label'>email</label>
                <input className={(errors.email && touched.email) ? "signUp-form__input signUp-form__input--onError" : "signUp-form__input" } type="text" name="email" value={data.email} onChange={changeHandler} onBlur={focusHandler}/>
                {errors.email&& touched.email && <span  className='signUp-form__error'>{errors.email}</span>}
            </div>
            <div className='signUp-form__content'>
                <label className='signUp-form__label'>password</label>
                <input className={(errors.password && touched.password) ? "signUp-form__input signUp-form__input--onError" : "signUp-form__input" } type="password" name="password" value={data.password} onChange={changeHandler} onBlur={focusHandler}/>
                {errors.password&& touched.password && <span className='signUp-form__error'>{errors.password.split(",").map((ev)=><span>{ev}<br/></span>)}</span>}
            </div>
            <div className='signUp-form__content'>
                <label className='signUp-form__label'>confirm password</label>
                <input className={(errors.confirmPass && touched.confirmPass) ? "signUp-form__input signUp-form__input--onError" : "signUp-form__input" } type="password" name="confirmPass" value={data.confirmPass} onChange={changeHandler} onBlur={focusHandler}/>
                {errors.confirmPass && touched.confirmPass && <span className='signUp-form__error'>{errors.confirmPass}</span>}
            </div>
            <div className='signUp-form__content'>
                <div>
                <label className='signUp-form__label'>i accept terms of privacy policy</label>
                <input className='signUp-form__checkBox' type="checkBox" name="checkBox" value={data.checkBox} onChange={changeHandler} onBlur={focusHandler}/>
                </div>
                {errors.checkBox && touched.checkBox &&  <span className='signUp-form__error'>{errors.checkBox}</span>}
            </div>
            <div className='signUp-form__buttons' >
                <Link className='signUp-form__logIn' to="/login" >Log in</Link>
                <button  className='signUp-form__signUp' onClick={SignUpHandler}>Sign up</button>
            </div>
            
        </form>
    </div>
  )
}

export default SignUp