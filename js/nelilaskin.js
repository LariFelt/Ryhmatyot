let nykyinenSyote = '';

function lisaaSyote(arvo) {
    nykyinenSyote += arvo;
    paivitaNaytto();
}

function tyhjennaNaytto() {
    nykyinenSyote = '';
    paivitaNaytto();
}

function poistaViimeinen() {
    nykyinenSyote = nykyinenSyote.slice(0, -1);
    paivitaNaytto();
}

function laskeTulos() {
    try {
        const tulos = eval(nykyinenSyote);
        nykyinenSyote = tulos.toString();
        paivitaNaytto();
    } catch (virhe) {
        nykyinenSyote = 'Virhe';
        paivitaNaytto();
    }
}

function paivitaNaytto() {
    document.getElementById('naytto').value = nykyinenSyote;
}
