$(document).ready(function(){
// JSON to replace object properties
    $ajax.getJSON('users.json');
// User Object with properties
    var Person = {
    username: "ballinice",
    email: "vectornpixel@gmail.com"
    };
    var members = "http://www.mysite.com/members";
    
        $("#submit").click(function(){
// Grab the Form Fields and assign to a variable
            var username = $("#username").val();
            var email = $("#email").val();
             
// Check if the user login are correct, if so go to next screen
            if(username == Person.username && email == Person.email){
                   window.open(members);
            }else{
                alert("wrong");
            }
        });
});



