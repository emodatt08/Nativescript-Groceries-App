import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';

import {Grocery} from "./grocery";

@Injectable()

export class GroceryListService{
    constructor(private http: Http){

          }


load(){
 let headers = new Headers();            
   headers.append("Authorization", "Bearer");
      return this.http.get("http://localhost:5000/grocery/", {
        headers: headers
            })
            .map(res => res.json())
            .map(data => {
                let groceryList = [];
                console.log(data.data.responseCode);
                 data.data.data.forEach((grocery) => {
                    groceryList.push(new Grocery(grocery._id, grocery.name));
                         });
                            return groceryList;
                             }) .catch(this.handleErrors);
        }
add(name: string) {
  let headers = new Headers();
  //headers.append("Authorization", "Bearer " + Config.token);
      headers.append("Content-Type", "application/json");

          return this.http.post(
                 "http://localhost:5000/grocery/add",
                  JSON.stringify({ Name: name }),
                        { headers: headers }
                     )
                .map(res => res.json())
                .map(data => { console.log("grocery data");
                   return new Grocery(data.data.data._id, data.data.data.name);
          }).catch(this.handleErrors);
}
        
        
        handleErrors(error: Response) {
           console.log(JSON.stringify(error.json()));
                 return Observable.throw(error);
  }
}

