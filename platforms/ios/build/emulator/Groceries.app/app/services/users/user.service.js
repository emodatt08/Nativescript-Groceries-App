"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.register = function (user) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        var creds = JSON.stringify({
            "username": user.email,
            "password": user.password,
            "email": user.email
        });
        return this.http
            .post('http://localhost:5000/users', creds, { headers: headers });
        //   .subscribe(
        //       data => {alert('ok');}, 
        //       error => {console.log(error.json());
        //   });
    };
    UserService.prototype.login = function (user) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        var creds = JSON.stringify({
            "username": user.email,
            "password": user.password,
        });
        return this.http
            .post('http://localhost:5000/login', creds, { headers: headers })
            .map(function (response) { return response.json(); })
            .do(function (data) { data.data.responseCode; });
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLHNDQUFvRDtBQUdwRCxnQ0FBOEI7QUFDOUIsaUNBQStCO0FBSS9CLElBQWEsV0FBVztJQUdwQixxQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFFOUIsQ0FBQztJQUVMLDhCQUFRLEdBQVIsVUFBUyxJQUFVO1FBQ2YsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDdkIsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ3RCLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN6QixPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDdEIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFFLElBQUksQ0FBQyxJQUFJO2FBQ2hCLElBQUksQ0FBQyw2QkFBNkIsRUFBRSxLQUFLLEVBQUUsRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQztRQUMvRCxnQkFBZ0I7UUFDaEIsaUNBQWlDO1FBQ2pDLDZDQUE2QztRQUM3QyxRQUFRO0lBRVosQ0FBQztJQUVELDJCQUFLLEdBQUwsVUFBTSxJQUFVO1FBQ1gsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM3QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDdkIsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ3RCLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUTtTQUU1QixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUUsSUFBSSxDQUFDLElBQUk7YUFDaEIsSUFBSSxDQUFDLDZCQUE2QixFQUFFLEtBQUssRUFBRSxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsQ0FBQzthQUM3RCxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2FBQ2hDLEVBQUUsQ0FBRSxVQUFBLElBQUksSUFBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDO0lBRzVDLENBQUM7SUFFRCxrQkFBQztBQUFELENBQUMsQUF4Q0QsSUF3Q0M7QUF4Q1ksV0FBVztJQUZ2QixpQkFBVSxFQUFFO3FDQUtpQixXQUFJO0dBSHJCLFdBQVcsQ0F3Q3ZCO0FBeENZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHR0cCxIZWFkZXJzLFJlc3BvbnNlfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7VXNlcn0gZnJvbSAnLi4vLi4vc2hhcmVkL3VzZXIvdXNlcic7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL1J4XCI7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcblxuQEluamVjdGFibGUoKVxuXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2V7XG4gICAgaW5mbzogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKXtcblxuICAgIH1cblxucmVnaXN0ZXIodXNlcjogVXNlcikge1xuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgbGV0IGNyZWRzID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBcInVzZXJuYW1lXCI6IHVzZXIuZW1haWwsXG4gICAgICAgIFwicGFzc3dvcmRcIjogdXNlci5wYXNzd29yZCxcbiAgICAgICAgXCJlbWFpbFwiOiB1c2VyLmVtYWlsXG4gICAgfSk7XG4gICAgcmV0dXJuICB0aGlzLmh0dHBcbiAgICAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL3VzZXJzJywgY3JlZHMsIHtoZWFkZXJzOmhlYWRlcnN9KTtcbiAgICAvLyAgIC5zdWJzY3JpYmUoXG4gICAgLy8gICAgICAgZGF0YSA9PiB7YWxlcnQoJ29rJyk7fSwgXG4gICAgLy8gICAgICAgZXJyb3IgPT4ge2NvbnNvbGUubG9nKGVycm9yLmpzb24oKSk7XG4gICAgLy8gICB9KTtcbiAgICBcbn1cblxubG9naW4odXNlcjogVXNlcil7XG4gICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgbGV0IGNyZWRzID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBcInVzZXJuYW1lXCI6IHVzZXIuZW1haWwsXG4gICAgICAgIFwicGFzc3dvcmRcIjogdXNlci5wYXNzd29yZCxcbiAgICAgICAgXG4gICAgfSk7XG4gICAgcmV0dXJuICB0aGlzLmh0dHBcbiAgICAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2xvZ2luJywgY3JlZHMsIHtoZWFkZXJzOmhlYWRlcnN9KVxuICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC5kbyggZGF0YSA9PiB7ZGF0YS5kYXRhLnJlc3BvbnNlQ29kZTt9KTtcbiAgICAgICAgICBcbiAgICBcbn1cblxufSJdfQ==