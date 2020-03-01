import React from 'react'
import Container from 'react-bootstrap/Container'
export default function Thumbnail () {
    return (

        <Container>
        <div id='thumbnail' className='container'>
          <div className='row'>
            <div className='col'>
              <div className='hover hover-5 text-white'>
                <img
                  src='https://www.aricaldia.cl/wp-content/uploads/2017/06/Arica_turismo.jpg'
                  className='img-fluid'
                  alt='...'
                />
                <div className='hover-overlay'></div>
                <div className='hover-5-content'>
                  <h3 className='hover-5-title text-uppercase font-weight-light mb-0'>
                    Image{' '}
                    <strong className='font-weight-bold text-white'>
                      Caption{' '}
                    </strong>
                    <span>Colorfull</span>
                  </h3>
                </div>
              </div>
            </div>

            <div className='col'>
              <div className='hover hover-5 text-white'>
                <img
                  src='https://www.vinadelmarchile.cl/uploads/2015/10/20151028180849-articulo-wulff-590x349.JPG'
                  className='img-fluid'
                  alt='...'
                />
                <div className='hover-overlay'></div>
                <div className='hover-5-content'>
                  <h3 className='hover-5-title text-uppercase font-weight-light mb-0'>
                    Image{' '}
                    <strong className='font-weight-bold text-white'>
                      Caption{' '}
                    </strong>
                    <span>Colorfull</span>
                  </h3>
                </div>
              </div>
            </div>

            <div className='w-100'></div>

            <div className='col'>
              <div className='hover hover-5 text-white'>
                <img
                  src='https://media.tacdn.com/media/attractions-splice-spp-674x446/07/3b/6f/49.jpg'
                  className='img-fluid'
                  alt='...'
                />
                <div className='hover-overlay'></div>
                <div className='hover-5-content'>
                  <h3 className='hover-5-title text-uppercase font-weight-light mb-0'>
                    Image{' '}
                    <strong className='font-weight-bold text-white'>
                      Caption{' '}
                    </strong>
                    <span>Colorfull</span>
                  </h3>
                </div>
              </div>
            </div>

            <div className='col'>
              <div className='hover hover-5 text-white'>
                <img
                  src='https://res.cloudinary.com/mhmd/image/upload/v1570786269/hoverSet-10_ccl30n.jpg'
                  className='img-fluid'
                  alt='...'
                />
                <div className='hover-overlay'></div>
                <div className='hover-5-content'>
                  <h3 className='hover-5-title text-uppercase font-weight-light mb-0'>
                    Image{' '}
                    <strong className='font-weight-bold text-white'>
                      Caption{' '}
                    </strong>
                    <span>Colorfull</span>
                  </h3>
                </div>
              </div>
            </div>

            <div className='w-100'></div>
            <div className='col'>Column 5</div>
            <div className='col'>Column 6</div>
            <div className='w-100'></div>
            <div className='col'>Column 7</div>
            <div className='col'>Column 8</div>
          </div>
        </div>
      </Container>

    )
}