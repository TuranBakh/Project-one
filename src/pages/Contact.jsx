import React from 'react'

const Contact = () => {
  return (
    <div className='contact '>
      <section className='contactSec'>
        <div className="container">
          <div className="row">
            <div className='col-lg-4 m-0 p-0'>
              <div className="contactinfo">
                <h3>
                  contact info
                </h3>
                <div className='contactbox'>
                  <div className="left"><i class="fa-regular fa-envelope"></i></div>
                  <div className="right">
                    <p>mail us</p>
                    <h4>info@bluebase.com</h4>
                    <h4>info@bluebase2.com</h4>
                  </div>
                </div>
                <div className='contactbox'>
                  <div className="left"><i class="fa-solid fa-phone"></i></div>
                  <div className="right">
                    <p>contact us</p>
                    <h4>+1 504-899-8221</h4>
                    <h4>+1 504-749-5456</h4>
                  </div>
                </div>
                <div className='contactbox'>
                  <div className="left"><i class="fa-solid fa-location-dot"></i></div>
                  <div className="right">
                    <p>location</p>
                    <h4>22 Baker Street, Texas <br />
                      United States <br />
                      W1U 3BW</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-8'>
              <div className="workcontact">
                <div className='workcontactitem'>
                  <h1>Let`s work <span>together.</span></h1>
                </div>
                <div className='forminput'>
                  <form action="">
                    <input type="text" size={40} placeholder='Name *' />
                    <input type="email" size={40} placeholder='Email *' />
                    <input type="text" size={40} placeholder='Your Subject *' />
                    <textarea name="" id="" cols="40" rows="10" placeholder='Your Message*'></textarea>
                    <button className='sendcontact btn' type='button'>Send Message</button>
                     </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    </div >
  )
}

export default Contact