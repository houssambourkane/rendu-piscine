// Exercice 4: Créer une fonction pour ajouter un nombre de jours à une date
module.exports = function ajouterJours(date, jours) {
    var d = new Date(date);
    d.setMilliseconds(d.getMilliseconds() + jours * 86400000);
    return d.toDateString();
}
