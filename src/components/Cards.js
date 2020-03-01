import React from 'react'
export default function Cards () {
    return (

        <div className="container" id='cards'>
          <div className='row'>
            <div className='card col-lg-4 col-sm-12 col-xs-12'>
              <img
                src='https://dummyimage.com/600x400/000/fff'
                className='img-fluid'
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
            <div className='card col-lg-4 col-sm-12 col-xs-12'>
              <img
                src='https://cdn.ticbeat.com/src/uploads/2017/11/matema%CC%81ticas-e-informa%CC%81tico-600x400.jpg'
                className='img-fluid'
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
            <div className='card col-lg-4 col-sm-12 col-xs-12'>
              <img
                src='https://cdn.ticbeat.com/src/uploads/2017/11/matema%CC%81ticas-e-informa%CC%81tico-600x400.jpg'
                class='img-fluid'
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
        </div>



    )
}