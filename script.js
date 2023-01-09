//To verify both passwords are the same
const validatePass = function(pass1,pass2){
    const password = document.getElementById('password').value;
    const confirmedPassword = document.getElementById('confirm-password').value;
    if (password !== confirmedPassword){;
        document.getElementById('validate-status').textContent = "Passwords do not match!";
        return false;
    }
    else return true;
}