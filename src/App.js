
import { DisplayPrincipal } from './componentesGenerales/Displays';
import { MenuHeader } from './componentesGenerales/MenuHeader';

import './index.css';
import { IndexSecciones } from './secciones';

function App() {
  return (
    <DisplayPrincipal className="App">
      <MenuHeader />
      
      <IndexSecciones />
  
    </DisplayPrincipal>
  
  );
}

export default App;
