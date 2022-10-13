let form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
  if(!(eu && ep))
  {
    e.preventDefault();
  }
  if(!eu)
  {
    form.username.classList.add("is-invalid")
  }
  if(!ep)
  {
    form.password.classList.add("is-invalid")
  }
});

// regex for username
user_pattern = /^[a-zA-Z][\w . _]{5,24}$/;
// for english alphabetical
password_pattern1 = /[a-z]/;
password_pattern2 = /[A-Z]/;
// for numbers
password_pattern3 = /[0-9]/;
// for symbols
password_pattern4 = /[\W]/;

let eu = false;
let ep = false;

let username_placholder = document.querySelector("#username_placholder");
let password_placholder = document.querySelector("#password_placholder");

form.username.addEventListener("keyup", (e) => {
    if (e.target.value.length == 0)
     {
      username_placholder.textContent = "Please Enter Username";
      e.target.classList.remove("is-invalid");
      e.target.classList.remove("valid");
     }
     else
     {
    username_placholder.textContent = e.target.value;
    if (user_pattern.test(e.target.value)) {
      e.target.classList.remove("is-invalid");
      e.target.classList.add("is-valid");
      eu= true;
    } 
    else
     {
      e.target.classList.remove("is-valid");
      e.target.classList.add("is-invalid");
     }
  }
});

form.password.addEventListener("keyup", (e) => {
  if (e.target.value.length == 0) {
    password_placholder.textContent = "Please Enter Password";
    e.target.classList.remove("is-invalid");
    e.target.classList.remove("is-valid");
  } else {
    password_placholder.textContent = "*".repeat(e.target.value.length);
    if (
      password_pattern1.test(e.target.value) &&
      password_pattern2.test(e.target.value) &&
      password_pattern3.test(e.target.value) &&
      (e.target.value.length > 5) &&
      password_pattern4.test(e.target.value)
    ) {
      e.target.classList.remove("is-invalid");
      e.target.classList.add("is-valid");
      console.log(e.target.classList);
      ep = true;
    } else {
      e.target.classList.add("is-invalid");
      e.target.classList.remove("is-valid");
    }
  }
});

document.querySelector("#see_password").addEventListener("click", (e) => {
  console.log(e.target)
    if (document.querySelector("#password_see").innerHTML == " ")
   {
    document.querySelector("#password_see").textContent = form.password.value;
    e.target.nextElementSibling.classList.add("px-3")    
}
else
{
    e.target.nextElementSibling.classList.remove("px-3")    
    document.querySelector("#password_see").innerHTML = " ";
  }
});
