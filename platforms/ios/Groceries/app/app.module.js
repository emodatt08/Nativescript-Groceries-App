"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("nativescript-angular/http");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var router_1 = require("nativescript-angular/router");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var login_component_1 = require("../app/pages/login/login.component");
var list_component_1 = require("../app/pages/list/list.component");
var user_service_1 = require("../app/services/users/user.service");
var grocery_list_service_1 = require("../app/shared/grocery/grocery-list.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            http_1.NativeScriptHttpModule,
            router_1.NativeScriptRouterModule,
            router_1.NativeScriptRouterModule.forRoot(app_routing_1.routes)],
        declarations: [app_component_1.AppComponent, login_component_1.LoginComponent, list_component_1.ListComponent],
        bootstrap: [login_component_1.LoginComponent],
        providers: [user_service_1.UserService, grocery_list_service_1.GroceryListService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsa0RBQW1FO0FBQ25FLGdGQUE4RTtBQUM5RSxvREFBcUU7QUFDckUsc0RBQXVFO0FBQ3ZFLDZDQUE4RDtBQUU5RCxpREFBK0M7QUFDL0Msc0VBQWtFO0FBQ2xFLG1FQUErRDtBQUMvRCxtRUFBK0Q7QUFDL0QsbUZBQThFO0FBZTlFLElBQWEsU0FBUztJQUF0QjtJQUF3QixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBQXpCLElBQXlCO0FBQVosU0FBUztJQWJyQixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyx3Q0FBa0I7WUFDNUIsK0JBQXVCO1lBQ3ZCLDZCQUFzQjtZQUN0QixpQ0FBd0I7WUFDeEIsaUNBQXdCLENBQUMsT0FBTyxDQUFDLG9CQUFNLENBQUMsQ0FBQztRQUV6QyxZQUFZLEVBQUUsQ0FBQyw0QkFBWSxFQUFFLGdDQUFjLEVBQUUsOEJBQWEsQ0FBQztRQUUzRCxTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO1FBRTNCLFNBQVMsRUFBRSxDQUFDLDBCQUFXLEVBQUUseUNBQWtCLENBQUM7S0FDN0MsQ0FBQztHQUNXLFNBQVMsQ0FBRztBQUFaLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IHJvdXRlcywgbmF2aWdhdGFibGVDb21wb25lbnRzIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtMb2dpbkNvbXBvbmVudH0gZnJvbSBcIi4uL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7TGlzdENvbXBvbmVudH0gZnJvbSBcIi4uL2FwcC9wYWdlcy9saXN0L2xpc3QuY29tcG9uZW50XCI7XG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tIFwiLi4vYXBwL3NlcnZpY2VzL3VzZXJzL3VzZXIuc2VydmljZVwiO1xuaW1wb3J0IHtHcm9jZXJ5TGlzdFNlcnZpY2V9IGZyb20gJy4uL2FwcC9zaGFyZWQvZ3JvY2VyeS9ncm9jZXJ5LWxpc3Quc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRNb2R1bGUsICBcbiAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXG4gIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG5cbiAgZGVjbGFyYXRpb25zOiBbQXBwQ29tcG9uZW50LCBMb2dpbkNvbXBvbmVudCwgTGlzdENvbXBvbmVudF0sXG5cbiAgYm9vdHN0cmFwOiBbTG9naW5Db21wb25lbnRdLFxuXG4gIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlLCBHcm9jZXJ5TGlzdFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuIl19