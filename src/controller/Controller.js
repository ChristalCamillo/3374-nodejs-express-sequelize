// Mais uma classe genérica para intermédio, parecida com service e se comunicando com ele

class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  async pegaTodosOsDados(req, res){
    try{
      const listaDeRegistro = await database.Pessoa.findAll();
      return res.status(200).json(listaDeRegistro);
    }catch (erro) {
      //tratamento de erro
    }
  }
}

module.exports = Controller;

