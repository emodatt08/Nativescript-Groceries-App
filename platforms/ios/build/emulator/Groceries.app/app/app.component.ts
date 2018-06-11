import { Component } from "@angular/core";

@Component({
   selector: "main",
  template: "<page-router-outlet></page-router-outlet>"
})
export class AppComponent {
constructor(){
  console.log({"fats":"milk", "proteins":"eggs", "carbohydrates":"bread"});
}

}