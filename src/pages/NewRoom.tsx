import illustration from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";

import "../styles/auth.scss";
import { Button } from "../component/Button";

export function NewRoom() {
  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustration}
          alt="Ilustração simbolizando troca de perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao vivo </strong>
        <p>Tire as dúvidas de sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <h2>Criar uma nova sala</h2>

          <form action="">
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala já existente? <a href="#">Clique aqui</a>{" "}
          </p>
        </div>
      </main>
    </div>
  );
}
