import { Route, Routes } from 'react-router';
import './App.css';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Home from './components/Home';
import NavBar from './components/NavBar';

const App = () => (
  <div>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </div>
);

export default App;
