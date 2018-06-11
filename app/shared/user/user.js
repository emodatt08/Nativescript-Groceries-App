"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emailValid = require('email-validator');
var User = (function () {
    function User() {
    }
    User.prototype.isValidEmail = function () {
        return emailValid.validate((this.email));
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxJQUFJLFVBQVUsR0FBSSxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUM3QztJQUFBO0lBT0EsQ0FBQztJQUhJLDJCQUFZLEdBQVo7UUFDSSxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDTixXQUFDO0FBQUQsQ0FBQyxBQVBELElBT0M7QUFQWSxvQkFBSSIsInNvdXJjZXNDb250ZW50IjpbIlxuXG52YXIgZW1haWxWYWxpZCA9ICByZXF1aXJlKCdlbWFpbC12YWxpZGF0b3InKTtcbmV4cG9ydCBjbGFzcyBVc2Vye1xuICAgICBlbWFpbCA6c3RyaW5nO1xuICAgICBwYXNzd29yZDogc3RyaW5nXG5cbiAgICAgaXNWYWxpZEVtYWlsKCl7XG4gICAgICAgICByZXR1cm4gZW1haWxWYWxpZC52YWxpZGF0ZSgodGhpcy5lbWFpbCkpO1xuICAgICB9XG59Il19