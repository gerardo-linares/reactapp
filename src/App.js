
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
<>
<Router>
  <Navbar/>
  <ItemListContainer greeting={"Bienvenida/o a mi App React"}/>
</Router>
</>
  );
}

export default App;
