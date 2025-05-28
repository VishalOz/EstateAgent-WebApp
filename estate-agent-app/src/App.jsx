import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Nav.jsx';
import Body from './Body.jsx';
import Slider from './Slider.jsx';
import Footer from './Footer.jsx';
import SearchPage from '../src/second-page/SearchPage.jsx'; 
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="main-layout">
        <Routes>
          <Route path="/" element={
            <>
              <Body />
              <Slider />
            </>
          } />
          <Route path="/search" element={<SearchPage/>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;