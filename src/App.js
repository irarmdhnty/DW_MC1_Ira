import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from './Pages/Home';
import Detail from './Pages/Detail';

function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/detail' element={<Detail/>} />
    </Routes>
    </Router>
    
  );
}

export default App;
