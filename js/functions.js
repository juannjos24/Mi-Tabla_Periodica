const db = firebase.firestore();
var usernav = document.getElementById('usernav');
let username = JSON.parse(localStorage.getItem('user'));
let user = username[0].usuario;
var elemento = document.getElementById("alert");

if (username = !null) {
    document.getElementById("usernav").innerHTML = "<cite>" + user + "</cite>";
}
var cont = 0;
//
function disablelike() {
    cont = cont + 1;
    if (cont => 1) {
        var conta = cont.toString(10);
        let contador = Array({
            contador: conta,
        });
        localStorage.setItem('cont', JSON.stringify(contador));
        elemento.className = "alert alert-info d-flex align-items-center txtalert";
        document.getElementById("alert").innerHTML = "<p> Gracias por tu Me gusta </p>";
        document.getElementById("btnlike").disabled = true;
        //Captura de date and write in database
        var date = new Date();
        var fech = date.getDate();
        var day = new Array(7);
        day[0] = "Domingo";
        day[1] = "Lunes";
        day[2] = "Martes";
        day[3] = "Miercoles";
        day[4] = "Jueves";
        day[5] = "Viernes";
        day[6] = "Sabado";
        var hora = date.getHours();
        var minute = date.getMinutes();
        var month = new Array(12);
        month[0] = "Enero";
        month[1] = "Febrero";
        month[2] = "Marzo";
        month[3] = "Abril";
        month[4] = "Mayo";
        month[5] = "Junio";
        month[6] = "Julio";
        month[7] = "Agosto";
        month[8] = "Septiembre";
        month[9] = "Octubre";
        month[10] = "Noviembre";
        month[11] = "Diciembre";
        var año = date.getFullYear();
        var datefull = day[date.getDay()] + " " + fech + " " + hora + ":" + minute + " " + month[date.getMonth()] + " " + año;
        let fecha = Array({
            date_full: datefull,

        });

        db.collection('likes').doc().set({
            datefull,
            user,
        })
    }

}


function mensaje() {
    const mensaj = document.getElementById('txtmensaje');
    let username = JSON.parse(localStorage.getItem('user'));
    let user = username[0].usuario;
    var elemento = document.getElementById("alertmen");
    //Captura de date and write in database
    var date = new Date();
    var fech = date.getDate();
    var day = new Array(7);
    day[0] = "Domingo";
    day[1] = "Lunes";
    day[2] = "Martes";
    day[3] = "Miercoles";
    day[4] = "Jueves";
    day[5] = "Viernes";
    day[6] = "Sabado";
    var hora = date.getHours();
    var minute = date.getMinutes();
    var month = new Array(12);
    month[0] = "Enero";
    month[1] = "Febrero";
    month[2] = "Marzo";
    month[3] = "Abril";
    month[4] = "Mayo";
    month[5] = "Junio";
    month[6] = "Julio";
    month[7] = "Agosto";
    month[8] = "Septiembre";
    month[9] = "Octubre";
    month[10] = "Noviembre";
    month[11] = "Diciembre";
    var año = date.getFullYear();
    var datefull = day[date.getDay()] + " " + fech + " " + month[date.getMonth()] + " " + año + " " + hora + ":" + minute;

    let men = Array({
        texto: mensaj.value,
        fec: datefull,
    });
    localStorage.setItem('comentario', JSON.stringify(men));
    let text = JSON.parse(localStorage.getItem('comentario'));
    let txt = text[0].texto;
    db.collection('comentario').doc().set({
        datefull,
        user,
        txt,
    })
    elemento.className = "alert alert-warning d-flex align-items-center txtalert";
    document.getElementById("alertmen").innerHTML = "<p>Comentario enviado de manera exitosa. Con tu aporte ayudas a este desarrollador a seguir creciendo.</p>";
    document.getElementById("btnmen").disabled = true;
    console.log(men);
}
//Funcion que comprueba si ya existe un click
alert = () => {
    let conta = JSON.parse(localStorage.getItem('cont'));
    let cont = conta[0].contador;
    var elemento = document.getElementById("alert");
    var contador = parseInt(cont, 10);
    if (contador => 1) {
        elemento.className = "alert alert-info d-flex align-items-center txtalert";
        document.getElementById("alert").innerHTML = "<p>Gracias por tú me gusta. Recuerda que solo puedes dar me gusta una vez.</p>";
        document.getElementById("btnlike").disabled = true;
    }
}
alert2 = () => {
    let text = JSON.parse(localStorage.getItem('comentario'));
    let txt = text[0].texto;
    let fechaa = text[0].fec;
    var elemento1 = document.getElementById("alertmen");
    var elemento2 = document.getElementById("alertmen2");
    if (text = !null) {
        elemento1.className = "alert alert-warning d-flex align-items-center txtalert";
        elemento2.className = "alert alert-info d-flex align-items-center txtalert";
        document.getElementById("alertmen").innerHTML = "<p>Gracias '" + user + "' por tu comentario. Recuerda que solo puedes realizar un comentario.</p>";
        document.getElementById("alertmen2").innerHTML = "<p>Fecha de envio : " + fechaa + "</p>";
        document.getElementById("btnmen").disabled = true;
        document.getElementById("txtmensaje").innerHTML = "Comentario enviado el : ' " + txt + " ' ";
        document.getElementById("txtmensaje").disabled = true;
    }
}
document.addEventListener("load", alert());
document.addEventListener("load", alert2());