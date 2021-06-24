import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

import { AuthContextProvider } from './contexts/AuthContextProvider';

function App() {
  return (
    <BrowserRouter >
      <AuthContextProvider>
        <Route component={Home} path="/" exact></Route>
        <Route component={NewRoom} path="/rooms/new" exact></Route>
      </AuthContextProvider>

    </BrowserRouter>
  );
}

export default App;
