// Mais uma classe genérica para intermédio, parecida com service e se comunicando com ele
//os controllers só lidam com req  e res, o resto é com os services

class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  async pegaTodosOsDados(req, res){
    try{
      const listaDeRegistro = await this.entidadeService.pegaTodosOsRegistros();
      return res.status(200).json(listaDeRegistro);
    }catch (erro) {
      //tratamento de erro
    }
  }

  async pegaUmPorId(req, res) {
    const { id } = req.params;
    try {
      const umRegistro = await this.entidadeService.pegaUmRegistroPorId(Number(id));
      return res.status(200).json(umRegistro);
    } catch (erro) {
      // erro
    }
  }

  async criaNovo(req, res) {
    const dadosParaCriacao = req.body;
    try {
      const novoRegistroCriado = await this.entidadeService.criaRegistro(dadosParaCriacao);
      return res.status(200).json(novoRegistroCriado);
    } catch (erro) {
      // erro
    }
  }

  //o Controller passa as coisas pro Service que passa pro Model

  async atualiza(req, res) {
    //lembrando: {id} é um objeto
    const { id } = req.params;
    const dadosAtualizados = req.body;
    try {
      //isUpdated - quando o metodo/propriedade começa com Is, normalmente usa true/false
      //Lembrando também de converter (Number), pois TUDO Q CHEGA DA REQ É STRING
      const foiAtualizado = await this.entidadeService.atualizaRegistro(dadosAtualizados, Number(id));
      if (!foiAtualizado) {
        return res.status(400).json({ mensagem: 'registro não foi atualizado' });
      }
      return res.status(200).json({ mensagem: 'Atualizado com sucesso' });
    } catch (erro) {
      // erro
    }
  }

  async exclui(req, res) {
    const { id } = req.params;
    try {
      await this.entidadeService.excluiRegistro(Number(id));
      return res.status(200).json({ mensagem: `id ${id} deletado` });


    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = Controller;

