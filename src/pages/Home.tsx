import illustration from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";

import "../styles/auth.scss";

export function Home() {
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
        <div>
          <img src={logoImg} alt="Letmeask" />
          <button>
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
        </div>
        <form action="">
          <input type="text" placeholder="Digite o código da sala" />
          <button type="submit">Entrar na sala</button>
        </form>
      </main>
    </div>
  );
}