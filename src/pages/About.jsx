import React from 'react'

const About = () => {
  return (
    <div className='about'>
      <section className='aboutSecOne'>
        <div className="container">
          <div className="row">
            <div className='col-lg-4 '>
              <div className='aboutimgbox'>
                <div className='aboutimg'>
                  <img src="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/me2.png" className='img-fluid' alt="" />
                </div>
              </div>
            </div>
            <div className='col-lg-8 centerbox'>
              <div className='col-lg-12 '>
                <div className='selfsummary'>
                  <img src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/star-2.png" alt="" />
                  <h1> Self-summary</h1>
                  <img src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/star-2.png" alt="" />
                </div>
              </div>
              <div className='col-lg-12'>
                <div className="abouthim">
                  <div className='abouthimitem'>
                    <h1>Daniel Henderson</h1>
                    <p>I am a San francisco-based product designer with a focus on web design, illustration, a visual development. I have a diverse range of experience having worked across various fields and industries.</p>

                  </div>
                </div>
              </div>
            </div>












          </div>

        </div>
      </section>
      <section className='aboutSecTwo'>
        <div className="container">
          <div className="row m-0 d-flex justify-content-between ">
            <div className='leftabout col-lg-6' >
              <h3 className='abouth3'>experience</h3>
              <ul className='aboutul' >
                <li>
                  <p className='p1'>2007 - 2017</p>
                  <h2>Framer Designer & Developer</h2>
                  <p className='p2 mb-5'>Bluebase Designs</p>
                </li>
                <li>
                  <p className='p1'>2017 - 2023</p>
                  <h2>Front-End Developer</h2>
                  <p className='p2 mb-0'>Larsen & Toubro</p>
                </li>
              </ul>
            </div>
            <div className='rightabout  col-lg-6'>
              <h3 className='abouth3'>education</h3>
              <ul className='aboutul'>
                <li>
                  <p className='p1'>2004 - 2007</p>
                  <h2>Bachelor Degree in Psychology</h2>
                  <p className='p2 mb-5'>University of California</p>
                </li>
                <li>
                  <p className='p1'>2007 - 2009</p>
                  <h2>Master Degree in Designing</h2>
                  <p className='p2 mb-0'>University of Texas</p>
                </li>
              </ul>
            </div>





          </div>
        </div>
      </section>
      <section className='aboutSecThree'>
        <div className="container">
          <div className="row ">
            <div className='col-lg-3'>
              <div className="profiles">
                <div className='profilesbox'>
                  <a href=""><i class="fa-brands fa-dribbble"></i></a>
                  <a href=""><i class="fa-brands fa-twitter"></i></a>
                </div>
                <div className='profilesinfo'>
                  <h4>stay with me</h4>
                  <h1>Profiles</h1>
                  <a href="/"><img src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg" alt="" className='stariconprofiles' /></a>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className="worktogetherabout">
                <div className='worktogetheraboutitem'>
                  <h1>Let`s <br />work <span>together.</span></h1>
                  <a href="/"><img src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg" alt="" className='stariconwt' /></a>
                </div>
              </div>

            </div>
            <div className='col-lg-3'>
              <div className="credentialsabout">
                <div className='signbox'>
                  <img src="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/sign.png" className='img-fluid' alt="" />
                </div>
                <div className='signinfo'>
                  <h4>more about me</h4>
                  <h1>Credentials</h1>
                  <a href="/"><img src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg" alt="" className='stariconsign' /></a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default About