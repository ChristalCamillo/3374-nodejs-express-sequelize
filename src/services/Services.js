// Camada intermediária que pega o modelo e aplica regras do negócio, fazendo a interface com o controller,

//de forma que Modelo e Controller n conversem diretamente. Também é uma camada mais genérica, servindo a todos os Models

const dataSource = require('../models');

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }

  async pegaTodosOsRegistros() {
    return dataSource[this.model].findAll();
  }

  // async pegaUmRegistroPorId(id) {
  //   return dataSource[this.model].findByPk(id);
  // }

  // async criaRegistro(dadosDoRegistro) {
  //   return dataSource[this.model].create(dadosDoRegistro);
  // }

  async atualizaRegistro(dadosAtualizados, id) {
    const listadeRegistrosAtualizados = dataSource[this.model].update(
      dadosAtualizados,
      {
        //aqui estamos passando a propriedade na tabela id e o segundo id vem do parametro passado na req
        where: { id: id },
      }
    );
    // se o indice 0 for igual a 0, significa q nenhuma linha foi atualizada
    if (listadeRegistrosAtualizados[0] === 0) {
      return false;
    }
    return true;
  }

  // async excluiRegistro(id) {
  //   return dataSource[this.model].destroy({ where: { id: id } });
  // }
}

module.exports = Services;
