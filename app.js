import {auth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "./firebase.mjs"

onAuthStateChanged(auth, (user) => {
  if (user) {
    // const uid = user.uid;
    console.log("user", user);
    
  } else {
    console.log("user Not Exits");
    
  }
});

let singup = () => {
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((res) => {
    console.log("user", res.user);
    
  })
  .catch((error) => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    console.log("error", error);
  });
};


let Login = () => {
  let email = document.getElementById("email")
  let password = document.getElementById("password")
  signInWithEmailAndPassword(auth, email.value, password.value)
.then((res) => {
  console.log("user", res.user);
  
})
.catch((error) => {
  // const errorCode = error.code;
  // const errorMessage = error.message;
  console.log("error", error);
});
};


let Loginbtn = document.getElementById("loginbtn")
Loginbtn.addEventListener("click", Login)


let signupbtn = document.getElementById("signupbtn")
signupbtn.addEventListener("click", singup)

let Logout = () =>{

  signOut(auth).then(() => {
    console.log("Signout Successful");
    
  }).catch((error) => {
    // An error happened.
  });

}

let logoutbtn = document.getElementById("logoutbtn")
logoutbtn.addEventListener("click", Logout)