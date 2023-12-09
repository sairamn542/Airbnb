import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SearchPage from './Components/SearchPage'
import { BrowserRouter as Router, Route ,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        
        <Header />
        <Routes>
          <Route path='/search' element={<SearchPage />} />
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
