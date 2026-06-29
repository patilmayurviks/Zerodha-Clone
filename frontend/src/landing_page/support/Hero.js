import React from 'react';
function Hero() {
    return (
         <section className="container-fluid" id="supportHero">
      <div className="p-2 " id="supportWrapper">
        <h2 className='mt-5'>Support Portal</h2>
        <a href="" className='mt-5 ml-3 fs-3'>Track Tickets</a>
      </div>
      <div className="row p-5 m-3">
        <div className="col-6 p-3">
          <h1 className="fs-3 mb-5">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" />
          <br />
          
          <a href="" className='me-3'>Track account opening</a>
          <a href="" className='me-3'>Track segment activation</a>
          <a href="" className='me-3'>Intraday margins</a>
          <a href="" className='me-3'>Kite user manual</a>
        </div>
        <div className="col-6 p-3 ml-5 ">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section> 
        
     );
}

export default Hero;