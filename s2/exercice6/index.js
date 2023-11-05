// Exercice 6: Créer une fonction pour obtenir le premier jour du mois d'une date donnée
module.exports = function premierJourDuMois(date) {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date(date);
    d.setDate(d.getDate() - d.getDate() + 1);
    return weekday[d.getDay()];
}