const chai = require('chai');
const chaiHttp = require('chai-http');
const main = require('..');
const url = 'http://localhost:3000';

chai.use(chaiHttp);

describe('Probando API REST con Mocha - Chai', () => {
    it('Probando ruta /deportes (GET)', (done) => {
        chai.request(url)
            .get('/deportes')
            done();
    });
    it('La data debe contener un JSON con la propiedad "deportes" y esta debe ser un arreglo.', (done) => {
            chai.request(url)
            .get('/deportes')
            .end((err, res) => {
                let data = JSON.parse(res.text);
                chai.expect(data).to.have.property('deportes');
                chai.expect(data.deportes).to.be.an('array');
                done();
            });
    });
});