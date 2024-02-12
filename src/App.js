import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProduitA from './Components/ProduitA';
import Home from './Components/Home';
import ProduitB from './Components/ProduitB';
import Detail from './Components/Detail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/produitA' element={<ProduitA />} />
        <Route path='/produitB' element = {<ProduitB/>}/>
        <Route path='/produitB/:id' element={<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App;
