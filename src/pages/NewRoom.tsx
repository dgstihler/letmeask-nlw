import illustration from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import './../styles/auth.scss';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { useAuth } from './../hooks/userAuth';


export function NewRoom() {

  const { user } = useAuth();
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
          <h1>{user?.name}</h1>
          <h2>Criar uma nova sala</h2>
          <form>
            <input type="text" placeholder="Nome a sala" />
            <Button type="submit" >Criar sala</Button>
          </form>
          <p>Quer entrar em uma sala existente <Link to="/" >Clique aqui</Link> </p>
        </div>
      </main>
    </div>
  );
}