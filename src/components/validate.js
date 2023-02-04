export const validate = data => {

    const errors = {};

    if (!data.name.trim()) {
        errors.name = "Username required"
    }else if (data.name.trim().length < 3){
        errors.name = "Enter a valid name"
    }
    else{
        delete errors.name;
    }
    
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
    
    if (!data.confirmPass) {
        errors.confirmPass = "Confirm the password"
    }else if (data.confirmPass !== data.password) {
        errors.confirmPass = "Passwords must match"
    }else {
        delete errors.confirmPass
    }

    if (data.checkBox) {
        delete errors.checkBox
    }else{
        errors.checkBox = "Accept our regulations"
    }

    return errors ;
}
