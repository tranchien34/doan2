function login(){
    var email = document.getElementById("login_email").value;
    var pass = document.getElementById("login_paswword").value;
    var account = JSON.parse(localStorage.getItem('user')) ;
    if(email !=""&&pass !=""&& email===account.email&& pass===account.pass){
        document.getElementById("hide").style.display="none";
    }
    else{
        document.getElementById("err").innerHTML = "Thong tin nhap khong hop le";
        $("#err").delay(3200).fadeOut(300);
    }
    
}


