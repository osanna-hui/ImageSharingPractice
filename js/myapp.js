var myApp = angular.module("ImageSharing", [
	"ngRoute",
	"AppController"
]);

myApp.config([
	"$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){

		$locationProvider.html5Mode(true);

		$routeProvider.when(
			"/all_img_title",
			{
				templateUrl: "view/all_img_title.html",
				controller:"TitlesControl"
			}
		).when(
			"/users",
			{
				templateUrl: "view/users.html"
			}
		).when(
			"/upload_img",
			{
				templateUrl: "view/upload_img.html"
			}
		).when(
			"/all_img",
			{
				templateUrl: "view/all_img.html",
				controller:"AllImgControl"
			}
		).when(
			"/img_by_user",
			{
				templateUrl: "view/img_by_user.html",
				controller:"UserImgControl"
			}
		).when(
			"/user_comment",
			{
				templateUrl: "view/user_comment.html",
				controller:"UserCommentsControl"
			}
		)
	}
]);