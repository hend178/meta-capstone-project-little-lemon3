function Testimonials() {
  return (
    <div className='testimonials container'>
      <div className='testimonials-header'>
        <h1>Testimonials</h1>
      </div>
      <div className='testimonials-body'>
        <div className='testimonials-card'>
          <div className='testimonials-card-body'>
            <h3>
              <i class='fa-solid fa-star' />
              <i class='fa-solid fa-star' />
              <i class='fa-solid fa-star' />
              <i class='fa-solid fa-star' />
              <i class='fa-solid fa-star' />
            </h3>
            <div className='testimonials-card-header'>
              <img
                src={require('../assets/testimonial_01.jpg')}
                alt=''
                width='50px'
                height='50px'
              />
              <h4>John Smith</h4>
            </div>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
              nulla. Minima maxime quam architecto quo inventore harum ex magni,
              dicta impedit."
            </p>
          </div>
        </div>
        <div className='testimonials-card'>
          <div className='testimonials-card-body'>
            <h3>
              <i class='fa-solid fa-star' />
              <i class='fa-solid fa-star' />
              <i class='fa-solid fa-star' />
              <i class='fa-solid fa-star' />
            </h3>
            <div className='testimonials-card-header'>
              <img
                src={require('../assets/testimonial_02.jpg')}
                alt=''
                width='50px'
                height='50px'
              />
              <h4>Tommy Atkins</h4>
            </div>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
              nulla. Minima maxime quam architecto quo inventore harum ex magni,
              dicta impedit."
            </p>
          </div>
        </div>
        <div className='testimonials-card'>
          <div className='testimonials-card-body'>
            <h3>
              <i class='fa-solid fa-star' />
              <i class='fa-solid fa-star' />
              <i class='fa-solid fa-star' />
            </h3>
            <div className='testimonials-card-header'>
              <img
                src={require('../assets/testimonial_03.jpg')}
                alt=''
                width='50px'
                height='50px'
              />
              <h4>Joe Bloggs</h4>
            </div>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
              nulla. Minima maxime quam architecto quo inventore harum ex magni,
              dicta impedit."
            </p>
          </div>
        </div>
        <div className='testimonials-card'>
          <div className='testimonials-card-body'>
            <h3>
              <i class='fa-solid fa-star' />
              <i class='fa-solid fa-star' />
              <i class='fa-solid fa-star' />
              <i class='fa-solid fa-star' />
              <i class='fa-solid fa-star' />
            </h3>
            <div className='testimonials-card-header'>
              <img
                src={require('../assets/testimonial_04.jpg')}
                alt=''
                width='50px'
                height='50px'
              />
              <h4>Tom Schmoe</h4>
            </div>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
              nulla. Minima maxime quam architecto quo inventore harum ex magni,
              dicta impedit."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
