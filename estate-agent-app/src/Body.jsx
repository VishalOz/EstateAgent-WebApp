import './Body.css';
import { useNavigate } from 'react-router-dom';

function Body() {
  const navigate = useNavigate();
  return (
    <div className="body">
      <div className="left-side-content">
        <h3>Looking for the perfect home?</h3>
        <p>
          Your journey to the perfect property starts here.
          Whether you're buying your first home, upgrading your lifestyle,
          or investing in real estate, we're here to guide you every step of the way.
          
          Discover listings tailored to your goals, insights from industry experts,
          and a seamless experience designed with you in mind.
          
          At Home Lands, your future begins with the right foundation.
          Let’s find your place together.
        </p>
        <button className="searchBtn" 
        onClick = { () => navigate('/page') }
        >Search</button>
      </div>
    </div>
  );
}

export default Body;
