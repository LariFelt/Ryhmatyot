var elainkuvat = ['kissa.jpg', 'koira.jpg', 'lehma.jpg', 'orava.jpg', 'tuoppi.jpg', 'vaunu.jpg', 'kissa.jpg', 'koira.jpg', 'lehma.jpg', 'orava.jpg', 'tuoppi.jpg', 'vaunu.jpg', 'kummitus.jpg', 'nukke.jpg', 'kummitus.jpg', 'nukke.jpg'];
var smerkki = 0;
var vanha = null;
var valtti;

function luoTaulukko() {
    var sekoitetut = sekoita(elainkuvat);
    var paikka = document.getElementById('peli');
    var taulukko = document.createElement('table');
    var taulukonSisus = document.createElement('tbody');

    for (var i = 0; i < 4; i++) {
        var rivi = document.createElement('tr');

        for (var j = 0; j < 4; j++) {
            var solu = document.createElement('td');
            solu.classList.add('kortti');
            solu.setAttribute('alt', sekoitetut[smerkki]);
            solu.setAttribute('id', 'solu' + smerkki);
            solu.setAttribute('name', smerkki);
            solu.addEventListener('click', function () {
                nayta(parseInt(this.getAttribute('name')));
            });
            smerkki += 1;
            rivi.appendChild(solu);
        }

        taulukonSisus.appendChild(rivi);
    }

    taulukko.appendChild(taulukonSisus);
    paikka.appendChild(taulukko);
    taulukko.setAttribute('border', '2');
}

function sekoita(taulukko) {
    return taulukko.sort(function () { return 0.5 - Math.random(); });
}

function nayta(numero) {
    var tunnus = document.getElementById('solu' + numero);
    var altti = tunnus.getAttribute('alt');

    if (vanha !== null) {
        valtti = vanha.getAttribute('alt');
    } else {
        valtti = null;
    }

    tunnus.innerHTML = '<img src="kuvat/' + altti + '">';

    if (altti == valtti) {
        var altti = tunnus.getAttribute('alt');
        vanha.innerHTML = '<img src="kuvat/' + altti + '">';
        tunnus.innerHTML = '<img src="kuvat/' + altti + '">';
    } else {
        vanha = tunnus;
        odota(tunnus);
    }
}

function odota(joku) {
    setTimeout(function () {
        joku.innerHTML = '';
    }, 1200);
}