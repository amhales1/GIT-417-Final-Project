// Alex Hales | LoFi for Life JavaScript //
"use strict";

//Dark Mode Script

//change body, content div, and text color (light v. dark)//


//Product Gallery Switcher Script
//change status of product gallery between item1 - item5

//Game (Win a Song) Script
//display game information

//Contact Form Validation Script
function validateForm(e){       
    //prevent default form submission 
    e.preventDefault();
    
    //access the form itself and save in a variable
    let myForm = document.getElementById("myForm");
    
    //access all of the error spans to be used as error message holders
    let errorSpans = document.querySelectorAll(".message");
    
    //boolean variable used to track form validity
    let isValid = true;
    
    //reset display of the error inputs before validating
    myForm.myFirstName.classList.remove("errorInput");
    myForm.myLastName.classList.remove("errorInput");
    myForm.myEmail.classList.remove("errorInput");
    myForm.myPhone.classList.remove("errorInput");
    myForm.message.classList.remove("errorInput");
    
    //reset the display of the error message spans
    errorSpans.forEach(function(span){
    span.classList.remove("error");
    });
    
    //hide the success area on the page - this is what shows the user what they submitted in the form when submission is successful
    document.querySelector("#success").classList.remove("show");
    document.querySelector("#success").classList.add("hide");
    
    //regular expressions to validate first, last, email, and phone
    let myFirstNameRegex = /^[a-zA-Z ]{2,30}$/;
    let myLastNameRegex = /^[a-zA-Z ]{2,30}$/;
    let myEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let myPhoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    
    //validate user first name, it should not be blank and should match the userName regex
    if(myForm.myFirstName.Value === "" || !(myFirstNameRegex.test(myForm.myFirstName.value))){ //Blank Submission
      //on error, add the errorInput class to the input itself
      myForm.myFirstName.classList.add("errorInput");
      //on error, add the error class to the span associated with this input that has the message class
      errorSpans[0].classList.add("error");
      //set the form validation tracking variable to false
      isValid = false;
    }
    //validate user last name, it should not be blank and should match the regex
    if(myForm.myLastName.Value === "" || !(myLastNameRegex.test(myForm.myLastName.value))){ //Blank Submission
      //on error, add the errorInput class to the input itself
      myForm.myLastName.classList.add("errorInput");
      //on error, add the error class to the span associated with this input that has the message class
      errorSpans[1].classList.add("error");
      //set the form validation tracking variable to false
      isValid = false;
    }
    //validate Email, it should not be blank and should match regex
    if(myForm.myEmail.value === "" || !(myEmailRegex.test(myForm.myEmail.value))){
      //on error, add the errorInput class to the input itself
      myForm.myEmail.classList.add("errorInput");
      //on error, add the error class to the span associated with this input that has the message class
      errorSpans[2].classList.add("error");
      //set the form validation tracking variable to false
      isValid = false;
    }
    //validate Phone Number, it should not be blank and should match the zipCode regex
    if(myForm.myPhone.value === "" || !(myPhoneRegex.test(myForm.myPhone.value))){
      //on error, add the errorInput class to the input itself
      myForm.myPhone.classList.add("errorInput");
      //on error, add the error class to the span associated with this input that has the message class
      errorSpans[3].classList.add("error");
      //set the form validation tracking variable to false
      isValid = false;
    }
    //validate message, it should not be blank
    if(myForm.message.value === ""){
      //on error, add the errorInput class to the input itself
      myForm.message.classList.add("errorInput");
      //on error, add the error class to the span associated with this input that has the message class
      errorSpans[4].classList.add("error");
      //set the form validation tracking variable to false
      isValid = false;
    }
       
    //if the form is valid, submit it and reset
    if(isValid){
      //display the 'success' section to the user
      document.querySelector("#success").classList.remove("hide");
      document.querySelector("#success").classList.add("show");
      
      //display the user's input data (to show what they are sending to the server)
      let successP = document.getElementById("formSub");
      successP.innerHTML = "<strong>First Name: </strong>" + myForm.myFirstName.value + 
                           "<br><strong>Last Name: </strong>" + myForm.myLastName.value +
                           "<br><strong>Email Address: </strong>" + myForm.myEmail.value +
                           "<br><strong>Phone Number: </strong>" + myForm.myPhone.value +                  
                           "<br><strong>Message: </strong>" + myForm.message.value;
      
      //clear the form and prepare for more input
      myForm.myFirstName.value = "";
      myForm.myLastName.value = "";
      myForm.myEmail.value = "";
      myForm.myPhone.value = "";
      myForm.message.value = "";
      myForm.myFirstName.focus();
      //To actually submit do this -> myForm.submit();
    }
  }
  
  //attach event handler to call for form validation on submission
  document.getElementById("myForm").addEventListener("submit", validateForm);