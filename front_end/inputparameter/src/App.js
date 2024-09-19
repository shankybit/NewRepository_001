import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import NewPage from './components/NewPage';
import FormPage from './components/FormPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewPage />}></Route>
      </Routes>
      <Routes>
        <Route path="/add" element={<FormPage />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
