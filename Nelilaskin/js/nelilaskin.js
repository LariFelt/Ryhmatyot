var numero = '';
var taulu = ['+', '-', '*', '/', '%'];
var index = 0;

function lisaaSyote(luku) {
    numero += luku;
    paivitaNaytto();
}

function laskeTulos() {
    if (numero.includes('%')) {
        var osat = numero.split('%');
        var osa1 = parseFloat(osat[0]);
        var osa2 = parseFloat(osat[1]);
        var tulos = osa1 * osa2 / 100;
        paivitaNaytto(tulos);
        numero = tulos.toString();
    } else {
        paivitaNaytto(eval(numero));
        numero = eval(numero).toString();
    }
}

function tyhjennaNaytto() {
    numero = '';
    paivitaNaytto();
}

function poistaViimeinen() {
    for (var i = numero.length - 1; i >= 0; i--) {
        if (taulu.includes(numero[i])) {
            index = i;
            break;
        }
    }
    numero = numero.substr(0, index);
    paivitaNaytto();
}

function paivitaNaytto(arvo) {
    document.getElementById('naytto').value = arvo || numero;
}
