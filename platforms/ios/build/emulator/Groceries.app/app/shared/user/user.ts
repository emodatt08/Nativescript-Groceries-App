

var emailValid =  require('email-validator');
export class User{
     email :string;
     password: string

     isValidEmail(){
         return emailValid.validate((this.email));
     }
}