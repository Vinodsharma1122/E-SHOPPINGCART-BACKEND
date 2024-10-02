function authenticate()
{
    var x=document.forms["psswdform"]["pss"].value;
    if(x=='Aditya' || x=='kuldeep' || x=='kunal' || x==1)
    {
        return true;
    }
    else{
        window.alert("Enter correct password");
        return false;
    }
}
