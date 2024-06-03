import React from 'react'

const Home = () => {
  return (
    <div className='home'>
      <section className='homeSecOne'>
        <div className="container">
          <div className="row m-0">
            <div className='leftOne col-12 col-sm-12 col-md-6 col-lg-6' >
              <div className='imgbox'>
                <img src="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/me.png" className='img-fluid' alt="" />
              </div>
              <div className='info'>
                <h4>A Web Designer</h4>
                <h1>David Henderson.</h1>
                <p>I am a web designer based <br /> in San Francisco.</p>
                <a href="/"><img src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg" alt="" className='staricon' /></a>
              </div>
            </div>
            <div className='rightOne col-12 col-sm-12 col-md-6 col-lg-6'>
              <div className='topOne'>
                <div className='lastes'>
                  <img src="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/star1.svg" alt="" />
                  <p>Lastes work and <b>FEATURED</b></p>
                  <img src="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/star1.svg" alt="" />
                  <p>Lastes work and <b>FEATURED</b></p>
                  <img src="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/star1.svg" alt="" />
                </div>
              </div>
              <div className='bottomOne'>
                <div className='col-12 col-sm-12 col-md-6 col-lg-6 credentials'>
                  <div className='signbox'>
                    <img src="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/sign.png" className='img-fluid' alt="" />
                  </div>
                  <div className='signinfo'>
                    <h4>more about me</h4>
                    <h1>Credentials</h1>
                    <a href="/"><img src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg" alt="" className='stariconsign' /></a>
                  </div>
                </div>
                <div className='col-12 col-sm-12 col-md-6 col-lg-6 projects'>
                  <div className='projectsbox'>
                    <img src="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/my-works.png" className='img-fluid' alt="" />
                  </div>
                  <div className='projectsinfo'>
                    <h4>showcase</h4>
                    <h1>Projects</h1>
                    <a href="/"><img src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg" alt="" className='stariconprojects' /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='homeSecTwo'>
        <div className="container">
          <div className="row ">
            <div className='col-lg-3'>
              <div className="blog">
                <div className='blogbox'>
                  <img src="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/gfonts.png" className='img-fluid' alt="" />
                </div>
                <div className='bloginfo'>
                  <h4>blog</h4>
                  <h1>GFonts</h1>
                  <a href="/"><img src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg" alt="" className='stariconblog' /></a>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className="services">
                <div className='servicesbox'>
                  <a href=""><i class="fa-solid fa-camera"></i></a>
                  <a href=""><i class="fa-solid fa-pencil"></i></a>
                  <a href=""><i class="fa-solid fa-palette"></i></a>
                  <a href=""><i class="fa-solid fa-code"></i></a>
                </div>
                <div className='servicesinfo'>
                  <h4>specialization</h4>
                  <h1>Services Offering</h1>
                  <a href="/"><img src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg" alt="" className='stariconservices' /></a>
                </div>
              </div>

            </div>
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
          </div>
        </div>
      </section>
      <section className='homeSecThree'>
        <div className="container">
          <div className="row ">
            <div className='col-lg-6'>
              <div className="clients">
                <div className="clientsbox">
                  <div className='clientsitem'>
                    <h1>07</h1>
                    <p>years <br />experience</p>
                  </div>
                  <div className='clientsitem'>
                    <h1>+125</h1>
                    <p>clients <br />worldwide</p>
                  </div>
                  <div className='clientsitem'>
                    <h1>+210</h1>
                    <p>total <br />projects</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className="worktogether">
                <div className='worktogetheritem'>
                  <h1>Let`s <br />work <span>together.</span></h1>
                  <a href="/"><img src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg" alt="" className='stariconwt' /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home