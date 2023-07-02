document.getElementById('btn-submit').addEventListener('click', function(){
 const emailField = document.getElementById('userEmail');
 const email = emailField.value
 const passwordField = document.getElementById('userPassword')
 const password = passwordField.value;
 if(email === 'son@father.com' && password === '9658'){
    window.location.href = "bank.html";
 }
 else{
    alert('check id and password again')
 }
})