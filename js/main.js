{// validation function start
let fname_label = document.querySelector(".fname_label")
let fname_input = document.querySelector(".fname_input")
let lname_label = document.querySelector(".lname_label")
let lname_input = document.querySelector(".lname_input")
let email_label = document.querySelector(".email_label")
let email_input = document.querySelector(".email_input")
let phone_label = document.querySelector(".phone_label")
let phone_input = document.querySelector(".phone_input")
let pass_label = document.querySelector(".pass_label")
let pass_input = document.querySelector(".pass_input")
let pointer_cur = document.querySelector(".pointer_cur")
let pointer_cur2 = document.querySelector(".pointer_cur2")
let confirm_label = document.querySelector(".confirm_label")
let confirm_input = document.querySelector(".confirm_input")
let birth_label = document.querySelector(".birth_label")
let birth_input = document.querySelector(".birth_input")
let reset_button = document.querySelector(".reset_button")
let typing_span = document.querySelector(".typing_span")
let female_check = document.querySelector(".female_check")
let male_check = document.querySelector(".male_check")
let gender_label = document.querySelector(".gender_label")
// let input = document.querySelector("input")
let label = document.querySelector("label")
let emailreg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
let phonereg = /^[0-9]{11}$/
let validator = true
function validation(){
  //first name validator
  if(fname_input.value == "" || !isNaN(fname_input.value)){
    fname_label.classList.add("wrong")
    fname_label.innerHTML = "invalid user first name <i class='fa-solid fa-circle-minus'></i>"
    return validator = false
    //last name validator
  }else if(lname_input.value === "" || !isNaN(lname_input.value)){
    lname_label.classList.add("wrong")
    lname_label.innerHTML = "invalid user last name <i class='fa-solid fa-circle-minus'></i>"
    return validator = false
    //email validator
  }else if(email_input.value === "" || !emailreg.test(email_input.value)){
    email_label.classList.add("wrong")
    email_label.innerHTML = "invalid user's email <i class='fa-solid fa-circle-minus'></i>"
    return validator = false
        //phone validator
  }else if(phone_input.value === "" || !phonereg.test(phone_input.value)){
    phone_label.classList.add("wrong")
    phone_label.innerHTML = "invalid user's phone number <i class='fa-solid fa-circle-minus'></i>"
    return validator = false
        //password validator
  }else if(pass_input.value === "" || !isNaN(pass_input.value) || pass_input.value.length <= 6){
    pass_label.innerHTML = "invalid user password <i class='fa-solid fa-circle-minus'></i>"
    pass_label.classList.add("wrong")
    pass_label.classList.remove("typing")
    return validator = false
        //password confirmation validator
  }else if(confirm_input.value === "" || confirm_input.value != pass_input.value  ){
    confirm_label.innerHTML = "invalid password confirmation <i class='fa-solid fa-circle-minus'></i>"
    confirm_label.classList.add("wrong")
    confirm_label.classList.remove("typing")
    return validator = false
        //birthday validator
  }else if(birth_input.value === ""){
    birth_label.classList.add("wrong")
    birth_label.innerHTML = "choose a date <i class='fa-solid fa-circle-minus'></i>"
    return validator = false
  }else if(female_check.checked == false && male_check.checked == false){
    gender_label.classList.add("wrong")
    gender_label.innerHTML = "choose a gender <i class='fa-solid fa-circle-minus'></i>"
    return validator = false
  }
  else{
    return validator = true
  }
}
function my_on_key(id,span){
  var y = document.getElementById(span)
  y.value = y.id
  var z = document.getElementById(id)
  z.value = z.id
  // let y = document.getElementsByClassName(z.value)
  document.getElementById(z.value).style.display = "none"
  document.getElementById(y.value).style.display = "inline-block"
  }
function my_onfocusout(id,span){
  var y = document.getElementById(span)
  y.value = y.id
  var z = document.getElementById(id)
  z.value = z.id
  document.getElementById(z.value).style.display = "inline-block"
  document.getElementById(y.value).style.display = "none"
  fname_label.innerHTML = "first name:"
  fname_label.classList.remove("wrong")
  lname_label.innerHTML = "last name:"
  lname_label.classList.remove("wrong")
  email_label.innerHTML = "email:"
  email_label.classList.remove("wrong")
  phone_label.innerHTML = "phone number:"
  phone_label.classList.remove("wrong")
  pass_label.innerHTML = "password:"
  pass_label.classList.remove("wrong")
  confirm_label.innerHTML = "confirm password:"
  confirm_label.classList.remove("wrong")
  birth_label.innerHTML = "birthdate:"
  birth_label.classList.remove("wrong")
  gender_label.innerHTML = "gender:"
  gender_label.classList.remove("wrong")
  }

//show and hide password method
pointer_cur.addEventListener("click",()=>{
  // console.log(pass_input.type);
  if(pass_input.type === "password"){
    pass_input.type = "text"
  } else{
    pass_input.type = "password"
  }
})
//show and hide password confirmation method
pointer_cur2.addEventListener("click",()=>{
  // console.log(pass_input.type);
  if(confirm_input.type === "password"){
    confirm_input.type = "text"
  } else{
    confirm_input.type = "password"
  }
})
//reset button function
reset_button.addEventListener("click",()=>{
  fname_label.innerHTML = "first name:"
  fname_label.classList.remove("typing")
  lname_label.innerHTML = "last name:"
  lname_label.classList.remove("typing")
  email_label.innerHTML = "email:"
  email_label.classList.remove("typing")
  phone_label.innerHTML = "phone number:"
  phone_label.classList.remove("typing")
  pass_label.innerHTML = "password:"
  pass_label.classList.remove("typing")
  confirm_label.innerHTML = "confirm password"
  confirm_label.classList.remove("typing")
})
}

