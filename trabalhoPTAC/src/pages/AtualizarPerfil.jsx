import "../styles/globals.css";

function AlterarPerfil() {
  return (
    <div className="container">
      <div className="box">
        <h1 className="title">Alterar Perfil</h1>

        <div className="perfil-foto-container">
          <img src="../images/fotodeperfil.jpg" alt="Foto de perfil" className="perfil-foto"/>
          <button type="button" className="btn btn-secundario">Alterar Foto</button>
        </div>

        <form className="form">
          <div className="form-group">
            <label htmlFor="nome">Nome Completo:</label>
            <input type="text" id="nome"placeholder="Digite seu nome completo"/>
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" placeholder="Digite seu e-mail"/>
          </div>

          <div className="form-group">
            <label htmlFor="telefone">Telefone:</label>
            <input type="tel" id="telefone" placeholder="(00) 00000-0000"/>
          </div>

          <div className="form-group">
            <label htmlFor="senha">Nova Senha:</label>
            <input type="password" id="senha" placeholder="Digite uma nova senha"/>
          </div>

          <div className="form-group">
            <label htmlFor="confirmarSenha">Confirmar Senha:</label>
            <input type="password" id="confirmarSenha" placeholder="Confirme sua nova senha"/>
          </div>

          <div className="btn-group">
            <button type="button" className="btn btn-primario"> Salvar Alterações </button>
            <button type="button" className="btn btn-cancelar"> Cancelar </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AlterarPerfil;
