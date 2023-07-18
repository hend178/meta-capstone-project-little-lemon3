import Nav from '../components/Nav';
import { Link } from 'react-router-dom';

const ConfirmedBooking = () => {
  return (
    <div style={{textAlign: 'center'}}>
      <Nav />
      <h1>Booking confirmed!</h1>
      <Link to="/booking">
        <button className='button'>Back</button>
      </Link>
    </div>
  );
};

export default ConfirmedBooking;
