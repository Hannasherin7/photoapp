import logo from './logo.svg';
import './App.css';
import { AddPhoto } from './components/AddPhoto';
import { SearchPhoto } from './components/SearchPhoto';
import { DeletePhoto } from './components/DeletePhoto';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ViewAll } from './components/ViewAll';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={(<AddPhoto/>)}/>
      <Route path='/Search'element={(<SearchPhoto/>)}/>
      <Route path='/Delete'element={(<DeletePhoto/>)}/>
      <Route path='/ViewAll'element={(<ViewAll/>)}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
