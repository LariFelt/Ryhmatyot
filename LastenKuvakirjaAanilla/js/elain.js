var nykyinenAani;

function elaimet(elain) {
    // Keskeyttää nykyisen ääni, jos sellainen on
    if (nykyinenAani) {
        nykyinenAani.pause();
        nykyinenAani.currentTime = 0; 
    }

    // Hakee uuden äänen id:n ja luo Audio-objektin
    var uusiAaniId = elain.id;
    var uusiAani = new Audio('aanet/' + uusiAaniId + '.mp3');

    // Tallentaa uuden äänen
    nykyinenAani = uusiAani;

    // Toistaa uuden äänen
    uusiAani.play();
}
