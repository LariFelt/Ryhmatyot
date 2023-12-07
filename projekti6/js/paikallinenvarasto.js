document.getElementById("lomake").addEventListener("submit", function (event) {
    event.preventDefault();

    var etunimi = document.getElementById("etunimi").value;
    var sukunimi = document.getElementById("sukunimi").value;
    var lahiosoite = document.getElementById("lahiosoite").value;
    var postinumero = document.getElementById("postinumero").value;
    var postitoimipaikka = document.getElementById("postitoimipaikka").value;
    var puhelin = document.getElementById("puhelin").value;
    var sahkoposti = document.getElementById("sahkoposti").value;

    var tallennettavatTiedot = {
        etunimi: etunimi,
        sukunimi: sukunimi,
        lahiosoite: lahiosoite,
        postinumero: postinumero,
        postitoimipaikka: postitoimipaikka,
        puhelin: puhelin,
        sahkoposti: sahkoposti
    };

    localStorage.setItem("kayttajanTiedot", JSON.stringify(tallennettavatTiedot));

    alert("Tiedot tallennettu!");
});