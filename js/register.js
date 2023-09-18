function register(){
    var username = document.getElementById("username").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var re_pass = document.getElementById("re-pass").value;

    if(username !=""&&phone !=""&&email !=""&&pass !=""&&re_pass !=""&& pass ===re_pass){
        var user = {username:username,phone:phone,email:email,pass:pass,re_pass:re_pass}
        localStorage.setItem('user', JSON.stringify(user));
        window.location.reload();
    }
    else{
        document.getElementById("err").innerHTML = "Thong tin nhap khong hop le";
        $("#err").delay(3200).fadeOut(300);
    }
    
}

