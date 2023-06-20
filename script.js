function afficherImageEnFonctionDuTemps() {
    const heureActuelle = new Date().getHours();
    console.log(heureActuelle)

    if (heureActuelle < 8 || heureActuelle >= 20) {
        // C'est la nuit
        afficherImage("night.jpg");
    } else {
        // C'est le jour
        afficherImage("day.jpg");
    }
}

function afficherImage(source) {
    const imageElement = document.getElementById("imageElement");
    imageElement.src = source;
}

afficherImageEnFonctionDuTemps();