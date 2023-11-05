const express = require('express');
const app = express();
const addition = require('./s1/exercice1')
const soustraction = require('./s1/exercice2')
const multiplication = require('./s1/exercice3')
const division = require('./s1/exercice4')
const factorielle = require('./s1/exercice5')
const estPairOuImpair = require('./s1/exercice6')
const celsiusEnFahrenheit = require('./s1/exercice7')
const aireCercle = require('./s1/exercice8')
const estPalindrome = require('./s1/exercice9')
const pgcd = require('./s1/exercice10')

const dateIlYADixAns = require('./s2/exercice1')
const formaterDate = require('./s2/exercice2')
const differenceEnJours = require('./s2/exercice3')
const ajouterJours = require('./s2/exercice4')
const estAnneeBissextile = require('./s2/exercice5')
const premierJourDuMois = require('./s2/exercice6')
const dernierJourDuMois = require('./s2/exercice7')
const formaterDuree = require('./s2/exercice8')
const chevauchementDates = require('./s2/exercice9')
const calculerAge = require('./s2/exercice10')

app.use(express.json());
const PORT = 3000;

let verify_number = function (n1, res) {
    if (typeof(n1) != "number" || n1 == undefined)
        return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
}

let verify_date = function (date, res) {
    if (!date || date == undefined)
        return res.json([{ reponse: "Veuillez entrer une date valide" }]);
}
app.get('/', (req, res) => {
    return res.json([{ id: 1, name: 'John Doe' }]);
});

app.post('/:param', (req, res) => {
    return res.json([{ error: false, num: req.params.param }]);
});

app.post('/s1/exercice1', (req, res) => {
    const n1 = req.body.n1
    const n2 = req.body.n2
    verify_number(n1, res);
    verify_number(n2, res);
    let a = addition(n1, n2)
    return res.json([{ reponse: a }]);
});

app.post('/s1/exercice2', (req, res) => {
    const n1 = req.body.n1
    const n2 = req.body.n2
    verify_number(n1, res);
    verify_number(n2, res);
    let a = soustraction(n1, n2)
    return res.json([{ reponse: a }]);
});

app.post('/s1/exercice3', (req, res) => {
    const n1 = req.body.n1
    const n2 = req.body.n2
    verify_number(n1, res);
    verify_number(n2, res);
    let a = multiplication(n1, n2)
    return res.json([{ reponse: a }]);
});

app.post('/s1/exercice4', (req, res) => {
    const n1 = req.body.n1
    const n2 = req.body.n2
    verify_number(n1, res);
    verify_number(n2, res);
    if (!n2)
        return res.json([{ reponse: "Veuillez ne pas diviser par 0" }]);
    let a = division(n1, n2)
    return res.json([{ reponse: a }]);
});

app.post('/s1/exercice5', (req, res) => {
    const n1 = req.body.n1
    verify_number(n1, res);
    if (n1 < 0)
    return res.json([{ reponse: "Veuillez entrer un nombre positif" }]);
    let a = factorielle(n1)
    return res.json([{ reponse: a }]);
});

app.post('/s1/exercice6', (req, res) => {
    const n1 = req.body.n1
    verify_number(n1, res);
    let a = estPairOuImpair(n1)
    return res.json([{ reponse: a }]);
});

app.post('/s1/exercice7', (req, res) => {
    const n1 = req.body.n1
    verify_number(n1, res);
    let a = celsiusEnFahrenheit(n1)
    return res.json([{ reponse: a }]);
});

app.post('/s1/exercice8', (req, res) => {
    const n1 = req.body.n1
    if (n1 < 0)
    return res.json([{ reponse: "Veuillez entrer un nombre positif" }]);
    verify_number(n1, res);
    let a = aireCercle(n1)
    return res.json([{ reponse: a }]);
});

app.post('/s1/exercice9', (req, res) => {
    const n1 = req.body.n1;
    if (typeof(n1) != "string" || !n1 || n1 == undefined)
        return res.json([{ reponse: "Veuillez entrer un mot valide" }]);
    let a = estPalindrome(n1)
    return res.json([{ reponse: a }]);
});

app.post('/s1/exercice10', (req, res) => {
    const n1 = req.body.n1
    const n2 = req.body.n2
    verify_number(n1, res);
    verify_number(n2, res);
    let a = pgcd(n1, n2)
    return res.json([{ reponse: a }]);
});

app.post('/s2/exercice1', (req, res) => {
    const d = dateIlYADixAns();
    return res.json([{ reponse: d }]);
});

app.post('/s2/exercice2', (req, res) => {
    const date = req.body.date;
    verify_date(date, res);
    const formattedDate = formaterDate(date);
    return res.json([{ reponse: formattedDate }]);
});

app.post('/s2/exercice3', (req, res) => {
    const d1 = req.body.d1;
    const d2 = req.body.d2;
    verify_date(d1, res);
    verify_date(d2, res);
    const diff = differenceEnJours(d1,d2);
    return res.json([{ reponse: diff }]);
});

app.post('/s2/exercice4', (req, res) => {
    const d = req.body.date;
    const j = req.body.jours;
    verify_date(d, res);
    if (!j || j == undefined)
        return res.json([{ reponse: "Veuillez entrer un nombre de jour valide" }]);
    const newDate = ajouterJours(d, j);
    return res.json([{ reponse: newDate }]);
});

app.post('/s2/exercice5', (req, res) => {
    const a = req.body.annee;
    if (!a || a == undefined)
        return res.json([{ reponse: "Veuillez entrer une année valide" }]);
    const estBissextile = estAnneeBissextile(a);
    return res.json([{ reponse: estBissextile }]);
});

app.post('/s2/exercice6', (req, res) => {
    const d = req.body.date;
    verify_date(d, res);
    const day = premierJourDuMois(d);
    return res.json([{ reponse: day }]);
});

app.post('/s2/exercice7', (req, res) => {
    const d = req.body.date;
    verify_date(d, res);
    const day = dernierJourDuMois(d);
    return res.json([{ reponse: day }]);
});

app.post('/s2/exercice8', (req, res) => {
    const h = req.body.heures;
    const m = req.body.minutes;
    if (!h || h == undefined)
        return res.json([{ reponse: "Veuillez entrer une heure valide" }]);
    if (!m || m == undefined)
        return res.json([{ reponse: "Veuillez entrer un nombre de minutes valide" }]);
    const duree = formaterDuree(h, m);
    return res.json([{ reponse: duree }]);
});

app.post('/s2/exercice9', (req, res) => {
    const d1 = req.body.debut1;
    const f1 = req.body.fin1;
    const d2 = req.body.debut2;
    const f2 = req.body.fin2;
    verify_date(d1, res);
    verify_date(f1, res);
    verify_date(d2, res);
    verify_date(f2, res);
    const chevauchement = chevauchementDates(d1, f1, d2, f2);
    return res.json([{ reponse: chevauchement }]);
});

app.post('/s2/exercice10', (req, res) => {
    const d = req.body.date;
    verify_date(d, res);
    const age = calculerAge(d);
    return res.json([{ reponse: age }]);
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

module.exports = app


