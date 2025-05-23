import './App.css';
import NavBar from './Nav.jsx';
import Body from './Body.jsx';
import Slider from './Slider.jsx';
import Footer from './Footer.jsx';

function App() {
  return (
    <>
      <NavBar />
      <div className="main-layout">
        <Body />
        <Slider />
      </div>
      <Footer/>
      
    </>
  );
}

export default App;
