
function addAccount() {
    // event.preventDefault();
    let username = document.getElementById("name").value;
    let emailUp = document.getElementById("email").value;
    let passwordUp = document.getElementById("password").value;
    let passwordUpCf = document.getElementById("confirmpassword").value;
    let saveUp = JSON.parse(localStorage.getItem("saveUp"));
    if(saveUp == null){
        saveUp = []
        let objSignUp = {
            username : username,
            emailUp : emailUp,
            passwordUp : passwordUp,
            passwordUpCf : passwordUpCf,
        }
        saveUp.push(objSignUp);
        console.log(saveUp);
        localStorage.setItem("saveUp",JSON.stringify(objSignUp));
    
    } else {
        let flag = true;
        for ( let i=0 ; i<saveUp.length;i++){
            if(saveUp[i].username==username){
                flag=false;
                break;
            }else{
                flag=true
            }
        }
        if (!flag){
            console.log("user đã tồn tại");
        }else{
            let objSignin = {
            username : username,
            emailUp : emailUp,
            passwordUp : passwordUp,
            passwordUpCf : passwordUpCf,
            }
            saveUp.push(objSignin);
        localStorage.setItem("saveUp",JSON.stringify(objSignUp));
           
        }
    }
}