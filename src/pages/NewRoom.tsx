import illustration from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIcon from '../assets/images/google-icon.svg';

import './../styles/auth.scss';
import { Button } from '../components/Button';

export function NewRoom() {
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
          <h2>Criar um nova sala</h2>
          <form>
            <input type="text" placeholder="Nome a sala" />
            <Button type="submit" >Criar sala</Button>
          </form>
          <p>Quer entrar em uma sala existente <a href="#">Clique aqui</a> </p>
        </div>
      </main>
    </div>
  );
}