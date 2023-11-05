// Exercice 7: Créer une fonction pour obtenir le dernier jour du mois d'une date donnée
module.exports = function dernierJourDuMois(date) {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date(date);
    d.setMonth(d.getMonth() + 1);
    d.setDate(d.getDay() - d.getDay());
    return weekday[d.getDay()];
}
