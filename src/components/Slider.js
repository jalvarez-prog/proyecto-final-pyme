import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
export default function Slider () {
    return (
        <Carousel className='row-full d-none d-xl-block d-lg-block d-md-block d-sm-none d-xs-none'>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='https://dummyimage.com/1600x340/ebf700/fff'
              alt='First slide'
            />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='https://dummyimage.com/1600x340/4dc706/fff'
              alt='Second slide'
            />

            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='https://www.northland.edu/wp-content/uploads/sites/2/2016/06/DesingLab2-1600x340.jpg'
              alt='Third slide'
            />

            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    )
}
