
import { DisplayPrincipal } from './componentesGenerales/Displays';
import { Footer } from './componentesGenerales/Footer';
import { MenuHeader } from './componentesGenerales/MenuHeader';

import './index.css';
import { IndexSecciones } from './secciones';

function App() {
  return (
    <DisplayPrincipal className="App">
      <MenuHeader />
      
      <IndexSecciones />
  
      <Footer />
    </DisplayPrincipal>
  
  );
}

export default App;
