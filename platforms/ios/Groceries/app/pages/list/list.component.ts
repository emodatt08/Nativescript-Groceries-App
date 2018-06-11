import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TextField} from "ui/text-field";
import { Grocery } from "../../shared/grocery/grocery";
import { GroceryListService } from "../../shared/grocery/grocery-list.service";
import * as SocialShare from "nativescript-social-share";



@Component({
    selector:'list',
    templateUrl: 'pages/list/list.html',
    styleUrls: ["pages/list/list-common.css", "pages/list/list.css"],
    providers: [GroceryListService]

})

export class ListComponent implements OnInit{
    groceryList: Array<Grocery> = [];
    grocery = "";
    isLoading = false;
    listLoaded = false;
    @ViewChild("groceryTextField") groceryTextfield: ElementRef;

    constructor(public groceryListService : GroceryListService){
        console.log("List component....");
    }

    ngOnInit(){
   this.groceryListService.load()
    .subscribe(loadedGroceries => {
      loadedGroceries.forEach((groceryObject) => {
        this.groceryList.unshift(groceryObject);
            });
            this.isLoading = false;
            this.listLoaded = true;
       });
    }

    addGrocery(){
        if(this.grocery.trim() === ""){
            alert("Please enter a grocery item");
            return;
        }

            let textField = <TextField>this.groceryTextfield.nativeElement;
                textField.dismissSoftInput();

                    this.groceryListService.add(this.grocery)
                         .subscribe(
                    groceryObject => {
                        this.groceryList.unshift(groceryObject);
                            this.grocery = "";
                    },
                        () => {
                            alert({
                            message: "An error occurred while adding an item to your list.",
                            okButtonText: "OK"
                         });
                            this.grocery = "";
                        }
    )


    }


    share(){
        let listString = this.groceryList.map(grocery => grocery.name).join(", ").trim();
        SocialShare.shareText(listString);
    }
}
