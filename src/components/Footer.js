import logo from '../assets/icons_assets/Logo.svg';
import { NavLink } from 'react-router-dom';


function Footer() {
  return (
    <footer className='footer container'>
      <img src={logo} alt='Logo' />
      <section>
        <h3>Menu</h3>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>Menu</li>
          <li>
            <NavLink to='booking'>Reservations</NavLink>
          </li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </section>
      <section>
        <h3>Contact</h3>
        <ul>
          <li>Address</li>
          <li>Phone number</li>
          <li>Email</li>
        </ul>
      </section>
      <section>
        <h3>Social media links</h3>
        <ul>
          <li>Facebook</li>
          <li>GitHub</li>
          <li>Twitter</li>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;


