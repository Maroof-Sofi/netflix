export const checkValidData = (email, password, name) =>{
   
     const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
     const isPasswordValid = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);
     const isName = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(name); 
        if(!isEmailValid) return 'Invalid Email Address';
        if(!isPasswordValid) return 'Invalid password';
        if(!isName) return 'Invalid Username';
        
        return null;
    };