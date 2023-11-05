// Exercice 9: Créer une fonction pour vérifier si deux plages de dates se chevauchent
module.exports = function chevauchementDates(debut1, fin1, debut2, fin2) {
    const d1 = new Date(debut1);
    const f1 = new Date(fin1);
    const d2 = new Date(debut2);
    const f2 = new Date(fin2);

    return (d1 <= f2 && f1 >= d2) || (d1 >= f2 && f1 <= d2);
}