const form = document.getElementById('form');
const username = document.getElementById('username');
var elemento = document.getElementById("alert");

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let users = Array({
        usuario: username.value,
    });
    localStorage.setItem('user', JSON.stringify(users));
    location.href = 'ruta/home.html'
});

check = () => {
    let username = JSON.parse(localStorage.getItem('user'));
    let user = username[0].usuario;
    if (username = !null) {
        elemento.className = "alert alert-info d-flex align-items-center txtalert";
        document.getElementById("alert").innerHTML = "<p> Ya estás registrado, no puedes registrarte más de una vez ' " + user + "'</p>";
        location.href = 'ruta/home.html'
    }
}
document.addEventListener("load", check());