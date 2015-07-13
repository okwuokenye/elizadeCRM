/*
 * This is a javascriptfile for all functions in the Elizade MobileCRM app
 */
$(document).ready(function() {
  //this is the function for customer login
$("#btnCustomerLogin").click( function(e){
    var user = $("#userName").val();
    var password = $("#password").val();
    
    if(user !== "" && password !== ""){
        //connect to crm and autthenticate user
        window.location.replace("customer/index.html");
    }else{
        alert('Invalid Login. Please check username/password')
    }
});

//this is the function for staff login
$("#btnStaffLogin").click( function(e){
    var user = $("#userName").val();
    var password = $("#password").val();
    
    if(user !== "" && password !== ""){
        //connect to crm and autthenticate user
        window.location.replace("staff/index.html");
    }else{
        alert('Invalid Login. Please check username/password')
    }
});
});
