import salad from '../assets/greek salad.jpg';
import bruschetta from '../assets/bruchetta.svg';
import dessert from '../assets/lemon dessert.jpg';

function Specials() {
  return (
    <main className='specials container'>
      <div className='specials-header'>
        <h1>This weeks specials!</h1>
        <button className='button'>Online Menu</button>
      </div>
      <div className='specials-body'>
        <div className='specials-card'>
          <div className='specials-card-body'>
            <img src={salad} alt='chicken' height='150px' width='150px' />
            <h4>
              Greek salad <span>$12.99</span>
            </h4>
            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <h6>Order a delivery <i class="fa-solid fa-truck"></i></h6>
          </div>
        </div>
        <div className='specials-card'>
          <div className='specials-card-body'>
            <img src={bruschetta} alt='beef' height='150px' width='150px' />
            <h4>
              Bruschetta <span>$5.99</span>
            </h4>
            <p>
              Our Bruschetta is made from grilled bread that has beed smeared
              with garlic and seasoned with salt and olive oil.
            </p>

            <h6>Order a delivery <i class="fa-solid fa-truck"></i></h6>
           
          </div>
        </div>
        <div className='specials-card'>
          <div className='specials-card-body'>
            <img src={dessert} alt='seafood' height='150px' width='150px' />
            <h4>
              Lemon Dessert <span>$5.00</span>
            </h4>
            <p>
              This comes straight from grandma's recipe book, every last
              ingredient has been sourced and is as authentic as can be
              imagined.
            </p>
            <br />
            <h6>Order a delivery <i class="fa-solid fa-truck"></i></h6>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Specials;
