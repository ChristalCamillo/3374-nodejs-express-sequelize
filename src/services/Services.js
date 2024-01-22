// Camada intermediária que pega o modelo e aplica regras do negócio, fazendo a interface com o controller, 

//de forma que Modelo e Controller n conversem diretamente. Também é uma camada mais genérica, servindo a todos os Models



const dataSource = require('../models');



class Services {

  constructor(nomeDoModel){

    this.model = nomeDoModel;

  }



  async pegaTodosOsRegistros(){

    return dataSource[this.model].findAll();

  }



}



module.exports = Services;

