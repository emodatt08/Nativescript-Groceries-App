import {Component, ElementRef, ViewChild, OnInit} from "@angular/core";
import {User} from "../../shared/user/user";
import {Router} from "@angular/router";
import {UserService} from "../../services/users/user.service";
import {Page} from 'ui/page';
import {Color} from 'color';
import { View } from "ui/core/view";
@Component({
    selector:"login",
    templateUrl: "./pages/login/login.html",
    styleUrls:["/pages/login/login.ios.css", "pages/login/login-common.css"],
    providers: [UserService]
})


export class LoginComponent implements OnInit{
    isLoggingIn = false;
    @ViewChild("container") container: ElementRef;
    public title: string;
    public responseCode;
    user: User;

    constructor(private router: Router, private userServ : UserService, private page : Page){
        this.title = "login";
        this.user = new User();
        this.responseCode= [];
        this.user.email = "emodatt08gmail.com";
        this.user.password = "foolishguy";
        
    }

    submit(){
        if(!this.user.isValidEmail()){
            alert("please enter a valid email address");
        }

        if(this.isLoggingIn){
            this.login();
        }else{
            this.signUp();
        }
    }

    login() {
         this.responseCode = this.userServ.login(this.user)
          .subscribe(
      (data) => ((data.data.responseCode == "00")) ? this.router.navigate(["list"]) : alert("Your credentials could not be found"),
      (error) => alert("Unfortunately we could not find your account.")
            );    

    }
    

    signUp(){
        this.userServ.register(this.user)  
         .subscribe(
      () => {
        alert("Your account was successfully created.");
        this.toggleDisplay();
      },
      () => alert("Unfortunately we were unable to create your account.")
         );

    }

    toggleDisplay(){
         this.isLoggingIn = !this.isLoggingIn;
         let container = <View>this.container.nativeElement;

         container.animate({
            backgroundColor: this.isLoggingIn ? new Color("white") : new Color("#301217"),
            duration: 200,
         });
         
    }

    ngOnInit(){
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://bg_login";
    }
   
}