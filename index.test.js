const request = require('supertest');
const app = require('./index');

describe('GET /', () => {
    test('Test 1', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ id: 1, name: 'John Doe' }]);
                done();
            });
    });
});

describe('POST /:param', () => {
    test('Test 1/2', (done) => {
        request(app)
            .post('/1')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ error: false, num: "1" }]);
                done();
            });
    });
});

describe('POST /s1/exercice1', () => {
    test('Test si n1 est 0', (done) => {
        request(app)
            .post('/s1/exercice1')
            .send({n1:0,n2:5})
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: 5 }]);
                done();
            });
    });
    test('Test si n1 est number', (done) => {
        request(app)
            .post('/s1/exercice1')
            .send({n1:"10",n2:5})
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
                done();
            });
    });
    test('Test si n1 est undefined', (done) => {
        request(app)
            .post('/s1/exercice1')
            .send({n1:undefined,n2:5})
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
                done();
            });
    });
    test('Test exercice 1', (done) => {
        request(app)
            .post('/s1/exercice1')
            .send({n1:5,n2:5})
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: 10 }]);
                done();
            });
    });
});

describe('POST /s1/exercice2', () => {
    test('Test si n2 est 0', (done) => {
        request(app)
            .post('/s1/exercice1')
            .send({n1:20,n2:0})
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: 20 }]);
                done();
            });
    });
    test('Test si n2 est number', (done) => {
        request(app)
            .post('/s1/exercice1')
            .send({n1:10,n2:"5"})
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
                done();
            });
    });
    test('Test si n2 est undefined', (done) => {
        request(app)
            .post('/s1/exercice2')
            .send({n1:10,n2:undefined})
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
                done();
            });
    });
    test('Test exercice 2', (done) => {
        request(app)
            .post('/s1/exercice2')
            .send({n1:10,n2:5})
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: 5 }]);
                done();
            });
    });
});

describe('POST /s1/exercice3', () => {
    test('Test 1/2', (done) => {
        request(app)
            .post('/1')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ error: false, num: "1" }]);
                done();
            });
    });
});

describe('POST /s1/exercice1', () => {
    test('Test si n1 et n2 sont 0', (done) => {
        request(app)
            .post('/s1/exercice1')
            .send({n1:0,n2:0})
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: 0 }]);
                done();
            });
    });
    test('Test si n1 et n2 sont number', (done) => {
        request(app)
            .post('/s1/exercice1')
            .send({n1:"10",n2:"23"})
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
                done();
            });
    });
    test('Test si n1 et n2 sont undefined', (done) => {
        request(app)
            .post('/s1/exercice1')
            .send({n1:undefined,n2:undefined})
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
                done();
            });
    });
    test('Test exercice 3', (done) => {
        request(app)
            .post('/s1/exercice3')
            .send({n1:10,n2:10})
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: 100 }]);
                done();
            });
    });
});

describe('POST /s1/exercice4', () => {
    test('Test de si n2 est egal a 0', (done) => {
        request(app)
            .post('/s1/exercice4')
            .send({n1:20,n2:0})
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: "Veuillez ne pas diviser par 0" }]);
                done();
            });
    });
    test('Test exercice 4', (done) => {
        request(app)
            .post('/s1/exercice4')
            .send({n1:10,n2:2})
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: 5 }]);
                done();
            });
    });
});


describe('POST /s1/exercice5', () => {
    test('Test de n1 negatif', (done) => {
        request(app)
            .post('/s1/exercice5')
            .send({n1:-10})
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre positif" }]);
                done();
            });
    });
    test('Test de n1 egal a 0', (done) => {
        request(app)
            .post('/s1/exercice5')
            .send({n1:0})
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: 1 }]);
                done();
            });
    });
    test('Test exercice 5', (done) => {
        request(app)
            .post('/s1/exercice5')
            .send({n1:11})
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: 39916800 }]);
                done();
            });
    });
});

describe('POST /s1/exercice6', () => {
    test('Test exercice 6', (done) => {
        request(app)
            .post('/s1/exercice6')
            .send({n1:10})
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: "pair" }]);
                done();
            });
    });
});

describe('POST /s1/exercice7', () => {
    test('Test celsius negatif', (done) => {
        request(app)
            .post('/s1/exercice7')
            .send({n1:-30})
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: -22 }]);
                done();
            });
    });
    test('Test exercice 7', (done) => {
        request(app)
            .post('/s1/exercice7')
            .send({n1:30})
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: 86 }]);
                done();
            });
    });
});

