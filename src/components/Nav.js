import logo from '../assets/icons_assets/Logo.svg';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className='nav container'>
      <img src={logo} alt='logo' />
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li>Menu</li>
        <li>
          <NavLink to='/booking'>Reservations</NavLink>
        </li>
        <li>Order Online</li>
        <li>Login</li>
      </ul>
    </nav>
  );
}

export default Nav;
