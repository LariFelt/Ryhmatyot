    document.addEventListener('DOMContentLoaded', function () {
    var lomake = document.getElementById('kyselylomake');
    var nimiKentta = document.getElementById('nimi');
    var emailKentta = document.getElementById('email');
    var ikaKentta = document.getElementById('ika');


    lomake.addEventListener('submit', function (event) {
            if (!onKelvollinenNimi(nimiKentta.value) ||
    !onKelvollinenEmail(emailKentta.value) ||
    !onKelvollinenIka(ikaKentta.value) ||
    !onVahintaanYksiValittu('ryhma') ||
    !onVahintaanYksiValittu('valinta')) {
        alert('Täytä kaikki vaaditut kentät.');
    event.preventDefault();
            }
        });

    function onKelvollinenNimi(nimi) {
            return nimi.length >= 3;
        }

    function onKelvollinenEmail(email) {
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
        }

    function onKelvollinenIka(ika) {
            return !isNaN(ika);
        }

    function onVahintaanYksiValittu(nimi) {
            var valinnat = document.querySelectorAll('input[name="' + nimi + '"]');
    for (var i = 0; i < valinnat.length; i++) {
                if (valinnat[i].type === 'radio' && valinnat[i].checked) {
                    return true;
                } else if (valinnat[i].type === 'checkbox' && valinnat[i].checked) {
                    return true;
                }
            }
    return false;
        }
    });
