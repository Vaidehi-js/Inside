import React from 'react'
import { Link } from 'react-router-dom'
import './front.css';



const Front = () => {
  const submitHandler =() =>{
    return
  }
  return (
    <div>
    {/*} <hr width="1" size="500" style="0 auto" />
      <div className="col-8 mx-auto pt-4" >
      <div className="card shadow">

        <div className="row">
          
          <div className="col-md-6">
          <div className="card-body">
          <h2>Get Your Dream Job with</h2>
          <h1> Top Programs</h1>
          <h3 className='temxt'>Learn with India's leading online school for working professionls</h3>

         

          <button className='bttn' color='blue'> Talk to an Expert</button>
          </div>
          </div>
          <div className="col-md-6">
          <div className="item2">
          </div>
          </div>
        </div>
      </div>
      <p className='para'> Need help choosing the right program? <button className='btn' style={{color: 'purple'}}> <Link to={'/https://assist.insaid.co/form/NQ=='}>Take a short quiz</Link></button></p>
  </div>*/}

  <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
  />
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.0.1/mdb.min.css"
    rel="stylesheet"
  />
  <div className="container">
    <div className="part1">
      <h2 className="get">Get Your Dream Job with</h2>
      <h1 className="top ">Top Programs</h1>
      <h5 className="learn">
        Learn with India's leading online school for working professionals
      </h5>{" "}
      <br />
      <button className="talk" onClick={submitHandler}> Talk to an Expert</button>
    </div>
    
    <div className="part2">
    <>
  {/* Carousel wrapper */}
  <div
    id="carouselBasicExample"
    className="carousel slide carousel-fade"
    data-mdb-ride="carousel"
  >
    {/* Indicators */}
    <div className="carousel-indicators">
      <button
        type="button"
        data-mdb-target="#carouselBasicExample"
        data-mdb-slide-to={0}
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      />
      <button
        type="button"
        data-mdb-target="#carouselBasicExample"
        data-mdb-slide-to={1}
        aria-label="Slide 2"
      />
      <button
        type="button"
        data-mdb-target="#carouselBasicExample"
        data-mdb-slide-to={2}
        aria-label="Slide 3"
      />
    </div>
    {/* Inner */}
    <div className="carousel-inner">
      {/* Single item */}
      <div className="carousel-item active">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp"
          className="d-block w-100"
          alt="Sunset Over the City"
        />
        <div className="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </div>
      {/* Single item */}
      <div className="carousel-item">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp"
          className="d-block w-100"
          alt="Canyon at Nigh"
        />
        <div className="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      {/* Single item */}
      <div className="carousel-item">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp"
          className="d-block w-100"
          alt="Cliff Above a Stormy Sea"
        />
        <div className="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </div>
      </div>
    </div>
    {/* Inner */}
    {/* Controls */}
    <button
      className="carousel-control-prev"
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  {/* Carousel wrapper */}
</>

    
  </div>
  </div>
</>

  </div>

  

  
  );
};


export default Front;