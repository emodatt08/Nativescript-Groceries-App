"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../../shared/user/user");
var router_1 = require("@angular/router");
var user_service_1 = require("../../services/users/user.service");
var page_1 = require("ui/page");
var color_1 = require("color");
var LoginComponent = (function () {
    function LoginComponent(router, userServ, page) {
        this.router = router;
        this.userServ = userServ;
        this.page = page;
        this.isLoggingIn = false;
        this.title = "login";
        this.user = new user_1.User();
        this.responseCode = [];
        this.user.email = "emodatt08gmail.com";
        this.user.password = "foolishguy";
    }
    LoginComponent.prototype.submit = function () {
        if (!this.user.isValidEmail()) {
            alert("please enter a valid email address");
        }
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.responseCode = this.userServ.login(this.user)
            .subscribe(function (data) { return ((data.data.responseCode == "00")) ? _this.router.navigate(["list"]) : alert("Your credentials could not be found"); }, function (error) { return alert("Unfortunately we could not find your account."); });
    };
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        this.userServ.register(this.user)
            .subscribe(function () {
            alert("Your account was successfully created.");
            _this.toggleDisplay();
        }, function () { return alert("Unfortunately we were unable to create your account."); });
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
        var container = this.container.nativeElement;
        container.animate({
            backgroundColor: this.isLoggingIn ? new color_1.Color("white") : new color_1.Color("#301217"),
            duration: 200,
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://bg_login";
    };
    return LoginComponent;
}());
__decorate([
    core_1.ViewChild("container"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "container", void 0);
LoginComponent = __decorate([
    core_1.Component({
        selector: "login",
        templateUrl: "./pages/login/login.html",
        styleUrls: ["/pages/login/login.ios.css", "pages/login/login-common.css"],
        providers: [user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService, page_1.Page])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXVFO0FBQ3ZFLCtDQUE0QztBQUM1QywwQ0FBdUM7QUFDdkMsa0VBQThEO0FBQzlELGdDQUE2QjtBQUM3QiwrQkFBNEI7QUFVNUIsSUFBYSxjQUFjO0lBT3ZCLHdCQUFvQixNQUFjLEVBQVUsUUFBc0IsRUFBVSxJQUFXO1FBQW5FLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFjO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTztRQU52RixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQU9oQixJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsb0JBQW9CLENBQUM7UUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDO0lBRXRDLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUEsQ0FBQztZQUMxQixLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQztRQUNoRCxDQUFDO1FBRUQsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBLENBQUM7WUFDakIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pCLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNGLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixDQUFDO0lBQ0wsQ0FBQztJQUVELDhCQUFLLEdBQUw7UUFBQSxpQkFPQztRQU5JLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNoRCxTQUFTLENBQ2QsVUFBQyxJQUFJLElBQUssT0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLHFDQUFxQyxDQUFDLEVBQWxILENBQWtILEVBQzVILFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxDQUFDLCtDQUErQyxDQUFDLEVBQXRELENBQXNELENBQzFELENBQUM7SUFFVixDQUFDO0lBR0QsK0JBQU0sR0FBTjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUMvQixTQUFTLENBQ2I7WUFDRSxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQztZQUNoRCxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxFQUNELGNBQU0sT0FBQSxLQUFLLENBQUMsc0RBQXNELENBQUMsRUFBN0QsQ0FBNkQsQ0FDL0QsQ0FBQztJQUVQLENBQUM7SUFFRCxzQ0FBYSxHQUFiO1FBQ0ssSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDckMsSUFBSSxTQUFTLEdBQVMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7UUFFbkQsU0FBUyxDQUFDLE9BQU8sQ0FBQztZQUNmLGVBQWUsRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksYUFBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksYUFBSyxDQUFDLFNBQVMsQ0FBQztZQUM3RSxRQUFRLEVBQUUsR0FBRztTQUNmLENBQUMsQ0FBQztJQUVSLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLGdCQUFnQixDQUFDO0lBQ2pELENBQUM7SUFFTCxxQkFBQztBQUFELENBQUMsQUFsRUQsSUFrRUM7QUFoRTJCO0lBQXZCLGdCQUFTLENBQUMsV0FBVyxDQUFDOzhCQUFZLGlCQUFVO2lEQUFDO0FBRnJDLGNBQWM7SUFSMUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBQyxPQUFPO1FBQ2hCLFdBQVcsRUFBRSwwQkFBMEI7UUFDdkMsU0FBUyxFQUFDLENBQUMsNEJBQTRCLEVBQUUsOEJBQThCLENBQUM7UUFDeEUsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztLQUMzQixDQUFDO3FDQVU4QixlQUFNLEVBQXFCLDBCQUFXLEVBQWlCLFdBQUk7R0FQOUUsY0FBYyxDQWtFMUI7QUFsRVksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyXCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3VzZXJzL3VzZXIuc2VydmljZVwiO1xuaW1wb3J0IHtQYWdlfSBmcm9tICd1aS9wYWdlJztcbmltcG9ydCB7Q29sb3J9IGZyb20gJ2NvbG9yJztcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjpcImxvZ2luXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wYWdlcy9sb2dpbi9sb2dpbi5odG1sXCIsXG4gICAgc3R5bGVVcmxzOltcIi9wYWdlcy9sb2dpbi9sb2dpbi5pb3MuY3NzXCIsIFwicGFnZXMvbG9naW4vbG9naW4tY29tbW9uLmNzc1wiXSxcbiAgICBwcm92aWRlcnM6IFtVc2VyU2VydmljZV1cbn0pXG5cblxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICAgIGlzTG9nZ2luZ0luID0gZmFsc2U7XG4gICAgQFZpZXdDaGlsZChcImNvbnRhaW5lclwiKSBjb250YWluZXI6IEVsZW1lbnRSZWY7XG4gICAgcHVibGljIHRpdGxlOiBzdHJpbmc7XG4gICAgcHVibGljIHJlc3BvbnNlQ29kZTtcbiAgICB1c2VyOiBVc2VyO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSB1c2VyU2VydiA6IFVzZXJTZXJ2aWNlLCBwcml2YXRlIHBhZ2UgOiBQYWdlKXtcbiAgICAgICAgdGhpcy50aXRsZSA9IFwibG9naW5cIjtcbiAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcbiAgICAgICAgdGhpcy5yZXNwb25zZUNvZGU9IFtdO1xuICAgICAgICB0aGlzLnVzZXIuZW1haWwgPSBcImVtb2RhdHQwOGdtYWlsLmNvbVwiO1xuICAgICAgICB0aGlzLnVzZXIucGFzc3dvcmQgPSBcImZvb2xpc2hndXlcIjtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgc3VibWl0KCl7XG4gICAgICAgIGlmKCF0aGlzLnVzZXIuaXNWYWxpZEVtYWlsKCkpe1xuICAgICAgICAgICAgYWxlcnQoXCJwbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5pc0xvZ2dpbmdJbil7XG4gICAgICAgICAgICB0aGlzLmxvZ2luKCk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5zaWduVXAoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvZ2luKCkge1xuICAgICAgICAgdGhpcy5yZXNwb25zZUNvZGUgPSB0aGlzLnVzZXJTZXJ2LmxvZ2luKHRoaXMudXNlcilcbiAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgKGRhdGEpID0+ICgoZGF0YS5kYXRhLnJlc3BvbnNlQ29kZSA9PSBcIjAwXCIpKSA/IHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImxpc3RcIl0pIDogYWxlcnQoXCJZb3VyIGNyZWRlbnRpYWxzIGNvdWxkIG5vdCBiZSBmb3VuZFwiKSxcbiAgICAgIChlcnJvcikgPT4gYWxlcnQoXCJVbmZvcnR1bmF0ZWx5IHdlIGNvdWxkIG5vdCBmaW5kIHlvdXIgYWNjb3VudC5cIilcbiAgICAgICAgICAgICk7ICAgIFxuXG4gICAgfVxuICAgIFxuXG4gICAgc2lnblVwKCl7XG4gICAgICAgIHRoaXMudXNlclNlcnYucmVnaXN0ZXIodGhpcy51c2VyKSAgXG4gICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgKCkgPT4ge1xuICAgICAgICBhbGVydChcIllvdXIgYWNjb3VudCB3YXMgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQuXCIpO1xuICAgICAgICB0aGlzLnRvZ2dsZURpc3BsYXkoKTtcbiAgICAgIH0sXG4gICAgICAoKSA9PiBhbGVydChcIlVuZm9ydHVuYXRlbHkgd2Ugd2VyZSB1bmFibGUgdG8gY3JlYXRlIHlvdXIgYWNjb3VudC5cIilcbiAgICAgICAgICk7XG5cbiAgICB9XG5cbiAgICB0b2dnbGVEaXNwbGF5KCl7XG4gICAgICAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XG4gICAgICAgICBsZXQgY29udGFpbmVyID0gPFZpZXc+dGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudDtcblxuICAgICAgICAgY29udGFpbmVyLmFuaW1hdGUoe1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLmlzTG9nZ2luZ0luID8gbmV3IENvbG9yKFwid2hpdGVcIikgOiBuZXcgQ29sb3IoXCIjMzAxMjE3XCIpLFxuICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcbiAgICAgICAgIH0pO1xuICAgICAgICAgXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKXtcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgICAgIHRoaXMucGFnZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInJlczovL2JnX2xvZ2luXCI7XG4gICAgfVxuICAgXG59Il19