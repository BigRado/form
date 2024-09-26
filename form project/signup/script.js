funtion getPassword() {
let password = document.getElementById('password')
let confirmPassword= document.getElementById('confirm')

if (password.value != confirmPassword.value) {
    alert('wrong Password Match')
}
else {
    alert('password match')
}
}