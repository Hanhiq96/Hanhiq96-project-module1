function signInUser(e) {
  e.preventDefault();
  let dataLogin = JSON.parse(localStorage.getItem("saveUp"));
  let userSignIn = document.getElementById("userSignIn").value;
  let passwordSignIn = document.getElementById("password").value;
  // let flag=true;
  // if (dataLogin == null){
  //     dataLogin=[];
  // } else {

  for (const i in dataLogin) {
    console.log(dataLogin.passwordUp);
    console.log(passwordSignIn);
        if (
            dataLogin.username == userSignIn &&
            dataLogin.passwordUp == passwordSignIn
          ) {
            // flag=false;
            window.location.href = "../Home.html";
            break;
          } else {
            // flag=true;
            return;
        }
  }

//   for (let i = 0; i < dataLogin; i++) {
//     console.log(dataLogin);
//     console.log("1111");
    
  
    
  }
  // }

  // if (!flag){
  //     console.log(1111);
  //     window.location.href="../html/Home.html";
  // }else{
  //     console.log("Tài khoản đã tồn tại");
  // }
