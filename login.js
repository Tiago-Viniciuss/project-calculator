function login(){

    var user = document.getElementById('username').value
    var password = document.getElementById('password').value
    
    if(user == "admin" && password == "1234") {
       location.href = 'https://tiago-viniciuss.github.io/Site-Infectus-MC/';
    } else {
        alert('Insert the correct informations')
    }
}