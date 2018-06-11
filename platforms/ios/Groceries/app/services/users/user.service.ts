import {Injectable} from '@angular/core';
import {Http,Headers,Response} from '@angular/http';
import {User} from '../../shared/user/user';
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()

export class UserService{
    info: any;

    constructor(private http: Http){

    }

register(user: User) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let creds = JSON.stringify({
        "username": user.email,
        "password": user.password,
        "email": user.email
    });
    return  this.http
    .post('http://localhost:5000/users', creds, {headers:headers});
    //   .subscribe(
    //       data => {alert('ok');}, 
    //       error => {console.log(error.json());
    //   });
    
}

login(user: User){
     let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let creds = JSON.stringify({
        "username": user.email,
        "password": user.password,
        
    });
    return  this.http
    .post('http://localhost:5000/login', creds, {headers:headers})
    .map(response => response.json())
    .do( data => {data.data.responseCode;});
          
    
}

}