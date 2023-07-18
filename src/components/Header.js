import header from '../assets/restauranfood.jpg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <div className='header-body container'>
        <section>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediteraneean Restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <br />
          <Link to='/booking'>
            <button className='button'>Reserve a Table</button>
          </Link>
        </section>
        <img src={header} alt='header' height='250px' width='250px' />
      </div>
    </header>
  );
}

export default Header;
