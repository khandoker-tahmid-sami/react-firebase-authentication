import { Routes, Route } from 'react-router-dom';
import './App.css';
import SignUpFom from './components/SignUpFom';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SignUpFom/>}/>
        <Route path='login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
