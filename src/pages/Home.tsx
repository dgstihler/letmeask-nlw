import './../styles/auth.scss';

import illustration from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIcon from '../assets/images/google-icon.svg';

import { Button } from '../components/Button';

import { useHistory } from 'react-router-dom';
import { useAuth } from './../hooks/userAuth';


export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();

  const validateLogin = async () => {
    if (!user) {
      await signInWithGoogle();
    }
    history.push('/rooms/new');
  }

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
          <button onClick={validateLogin} className="create-room">
            <img src={googleIcon} alt="Logo google" />
            Crie sua sala com o Google
          </button>
          <div className="separator" >ou entre em uma sala</div>
          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit" >Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}