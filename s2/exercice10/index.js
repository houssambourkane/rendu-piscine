// Exercice 10: Créer une fonction pour calculer l'âge à partir de la date de naissance
module.exports = function calculerAge(dateNaissance) {
    const d = new Date(dateNaissance);
    const currentD = new Date();
    var DifferenceInTime = currentD.getTime() - d.getTime(); 
    return Math.floor(DifferenceInTime / (1000 * 3600 * 24 * 365));
}