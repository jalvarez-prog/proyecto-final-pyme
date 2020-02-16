import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home () {
  return (
    <div className='App'>
      <>
        <Carousel className='row-full'>
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
      </>

      <div className='d-flex p-2' id='botonera'>
        <InputGroup className='col-sm'>
          <InputGroup.Prepend>
            <DropdownButton id='dropdown-basic-button' title='Conectar'>
              <Dropdown.Item href='#/action-1'>Vender</Dropdown.Item>
              <Dropdown.Item href='#/action-2'>Comprar</Dropdown.Item>
              <Dropdown.Item href='#/action-3'>Conectar</Dropdown.Item>
            </DropdownButton>

            <DropdownButton
              id='dropdown-basic-button'
              title='Elije tus productos'
            >
              <Dropdown.Item href='#/action-1'>Frutas</Dropdown.Item>
              <Dropdown.Item href='#/action-2'>Verduras</Dropdown.Item>
              <Dropdown.Item href='#/action-3'>Carne</Dropdown.Item>
            </DropdownButton>
          </InputGroup.Prepend>
          <FormControl
            aria-describedby='basic-addon1'
            placeholder='Que buscas?'
            aria-label='Que Buscas?'
          />

          <InputGroup.Checkbox aria-label='Solo Productos Nuevos' />
          <Button variant='primary'>Buscar</Button>
        </InputGroup>
      </div>

      <div className='container-fluid'>
        <Breadcrumb>
          <Breadcrumb.Item href='#'>Buscar por Codigo</Breadcrumb.Item>
          <Breadcrumb.Item href='#'>Buscar por Mapa</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <Container className='container'>
        <Container className='container-fluid text-center' id='mensaje1'>
          <h2>
            Encuentra a los mejores emprendedores y conecta con ellos para
            beneficiar tu PYME{' '}
          </h2>
        </Container>

        <Container id='mensaje2'>
          <h3>PYMES Destacadas </h3>
        </Container>

        <Container id='cards'>
          <div className='card-deck'>
            <div className='card'>
              <img
                src='https://dummyimage.com/600x400/000/fff'
                className='card-img-top'
                alt='...'
              />
              <div className='card-body'>
                <h5 className='card-title'>Card title</h5>
                <p className='card-text'>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div className='card-footer'>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </div>
            </div>
            <div className='card'>
              <img
                src='https://cdn.ticbeat.com/src/uploads/2017/11/matema%CC%81ticas-e-informa%CC%81tico-600x400.jpg'
                className='card-img-top'
                alt='...'
              />
              <div className='card-body'>
                <h5 className='card-title'>Card title</h5>
                <p className='card-text'>
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
              </div>
              <div className='card-footer'>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </div>
            </div>
            <div className='card'>
              <img
                src='https://cdn.ticbeat.com/src/uploads/2017/11/matema%CC%81ticas-e-informa%CC%81tico-600x400.jpg'
                class='card-img-top'
                alt='...'
              />
              <div className='card-body'>
                <h5 className='card-title'>Card title</h5>
                <p className='card-text'>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
              </div>
              <div className='card-footer'>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
        </Container>

        <Container id='mensaje3'>
          <h3>PYMES por Region </h3>
        </Container>

        <Container id='thumbnail'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-2 col-sm-12'>
                <img
                  src='https://www.denovios.cl/wp-content/uploads/2017/11/Norte-2-600x400.gif'
                  class='card-img-top'
                  alt='...'
                />
              </div>
              <div className='col-md-2 col-sm-12'>
                <img
                  src='https://dummyimage.com/600x400/000/fff'
                  class='card-img-top'
                  alt='...'
                />
              </div>
              <div className='col-md-2 col-sm-12'>
                <img
                  src='https://dummyimage.com/600x400/000/fff'
                  class='card-img-top'
                  alt='...'
                />
              </div>
              <div className='col-md-2 col-sm-12'>
                <img
                  src='https://dummyimage.com/600x400/000/fff'
                  class='card-img-top'
                  alt='...'
                />
              </div>
              <div className='col-md-2 col-sm-12'>
                <img
                  src='https://dummyimage.com/600x400/000/fff'
                  class='card-img-top'
                  alt='...'
                />
              </div>
              <div className='col-md-2 col-sm-12'>
                <img
                  src='https://dummyimage.com/600x400/000/fff'
                  class='card-img-top'
                  alt='...'
                />
              </div>
            </div>
          </div>
        </Container>

        <Container id='banner'>
          <img
            src='https://www.ccicolombia.com/wp-content/uploads/2018/02/INFORMACION-COMERCIAL-1000x400.png'
            alt='...'
          />
        </Container>

        <Container id='mensaje4'>
          <h3>Lo más buscado </h3>
        </Container>

        <Container id='footer'>
          <div className='row'>
            <div className='col-sm-12'>Lorem</div>
            <div className='col-sm-12'>col</div>
            <div className='col-sm-12'>col</div>
          </div>
        </Container>
      </Container>
    </div>
  )
}
