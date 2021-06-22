import illustration from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIcon from '../assets/images/google-icon.svg';

import './../styles/auth.scss';

export function Home() {
  return (
    <div id="page-aut">
      <aside>
        <img src={illustration} alt="Ilustração" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main >
        <div className="main-content">
          <img src={logoImg} alt="Logo let me ask" />
          <button>
            <img src={googleIcon} alt="Logo google" />
            Crie sua sala com o Google
          </button>
          <div>ou entre em uma sala</div>
          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <button type="submit">Entrar na sala</button>
          </form>
        </div>
      </main>
    </div>
  );
}