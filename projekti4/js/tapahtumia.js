var enterButton = document.getElementById("painike");
enterButton.addEventListener("click", lisaaListaanNapauttaessa);

var input = document.getElementById("syotto");
input.addEventListener("keypress", lisaaListaanEnterilla);

var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function luoListaElementti() {
    var li = document.createElement("li");

    if (input.value != '') {
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    }

    function crossOut() {
        li.classList.toggle("done");
    }

    li.addEventListener("click", crossOut);

    var poisto = document.createElement("button");
    poisto.appendChild(document.createTextNode("X"));
    li.appendChild(poisto);
    poisto.addEventListener("click", poistaTehtava);

    function poistaTehtava() {
        li.classList.add("delete");
    }
}

function lisaaListaanNapauttaessa() {
    if (inputLength() > 0) {
        luoListaElementti();
    }
}

function lisaaListaanEnterilla(event) {
    if (inputLength() > 0 && event.which === 13) {
        luoListaElementti();
    }
}
