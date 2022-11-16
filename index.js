function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }


}
function seterror(id, error){                                          //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm(){                                               //function 
    var returnval = true;                                                    
    clearErrors();

    var name = document.forms['myForm']["fname"].value;
    if (name.length<5){
        seterror("name","*Length of name is too short!!");
        returnval = false;
    }

    if (name.length<5){
        seterror("name", "*Length of name is too short!!");
        returnval = false;
    }

    var email = document.forms['myForm']["femail"].value;
    if (email.length>15){
        seterror("email", "*Enter correct email!!");
        returnval = false;
    } 
    var phone = document.forms['myForm']["fphone"].value;
    if (phone.length != 10){
        seterror("phone", "*Phone number should be of 10 digits!!");
        returnval = false;
    }

    var password = document.forms['myForm']["fpass"].value;
    if (password.length < 8){

        seterror("pass", "*Password should be atleast 8 characters long!!");
        returnval = false;
    }
    var cpassword = document.forms['myForm']["fcpass"].value;
    if (cpassword != password){
        seterror("cpass", "*Password not matched !!");
        returnval = false;
    }
    

    return returnval;
}