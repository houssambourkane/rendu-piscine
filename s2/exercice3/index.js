// Exercice 3: Créer une fonction pour calculer la différence en jours entre deux dates


function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

module.exports = function differenceEnJours(date1, date2) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    var DifferenceInTime = d1.getTime() - d2.getTime(); 
    return Math.floor(DifferenceInTime / (1000 * 3600 * 24));
}