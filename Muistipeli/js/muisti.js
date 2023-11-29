var kortit = [
    "kuva1.jpg", "kuva2.jpg", "kuva3.jpg", "kuva4.jpg",
    "kuva5.jpg", "kuva6.jpg", "kuva7.jpg", "kuva8.jpg",
    "kuva9.jpg", "kuva10.jpg", "kuva11.jpg", "kuva12.jpg",
    "kuva13.jpg", "kuva14.jpg", "kuva15.jpg", "kuva16.jpg",
    "kuva17.jpg", "kuva18.jpg"
];

var valitutKortit = [];
var loydetytParit = 0;
var kaannetytKortit = 0;
var aika = 0;
var ajastin;

// Pelin aloittaminen
function aloitaPeli() {
    // Nollaa muuttujat ja pysäytä ajanottotimeri
    loydetytParit = 0;
    kaannetytKortit = 0;
    aika = 0;
    valitutKortit = [];
    clearInterval(ajastin);

    luoPeliLauta();

    // Aseta ajanottotimeri
    ajastin = setInterval(function () {
        aika++;
        paivitaAikaJaPisteet();
    }, 1000);
}

// Pelilaudan luominen
function luoPeliLauta() {
    var peliLauta = document.getElementById("peli-lauta");
    peliLauta.innerHTML = '';
    peliLauta.style.display = "grid";

    // Hae pelityypin arvo pudotusvalikosta
    var pelityyppi = document.getElementById("pelityyppi").value;
    var [rivit, sarakkeet] = haeRuudukonKoko(pelityyppi);

    // Sekoita kortit
    var sekoitetutKortit = sekoitaKortit(kortit.slice(0, rivit * sarakkeet / 2).concat(kortit.slice(0, rivit * sarakkeet / 2)));

    // Aseta sarakkeiden määrä dynaamisesti
    peliLauta.style.gridTemplateColumns = `repeat(${sarakkeet}, 1fr)`;

    // Luo kortit pelilaudalle
    for (var i = 0; i < rivit; i++) {
        for (var j = 0; j < sarakkeet; j++) {
            var kortti = document.createElement("div");
            kortti.className = "kortti";
            kortti.setAttribute("data-indeksi", i * sarakkeet + j);

            // Aseta taustakuva kortille
            kortti.innerHTML = '<img src="kuvat/background.jpg" alt="kortin_tausta">';

            // Lisää tapahtumankäsittelijä kortille
            kortti.addEventListener("click", function () {
                kaannaKortti(this, sekoitetutKortit);
            });

            // Lisää kortti pelilaudalle
            peliLauta.appendChild(kortti);
        }
    }

    // Päivitä pisteet ja aika
    paivitaAikaJaPisteet();
}

// Hae ruudukon koko pelityypin perusteella
function haeRuudukonKoko(pelityyppi) {
    switch (pelityyppi) {
        case "4":
            return [4, 4];
        case "6":
            return [4, 6];
        case "8":
            return [6, 6];
        default:
            return [4, 4];
    }
}

// Käännä kortti ja tarkista arvaus
function kaannaKortti(kortti, sekoitetutKortit) {
    var indeksi = kortti.getAttribute("data-indeksi");

    if (!valitutKortit.includes(indeksi) && valitutKortit.length < 2) {
        kortti.innerHTML = '<img src="kuvat/' + sekoitetutKortit[indeksi] + '" alt="kuva">';

        kortti.querySelector('img').style.opacity = 1;

        valitutKortit.push(indeksi);
        kaannetytKortit++;

        if (valitutKortit.length === 2) {
            setTimeout(function () {
                tarkistaArvaus(sekoitetutKortit);
            }, 500);
        }
    }
}

// Tarkista arvaus ja päivitä pelitilanne
function tarkistaArvaus(sekoitetutKortit) {
    var kortti1 = sekoitetutKortit[valitutKortit[0]];
    var kortti2 = sekoitetutKortit[valitutKortit[1]];

    var kortti1Elementti = document.querySelector('[data-indeksi="' + valitutKortit[0] + '"]');
    var kortti2Elementti = document.querySelector('[data-indeksi="' + valitutKortit[1] + '"]');

    if (kortti1 === kortti2) {
        loydetytParit++;

        if (loydetytParit === sekoitetutKortit.length / 2) {
            // Peli päättyi
            clearInterval(ajastin);
            alert("Onneksi olkoon! Peli päättyi.\n Löydetyt parit: " + loydetytParit + "\nKäännetyt kortit: " + kaannetytKortit + "\nAika: " + aika + " s");
        }
    } else {
        // Käännä kortit takaisin
        setTimeout(function () {
            kortti1Elementti.innerHTML = '<img src="kuvat/background.jpg" alt="kortin_tausta">';
            kortti2Elementti.innerHTML = '<img src="kuvat/background.jpg" alt="kortin_tausta">';
            kortti1Elementti.querySelector('img').style.opacity = 1;
            kortti2Elementti.querySelector('img').style.opacity = 1;
        }, 200);
    }

    // Tyhjennä valitut kortit ja päivitä näyttö
    valitutKortit = [];
    paivitaAikaJaPisteet();
}

// Päivitä näyttö ajan ja pisteiden osalta
function paivitaAikaJaPisteet() {
    document.getElementById("pisteet").innerHTML = "Löydetyt parit: " + loydetytParit + "<br>Käännetyt kortit: " + kaannetytKortit;
    document.getElementById("aika").innerHTML = "Aika: " + aika + " s";
}

// Sekoita kortit satunnaisesti
function sekoitaKortit(taulukko) {
    var sekoitetutKortit = [];

    while (taulukko.length > 0) {
        var satunnainenIndeksi = Math.floor(Math.random() * taulukko.length);
        var satunnainenKortti = taulukko.splice(satunnainenIndeksi, 1)[0];
        sekoitetutKortit.push(satunnainenKortti);
    }

    return sekoitetutKortit;
}
