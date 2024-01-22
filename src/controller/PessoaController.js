const Controller = require('./Controller.js');
const PessoaServices = require('../services/PessoaServices.js');


//instancia do service
const pessoaServices = new PessoaServices();

class PessoaController extends Controller {
  constructor(){
    super(pessoaServices);
  }
}

module.exports = PessoaController;