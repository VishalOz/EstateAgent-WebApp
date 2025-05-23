import './App.css';
import NavBar from './Nav.jsx';
import Body from './Body.jsx';
import Slider from './Slider.jsx';

function App() {
  return (
    <>
      <NavBar />
      <div className="main-layout">
        <Body />
        <Slider />
      </div>
    </>
  );
}

export default App;
