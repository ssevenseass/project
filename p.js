const name = document.getElementById('email');
const pw = document.getElementById('password');
const btn = document.getElementById('my_button')
btn.onclick = function() {
    event.preventDefault();
    console.log(name.value)
    localStorage.setItem('email', name.value);
    localStorage.setItem('password', pw.value);
    document.location.href = "index.html"
}

