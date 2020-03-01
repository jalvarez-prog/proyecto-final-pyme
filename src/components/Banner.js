import React from 'react'
import Container from 'react-bootstrap/Container'
export default function Banner () {
    return (

        <Container
          className='d-none d-xl-block d-lg-block d-md-block d-sm-none d-xs-none'
          id='banner'
        >
          <img
            src='https://www.ccicolombia.com/wp-content/uploads/2018/02/INFORMACION-COMERCIAL-1000x400.png'
            alt='...'
          />
        </Container>

    )
}