describe('POST /s1/exercice8', () => {
    test('Test d\'un rayon negatif ', (done) => {
        request(app)
            .post('/s1/exercice8')
            .send({n1:-10})
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre positif" }]);
                done();
            });
    });
    test('Test exercice 8', (done) => {
        request(app)
            .post('/s1/exercice8')
            .send({n1:10})
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: 314.1592653589793 }]);
                done();
            });
    });
});

describe('POST /s1/exercice9', () => {
    test('Test n1 pas string', (done) => {
        request(app)
            .post('/s1/exercice9')
            .send({n1:10})
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: "Veuillez entrer un mot valide" }]);
                done();
            });
    });
    test('Test d\'un mot pas palindrome', (done) => {
        request(app)
            .post('/s1/exercice9')
            .send({n1:"KAYAV"})
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: false }]);
                done();
            });
    });
    test('Test exercice 9', (done) => {
        request(app)
            .post('/s1/exercice9')
            .send({n1:"KAYAK"})
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: true }]);
                done();
            });
    });
});

describe('POST /s1/exercice10', () => {
    test('Test exercice 10', (done) => {
        request(app)
            .post('/s1/exercice10')
            .send({n1:21,n2:7})
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: 7 }]);
                done();
            });
    });
});

// S2

describe('POST /s2/exercice1', () => {
    test('Test exercice 1', (done) => {
        request(app)
            .post('/s2/exercice1')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                const currentDate = new Date();
                currentDate.setFullYear(currentDate.getFullYear() - 10);
                expect(res.body).toEqual([{ reponse: currentDate.toDateString() }]);
                done();
            });
    });
});

describe('POST /s2/exercice2', () => {
    test('Test exercice 2', (done) => {
        request(app)
            .post('/s2/exercice2')
            .send({date:"2015-10-12"})
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: "12/10/2015" }]);
                done();
            });
    });
});

describe('POST /s2/exercice3', () => {
    test('Test exercice 3', (done) => {
        request(app)
            .post('/s2/exercice3')
            .send({d1:"2015-10-12",d2:"2011-9-23"})
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: 1480 }]);
                done();
            });
    });
});

describe('POST /s2/exercice4', () => {
    test('Test exercice 4', (done) => {
        request(app)
            .post('/s2/exercice4')
            .send({date:"2015-10-12", jours:"150"})
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: "Thu Mar 10 2016" }]);
                done();
            });
    });
});


describe('POST /s2/exercice5', () => {
    test('Test exercice 5', (done) => {
        request(app)
            .post('/s2/exercice5')
            .send({annee:2018})
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: false }]);
                done();
            });
    });
    test('Test exercice 5', (done) => {
        request(app)
            .post('/s2/exercice5')
            .send({annee:2020})
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: true }]);
                done();
            });
    });
});

describe('POST /s2/exercice6', () => {
    test('Test exercice 6', (done) => {
        request(app)
            .post('/s2/exercice6')
            .send({date:"2015-10-12"})
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: "Thursday" }]);
                done();
            });
    });
});

describe('POST /s2/exercice7', () => {
    test('Test exercice 7', (done) => {
        request(app)
            .post('/s2/exercice7')
            .send({date:"2015-10-12"})
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: "Saturday"}]);
                done();
            });
    });
});

describe('POST /s2/exercice8', () => {
    test('Test exercice 8', (done) => {
        request(app)
            .post('/s2/exercice8')
            .send({heures:10,minutes:130})
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: "12:10" }]);
                done();
            });
    });
});

describe('POST /s2/exercice9', () => {
    test('Test exercice 9 true', (done) => {
        request(app)
            .post('/s2/exercice9')
            .send({"debut1":"2015-10-11",
            "fin1":"2017-06-12",
            "debut2":"2016-02-04",
            "fin2":"2020-12-25"})
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: true }]);
                done();
            });
    });

    test('Test exercice 9 false', (done) => {
        request(app)
            .post('/s2/exercice9')
            .send({"debut1":"2015-10-11",
            "fin1":"2017-06-12",
            "debut2":"2017-06-20",
            "fin2":"2020-12-25"})
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: false }]);
                done();
            });
    });
});

describe('POST /s2/exercice10', () => {
    test('Test exercice 10', (done) => {
        request(app)
            .post('/s2/exercice10')
            .send({date:"1999-10-24"})
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: 24 }]);
                done();
            });
    });
});