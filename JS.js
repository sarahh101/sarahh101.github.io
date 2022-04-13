/*
    Student Name: Sarah Haque
    Student ID: 121172217
    Email: shaque27@myseneca.ca
    WEB222 NHH
    FINAL ASSESSMENT 
*/



function validate(form) {
    return valid(form);
}

function valid(form){
    var pcode = form.postal.value;
    if(/[A-Za-z][0-9][A-Za-z] [0-9][Aa-Za-z][0-9]/.test(pcode)) {
        clearError("postal","pcode");
        return true;
    }

    else
    {
        errorMessage= "The Postal code is in the format XXX XXX or XXXXXX";
        displayError("postal", "pcode", errorMessage);
        return false;
    }
}
 
function rate() {
    
    document.getElementById("hourlyrate").style.visibility = "visible";
    document.getElementById("p-rate").style.visibility = "visible";

}