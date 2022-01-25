const chai = require('chai');
const chaiHttp = require('chai-http');
const main = require('../index');
	
chai.use(chaiHttp);

describe('Probando API REST con Mocha - Chai', () => {
    it('Probando ruta /deportes (GET)', () => {
        chai.request(main)
            .get('/deportes');
    });
    it('La data debe contener un JSON con la propiedad "deportes" y esta debe ser un arreglo.', () => {
        chai.request(main)
            .get('/deportes')
            .end((err, res) => {
                let data = JSON.parse(res);
                chai.expect(data).to.have.property('deportes');
                chai.expect(data.deportes).to.be.an('array');
            });
    });
});