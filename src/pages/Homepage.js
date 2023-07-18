import Header from '../components/Header';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Specials from '../components/Specials';
import Testimonials from '../components/Testimonials';

function Homepage() {
  return (
    <>
      <Nav />
      <Header />
      <Specials />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Homepage;
