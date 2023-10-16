import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';
import STATE from './context/state';
import { UserProvider } from './context/user-context';
import { Route, Routes } from 'react-router-dom';
import Trangchu from './pages/Trangchu';
import Lichtrinh from './pages/Lichtrinh';
import Timve from './pages/Timve';
import Lienhe from './pages/Lienhe';
import HomeNav from './layouts/HomeNav';

function App() {
  const [state,dispatch] = useReducer(STATE)
  return (
    <UserProvider value={{state,dispatch}}>
    <div className="App">
        <div>
          <HomeNav/>
          <Routes>
              <Route path='/' element={<Trangchu/>}/>
              <Route path='/lichtrinh' element={<Lichtrinh/>}/>
              <Route path='/timve' element={<Timve/>}/>
              <Route path='/lienhe' element={<Lienhe/>}/>
          </Routes>
        </div>
    </div>
    </UserProvider>
  );
}

export default App;
