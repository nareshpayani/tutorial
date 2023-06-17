import {  BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Cart from './Components/Cart';

const App = () => {
  return (
        <Router>
            <Header />
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/cart' element={< Cart />}></Route>
          </Routes>
       </Router>
  );
}

export default App;
