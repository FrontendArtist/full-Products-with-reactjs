export const loginValidate = data => {

    const errors = {};

   
    if (!data.email.trim()) {
        errors.email = "Email required"
    }else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email)){
        errors.email = "Enter a valid email"
    }else {
        delete errors.email
    }
    
    if (!data.password) {
        errors.password = "Password required"
    }else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(data.password)){
        errors.password = `at least 8 characters , 1 uppercase letter , 1 lowercase letter, and 1 number`
    }else{
        delete errors.password
    }
    

    return errors ;
}
