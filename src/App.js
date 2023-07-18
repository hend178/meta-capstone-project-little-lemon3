import './App.css';
import About from './pages/About';
import Booking from './pages/Booking';
import Homepage from './pages/Homepage';
import ConfirmedBooking from '../src/components/ConfirmedBooking';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/confirmation' element={<ConfirmedBooking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
