import { NgModule } from "@angular/core";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { routes, navigatableComponents } from "./app.routing";

import { AppComponent } from "./app.component";
import {LoginComponent} from "../app/pages/login/login.component";
import {ListComponent} from "../app/pages/list/list.component";
import {UserService} from "../app/services/users/user.service";
import {GroceryListService} from '../app/shared/grocery/grocery-list.service';

@NgModule({
  imports: [NativeScriptModule,  
  NativeScriptFormsModule,
  NativeScriptHttpModule,
  NativeScriptRouterModule,
  NativeScriptRouterModule.forRoot(routes)],

  declarations: [AppComponent, LoginComponent, ListComponent],

  bootstrap: [LoginComponent],

  providers: [UserService, GroceryListService]
})
export class AppModule {}
