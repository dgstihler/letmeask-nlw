import illustration from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIcon from '../assets/images/google-icon.svg';

export function Home() {
  return (
    <div>
      <aside>
        <img src={illustration} alt="Ilustração" />

      </aside>
      <main>
        <div>
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