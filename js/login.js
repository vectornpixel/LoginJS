// TODO: Create Login with Username and Email match
// TODO: Create jSON with user object
// TODO: create condition to login and go to a page, if not show error
// TODO: Create validation
// CHANGES: Add JSON data and load with Ajax
$(document).ready(function(){
// User Object with properties
    var Person = {
    username: "ballinice",
    email: "vectornpixel@gmail.com"
    };
        $("#submit").click(function(){
// Grab the Form Fields and assign to a variable
            var username = $("#username").val();
            var email = $("#email").val();
// Check if the user login are correct, if so go to next screen
            if(username == Person.username && email == Person.email){
                alert("You are logged in");              
            }else{
                alert("wrong");
            }
        });
});



