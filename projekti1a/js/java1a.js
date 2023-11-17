function tarkistus() {
    var etunimi = document.getElementById("etunimi").value;
    var sukunimi = document.getElementById("sukunimi").value;
    var email = document.getElementById("email").value;
    var lihaa = document.getElementById("lihaa").checked;
    var eilihaa = document.getElementById("eilihaa").checked;
    var allergiat = document.getElementById("allergiat").value;

    if (etunimi === "" || sukunimi === "" || email === "") {
        alert("Täytä kaikki pakolliset kentät: Etunimi, Sukunimi, Sähköpostiosoite");
        return;
    }

    if (!lihaa && !eilihaa) {
        alert("Valitse jompikumpi vaihtoehto: Olen lihansyöjä tai Olen kasvissyöjä");
        return;
    }

    var valitutRuokalajit = [];
    var ruokalajit = document.getElementsByName("box");
    for (var i = 0; i < ruokalajit.length; i++) {
        if (ruokalajit[i].checked) {
            valitutRuokalajit.push(ruokalajit[i].id);
        }
    }

    if (valitutRuokalajit.length === 0) {
        alert("Valitse vähintään yksi ruokalaji");
        return;
    }

    alert("Lomake on kunnossa ja voi lähettää!");
}
