document.getElementById("kyselylomake").addEventListener("submit", function (event) {
    var nimiKentta = document.getElementById("nimi");
    var emailKentta = document.getElementById("email");
    var ikaKentta = document.getElementById("ika");
    var nimiVirhe = document.getElementById("nimiVirhe");
    var emailVirhe = document.getElementById("emailVirhe");
    var ikaVirhe = document.getElementById("ikaVirhe");

    if (nimiKentta.validity.valueMissing || nimiKentta.validity.tooShort) {
        nimiVirhe.style.display = "block";
        event.preventDefault();
    } else {
        nimiVirhe.style.display = "none";
    }

    if (emailKentta.validity.valueMissing || emailKentta.validity.typeMismatch) {
        emailVirhe.style.display = "block";
        event.preventDefault();
    } else {
        emailVirhe.style.display = "none";
    }

    if (ikaKentta.validity.valueMissing || ikaKentta.validity.rangeUnderflow || ikaKentta.validity.rangeOverflow || isNaN(ikaKentta.value)) {
        ikaVirhe.style.display = "block";
        event.preventDefault();
    } else {
        ikaVirhe.style.display = "none";
    }
});