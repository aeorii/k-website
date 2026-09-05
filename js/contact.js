function validateSignup(){
    var name=document.signup.fullname.value;
    var filter = /^([a-zA-Z])+$/;
    var validfullname = name.match(filter);

    if(validfullname == null){
        //alert("Invlaid");
        document.getElementById("signUpError").innerHTML="Your FullName is not valid. Only characters A-Z, a-z and '-' are  acceptable.";
        document.signup.fullname.focus();

        return false;
    }

      var mail=document.signup.email.value;
    var mailfilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-z0-9]{2,4})+$/;
    var validemail = mail.match(mailfilter);

    if(validemail == null){
        //alert("Invlaid");
        document.getElementById("signUpError").innerHTML="Your email is not valid.";
        document.signup.email.focus();

        return false;
    }


   
    return true;
  }

