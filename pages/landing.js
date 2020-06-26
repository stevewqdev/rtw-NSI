import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';

export default function Landing(props) {

function toggleSections(event){
  if (window.innerWidth > 600){
    document.querySelectorAll(".active.button__resources")[0].classList.remove("active");
    event.target.classList.add("active");
    let buttonsArray = [...document.querySelectorAll(".resources__item")];
    buttonsArray.map((element, index) => {
      element.classList.remove("active");
      return false; 
    })
    
    document.getElementById(`${event.target.getAttribute("data-id")}`).classList.add("active");
    
  }
  
  if (window.innerWidth < 600){
    event.target.classList.add("active");
    
    if(event.target.classList.contains("turn__arrow")){
      event.target.classList.remove("turn__arrow");
    }else{
      event.target.classList.add("turn__arrow");
    }
    
    document.querySelectorAll(".active.button__resources")[0].classList.remove("active");

    let dataId = event.target.getAttribute("data-id"); 
    let oldElement = document.querySelectorAll(`.resources__item.active`)[0]

    if(oldElement){
      if(oldElement.getAttribute("id") === dataId){
        oldElement.classList.remove("active");
      }else{
        document.getElementById(`${dataId}`).classList.add("active");
      }
    }else{
      document.getElementById(`${dataId}`).classList.add("active");
    }
  }
}

const [count, setCount] = useState(0);
const [countTwo, setCountTwo] = useState(0);

useEffect(() => {

  var Element = document.getElementById("fellowship");
  window.addEventListener("scroll",function() {
    var top = (window.pageYOffset || document.scrollTop) - (document.clientTop || 0)
    if (top > Element.offsetTop + 250) {
      setCount(100)
      setCountTwo(100000)
    }
    },
    { passive: true }
    )

    if (window.innerWidth < 600) {
     document.getElementById("r_one").classList.remove("active");
    }

});

return (
    <>  
      <section id="main" style={{"background" : "url(/landing/images/headr@2x.jpg)"}}>
        <div className="floating__svg">
          <img src="/landing/images/scroll.svg" alt="Scroll"/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
                {/* <p className=" sm medium">Serve the Moment</p> */}
                <h1
                  className={`poppins`}
                  dangerouslySetInnerHTML={{ __html: props.acfData.acf.sone_title }}
                />
                <p
                  className={`md poppins  sub__p`}
                  dangerouslySetInnerHTML={{ __html: props.acfData.acf.sone_subtitle }}
                />

            </div>
          </div>
        </div>
      </section>
      <section id="cause">
        <div className="container cause__one">
          <div className="row">
            
            <div className="col-lg-12 title">
              <h2
                className={`poppins bold teal-text text-left`}
                dangerouslySetInnerHTML={{ __html: props.acfData.acf.stwo_title }}
              />
            </div>
            <div className="col-md-12 col-lg-5 text">
              <div
                className={`md poppins light teal-text`}
                dangerouslySetInnerHTML={{ __html: props.acfData.acf.stwo_content }}
              />
            </div>
            <div className="col-md-12 col-lg-1"></div>
            <div className="col-md-12 col-lg-5 image">
              <img src="/landing/images/second@2x.jpg" alt=""/>  
            </div>
          </div>
        </div>
      </section>
      <section id="cause__new">
        <div className="container-fluid one__fluid">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-4 floating left d-flex align-items-end justify-content-center image ">
              <img src="/landing/images/third@2x.jpg" alt=""/>  
            </ div>
            <div className="col-sm-12 col-md-12 col-lg-8 left d-flex align-items-end justify-content-center"></ div>
          </div>
          <div className="container one__container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-4 left d-flex align-items-end justify-content-center">
                <div className="black__box teal">
                  <p
                    className={`slg poppins`}
                    dangerouslySetInnerHTML={{ __html: props.acfData.acf.stwo_square_content }}
                  />
                  <div className="divider --white"></div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-1 left d-flex align-items-end justify-content-center"></div>
              <div className="col-sm-12 col-md-12 col-lg-7 right">
                {/* <p className=" sm bold teal-text">THE CAUSE</p> */}
                <h2
                  className={`poppins bold teal-text`}
                  dangerouslySetInnerHTML={{ __html: props.acfData.acf.sthree_title }}
                />
                <div
                  className={`md poppins light teal-text`}
                  dangerouslySetInnerHTML={{ __html: props.acfData.acf.sthree_content }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="fellowship">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mobile__hidden image__top">
              <img src="/landing/images/third@2x.jpg" alt=""/>  
            </div>
            <div className="col-lg-12 mobile__hidden box__text">
              <div className="black__box teal">
                <p className="slg poppins">
                  Jewish wisdom teaches us <br/> that service, and caring for <br/> our neighbors, is an <br/> essential Jewish value. 
                </p>
                <div className="divider --white"></div>
              </div>
            </div>
            <div className="col-lg-8 two">
                <h2 className="poppins bold">
                  Are you a courageous and compassionate leader looking to make a difference this summer?
                </h2>
                <p className="md poppins">
                This is your moment. Beginning with a summer of service, we will mobilize young adults and college students, (ages 18-29) through a full-time stipended program from July 8th to August 7th. Serve the Moment Summer Corps Members will focus on addressing and learning about issues that stem from systemic racism and economic injustice, including food insecurity, educational needs, unemployment, social isolation relating to COVID-19, and other pressing needs.

                </p>
                <a href="https://www.tfaforms.com/4828744" target="_BLANK">
                  <button className="btn main-btn teal"><strong>WILL YOU JOIN US?</strong></button>
                </a>
            </div>
            <div className="col-lg-4"></div>
          </div>
        </div>
        <div className="container second">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 left ">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 top internal no__padding">
                  <p className="sxl teal-text  bold">We Plan To Have</p>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 left internal no__padding">
                  <h2 className={`poppins xxxl clear-teal bold `}>
                    <CountUp start={0} separator="," end={count} redraw={true} duration={5} delay={0}>
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} />
                        </div>
                      )}
                    </CountUp>
                  </h2>
                  <p className="sxl semibold text-uppercase teal-text">
                    CORPS <br/> MEMBERS
                  </p>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 right internal no__padding teal-text">
                  <h2 className="poppins xxxl clear-teal bold">
                    <CountUp start={0} separator="," end={countTwo} redraw={true} duration={5} delay={0}>
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} />
                        </div>
                      )}
                    </CountUp>
                  </h2>
                  <p className="sxl semibold text-uppercase teal-text">
                    ACTS OF SERVICE <br/> AND LEARNING
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 right no__padding">
              <div className="white__box">
                <div className="row">
                  <div className="col-lg-12 no__padding">
                    <h3 className="poppins bold">
                      Serve This Summer
                    </h3>
                    <p className="md medium">
                    From <span className="bold"> July 8th to August 7th, 100 Serve the Moment </span> Corps Members will volunteer across ten cities, and <span className="bold"> spend 32 hours/week </span> elevating their professional skills and accelerating their personal growth through virtual and in-person service with trusted partners. Corps Members will volunteer while learning and reflecting with their peers through trainings led by national leaders in the field with an intentional focus on social and systemic inequities (racial, food, and education), and addressing urgent needs through meaningful service rooted in Jewish values. Learn more <a href="https://docs.google.com/document/d/1Yau1LZ3-s-0SRhcDBBItVQON2IQeZFyccaDA65coMfY/edit" target="_BLANK" >here</a> and apply today!
                    </p>
                  </div>
                  <div className="col-sm-12 col-lg-6 no__padding">
                    <a href="https://www.tfaforms.com/4828744" target="_BLANK">
                      <button className="btn main-btn">JOIN US - APPLY NOW</button>
                    </a>
                  </div>
                  <div className="col-sm-12 col-lg-6 no__padding">
                    <a href="https://www.tfaforms.com/4831703" target="_BLANK">
                      <button className="btn main-btn">NOMINATE SOMEONE</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="who-we-are">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 no__padding">
              {/* <p className=" sm text-uppercase bold  teal-text">WHO WE ARE</p> */}
              <h2 className="poppins bold teal-text">
               Partners<br/>
                & Funders 
 
              </h2>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-2 "></div>
            <div className="col-sm-12 col-md-12 col-lg-10 logo__wrapper one d-flex flex-wrap ">
              
              <a href="https://www.amplifiergiving.org/">
              <div className="logo">
                <img src="/landing/logos/1.svg" alt="Partner Logo"/>
              </div>
              </a>
              <a href="https://avodah.net/">
              <div className="logo">
                <img src="/landing/logos/2.svg" alt="Partner Logo"/>
              </div>
              </a>
              <a href="http://basehillel.org/">
              <div className="logo">
                <img src="/landing/logos/3.svg" alt="Partner Logo"/>
              </div>
              </a>
              <a href="https://globaljews.org/">
              <div className="logo">
                <img src="/landing/logos/4.svg" alt="Partner Logo"/>
              </div>
              </a>
              <a href="https://www.birthrightisraelexcel.com/#/start">
              <div className="logo">
                <img src="/landing/logos/5.svg" alt="Partner Logo"/>
              </div>
              </a>
              <a href="https://challahforhunger.org/">
              <div className="logo">
                <img src="/landing/logos/6.svg" alt="Partner Logo"/>
              </div>
              </a>
              <a href="https://jewishcamp.org/">
              <div className="logo">
                <img src="/landing/logos/7.svg" alt="Partner Logo"/>
              </div>
              </a>
              <a href="https://www.hillel.org/">
              <div className="logo">
                <img src="/landing/logos/8.svg" alt="Partner Logo"/>
              </div>
              </a>
              <a href="https://www.israaid.org/">
              <div className="logo">
                <img src="/landing/logos/9.svg" alt="Partner Logo"/>
              </div>
              </a>
              <a href="https://jcca.org/">
              <div className="logo">
                <img src="/landing/logos/10.svg" alt="Partner Logo"/>
              </div>
              </a>
              <a href="https://www.jdcentwine.org/">
              <div className="logo">
                <img src="/landing/logos/11.svg" alt="Partner Logo"/>
              </div>
              </a>
              <a href="https://ieje.org/">
              <div className="logo">
                <img src="/landing/logos/12.svg" alt="Partner Logo"/>
              </div>
              </a>
              <a href="https://www.moishehouse.org/">
              <div className="logo">
                <img src="/landing/logos/13.svg" alt="Partner Logo"/>
              </div>
              </a>
              <a href="https://www.networkjhsa.org/">
              <div className="logo">
                <img src="/landing/logos/14.svg" alt="Partner Logo"/>
              </div>
              </a>
              <a href="https://onetable.org/">
              <div className="logo">
                <img src="/landing/logos/15.svg" alt="Partner Logo"/>
              </div>
              </a>
              <a href="https://werepair.org/">
              <div className="logo">
                <img src="/landing/logos/16.svg" alt="Partner Logo"/>
              </div>
              </a>
              <a href="http://www.bronfman.org/">
              <div className="logo">
                <img src="/landing/logos/17.svg" alt="Partner Logo"/>
              </div>
              </a>
              <a href="https://tivnu.org/">
              <div className="logo">
                <img src="/landing/logos/18.svg" alt="Partner Logo"/>
              </div>
              </a>
              <a href="https://www.emanuelsf.org/">
              <div className="logo">
                <img src="/landing/logos/19.svg" alt="Partner Logo"/>
              </div>
              </a>
              <a href="https://www.jewishfederations.org/">
              <div className="logo">
                <img src="/landing/logos/20.svg" alt="Partner Logo"/>
              </div>
              </a>
              <a href="https://www.cjp.org/">
              <div className="logo">
                <img src="/landing/logos/21.svg" alt="Partner Logo"/>
              </div>
              </a>
              <a href="https://www.jewishla.org/">
              <div className="logo">
                <img src="/landing/logos/22.svg" alt="Partner Logo"/>
              </div>
              </a>
              <a href="https://jewishdetroit.org/">
              <div className="logo">
                <img src="/landing/logos/23.svg" alt="Partner Logo"/>
              </div>
              </a>
              <a href="https://jvcbaltimore.org/">
              <div className="logo">
                <img src="/landing/logos/24.svg" className="no__padding" alt="Partner Logo"/>
              </div>
              </a>
              <a href="https://www.righteouspersons.org/">
              <div className="logo">
                <img src="/landing/logos/25.svg" alt="Partner Logo"/>
              </div>
              </a>
              <a href="https://jimjosephfoundation.org/">
              <div className="logo">
                <img src="/landing/logos/26.svg" alt="Partner Logo"/>
              </div>
              </a>
              <a href="https://maimonidesfund.org/">
              <div className="logo">
                <img src="/landing/logos/27.svg" alt="Partner Logo"/>
              </div>
              </a>
              <a href="https://www.schusterman.org/">
              <div className="logo">
                <img src="/landing/logos/28.svg" className="no__padding" alt="Partner Logo"/>
              </div>
              </a>

            </div>
          </div>
        </div>
      </section>
      <section id="resources">
        <div className="container resources">
          <div className="row">
            <div className="col-lg-12 title__wrapper">
              {/* <p className=" sm text-uppercase bold teal-text">MORE INFORMATION</p> */}
              <h2 className="poppins bold teal-text">
                Helpful Resources
              </h2>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 button__wrapper button__desktop">
              <button className="btn main-btn slg bold active button__resources" data-id="r_one" onClick={toggleSections}>
                Opportunities to serve with partners
              </button>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 button__wrapper button__desktop">
              <button className="btn main-btn slg bold gray-btn button__resources" data-id="r_two" onClick={toggleSections}>
                Educational resources
              </button>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-12 button__wrapper button__mobile">
              <button className="btn main-btn slg bold active button__resources" data-id="r_one" onClick={toggleSections}>
                Opportunities to serve with partners
              </button>
            </div>
            <div className="resources__item resource__one col-lg-12 active" id="r_one">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6 resource__wrapper">
                <a target="_BLANK" href="http://coronaconnects.org/">
                  <div className="resource">
                    <div className="begin resource__arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                        <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                      </svg>
                    </div>
                    <div className="inner__resource">
                      <h3 className="teal-text slg bold text-uppercase">Corona Connects </h3>
                      <p className="xsm bold text-uppercase gray">Connect to meaningful service opportunities online through  </p>
                    </div>
                    <div className="resource__arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                        <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                      </svg>
                    </div>
                  </div>
                  </a>
                  <a target="_BLANK" href="https://www.israaid.org/">
                  <div className="resource">
                    <div className="begin resource__arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                        <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                      </svg>
                    </div>
                    <div className="inner__resource">
                      <h3 className="teal-text slg bold text-uppercase">IsraAid</h3>
                      <p className="xsm bold text-uppercase gray">Support Global Emergency Response with IsraAid</p>
                    </div>
                    <div className="resource__arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                        <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                      </svg>
                    </div>
                  </div>
                  </a>
                  <a target="_BLANK" href="https://www.jdcentwine.org/thethread/">
                  <div className="resource">
                    <div className="begin resource__arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                        <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                      </svg>
                    </div>
                    <div className="inner__resource">
                      <h3 className="teal-text slg bold text-uppercase">JDC Entwine</h3>
                      <p className="xsm bold text-uppercase gray">Virtually Engage with Global Jewish Communities  through JDC Entwine’s The Thread  </p>
                    </div>
                    <div className="resource__arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                        <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                      </svg>
                    </div>
                  </div>
                  </a>
                  <a target="_BLANK" href="https://www.jewishchangemakers.org/">
                    <div className="resource">

                      <div className="begin resource__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                          <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                        </svg>
                      </div>
                      
                      <div className="inner__resource">
                        <h3 className="teal-text slg bold text-uppercase">Jewish Changemakers</h3>
                        <p className="xsm bold text-uppercase gray">Apply to be a part of the Jewish Changemakers Fellowship </p>
                      </div>

                      <div className="resource__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                          <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                        </svg>
                      </div>
                    </div>
                  </a>



                  <a target="_BLANK" href="https://jvcbaltimore.org/">
                  <div className="resource">
                    <div className="begin resource__arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                        <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                      </svg>
                    </div>
                    <div className="inner__resource">
                      <h3 className="teal-text slg bold text-uppercase">Jewish Volunteer Connection </h3>
                      <p className="xsm bold text-uppercase gray">Volunteer with the Jewish Volunteer Connection in Baltimore</p>
                    </div>
                    <div className="resource__arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                        <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                      </svg>
                    </div>
                  </div>
                  </a>
                  <a target="_BLANK" href="https://www.mitz.vote/">
                  <div className="resource">
                    <div className="begin resource__arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                        <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                      </svg>
                    </div>
                    <div className="inner__resource">
                      <h3 className="teal-text slg bold text-uppercase">Mitzvote</h3>
                      <p className="xsm bold text-uppercase gray">Get out the vote with Hillel International’s Mitzvote Campaign </p>
                    </div>
                    <div className="resource__arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                        <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                      </svg>
                    </div>
                  </div>
                  </a>
                  
                  


                </div>

                <div className="col-sm-12 col-md-12 col-lg-6 resource__wrapper">
                <a target="_BLANK" href="https://www.moishehouse.org/thelivingroom/">
                    <div className="resource">
                      <div className="begin resource__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                          <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                        </svg>
                      </div>
                      <div className="inner__resource">
                        <h3 className="teal-text slg bold text-uppercase">Moishe House’s Living Room </h3>
                        <p className="xsm bold text-uppercase gray">Connect Virtually in Moishe House’s Living Room</p>
                      </div>
                      <div className="resource__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                          <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                        </svg>
                      </div>
                    </div>
                  </a>
                  <a target="_BLANK" href="https://olamtogether.org/take-action/">
                    <div className="resource">
                      <div className="begin resource__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                          <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                        </svg>
                      </div>
                      <div className="inner__resource">
                        <h3 className="teal-text slg bold text-uppercase">OLAM </h3>
                        <p className="xsm bold text-uppercase gray">Take Action with OLAM</p>
                      </div>
                      <div className="resource__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                          <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                        </svg>
                      </div>
                    </div>
                  </a>
  
                  <a target="_BLANK" href="https://werepair.org/volunteer/">
                  <div className="resource">
                    <div className="begin resource__arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                        <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                      </svg>
                    </div>
                    <div className="inner__resource">
                      <h3 className="teal-text slg bold text-uppercase">Repair The World</h3>
                      <p className="xsm bold text-uppercase gray">Find Opportunities to Serve in Today on Repair the World’s Volunteer Page </p>
                    </div>
                    <div className="resource__arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                        <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                      </svg>
                    </div>
                  </div>
                  </a>
                  <a target="_BLANK" href="https://repairtheworld.catchafire.org/volunteer-now">
                  <div className="resource">
                    <div className="begin resource__arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                        <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                      </svg>
                    </div>
                    <div className="inner__resource">
                      <h3 className="teal-text slg bold text-uppercase">Skills for Impact </h3>
                      <p className="xsm bold text-uppercase gray">Use Your Professional Skills to Volunteer with Skills for Impact</p>
                    </div>
                    <div className="resource__arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                        <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                      </svg>
                    </div>
                  </div>
                  </a>
                <a target="_BLANK" href="https://www.ujafedny.org/volunteer/coronavirus">
                <div className="resource">
                  <div className="begin resource__arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                      <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                    </svg>
                  </div>
                  <div className="inner__resource">
                    <h3 className="teal-text slg bold text-uppercase">UJA Federation NY </h3>
                    <p className="xsm bold text-uppercase gray">Volunteer with UJA Federation NY</p>
                  </div>
                  <div className="resource__arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                      <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                    </svg>
                  </div>
                </div>
                </a>
                <a target="_BLANK" href="https://welcome.hillel.org/hillelathome/">
                  <div className="resource">
                    <div className="begin resource__arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                        <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                      </svg>
                    </div>
                    <div className="inner__resource">
                      <h3 className="teal-text slg bold text-uppercase">Volunteer with Hillel International’s </h3>
                      <p className="xsm bold text-uppercase gray">Hillel at Home</p>
                    </div>
                    <div className="resource__arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                        <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                      </svg>
                    </div>
                  </div>
                  </a>



 

    

                </div>

              </div>

            </div>
            
            <div className="col-sm-12 col-md-12 col-lg-12 button__wrapper button__mobile second">
              <button className="btn main-btn slg bold active button__resources" data-id="r_two" onClick={toggleSections}>
                Educational resources
              </button>
            </div>
            <div className="resources__item resource__two col-lg-12" id="r_two">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6 resource__wrapper">
                <a target="_BLANK" href="https://jewishcamp.org/making-mensches/wp-content/uploads/sites/6/2018/08/We-Are-the-World-Daf.pdf">
                  <div className="resource">
                    <div className="begin resource__arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                        <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                      </svg>
                    </div>
                    <div className="inner__resource">
                    <h3 className="teal-text slg bold text-uppercase">Community for Positive Change:“We are the World” Text Study</h3>
                    <p className="xsm bold text-uppercase gray">Foundation for Jewish Camp</p>
                    </div>
                    <div className="resource__arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                        <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                      </svg>
                    </div>
                  </div>
                  </a>

                  <a target="_BLANK" href="https://jewishcamp.org/wp-content/uploads/sites/5/2017/04/Guess_Who.pdf">
                  <div className="resource">
                                        <div className="begin resource__arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                        <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                      </svg>
                    </div>
                    <div className="inner__resource">
                    <h3 className="teal-text slg bold text-uppercase">​Exploring Bias and Healthy
Relationships</h3>
                    <p className="xsm bold text-uppercase gray">Foundation for Jewish Camp</p>
</div>
                    <div className="resource__arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                        <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                      </svg>
                    </div>
                  </div>
                  </a>
                  <a target="_BLANK" href="https://jewishcamp.org/campopedia/coffee-coffee-buzz-buzz-an-exploration-of-the-beverages-that-help-us-start-our-morning/">
                  <div className="resource">
                                        <div className="begin resource__arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                        <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                      </svg>
                    </div>
                    <div className="inner__resource">
                    <h3 className="teal-text slg bold text-uppercase">Fair Trade</h3>
                    <p className="xsm bold text-uppercase gray">Foundation for Jewish Camp</p>
                    </div>
                    <div className="resource__arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                        <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                      </svg>
                    </div>
                  </div>
                  </a>
                  <a target="_BLANK" href="https://jewishcamp.org/camp-professionals/immersive-learning/hineini-resources/">
                    <div className="resource">
                      <div className="begin resource__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                          <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                        </svg>
                      </div>
                      <div className="inner__resource">
                      <h3 className="teal-text slg bold text-uppercase">HINEINI: Resources to Explore How We Show Up</h3>
                      <p className="xsm bold text-uppercase gray">Foundation for Jewish Camp </p>
                      </div>
                      <div className="resource__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                          <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                        </svg>
                      </div>
                    </div>
                  </a>
                  <a target="_BLANK" href="https://jewishcamp.org/campopedia/occupy-mesopotamia/">
                  <div className="resource">
                                        <div className="begin resource__arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                        <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                      </svg>
                    </div>
                    <div className="inner__resource">
                    <h3 className="teal-text slg bold text-uppercase">Protesting and Equal Rights</h3>
                    <p className="xsm bold text-uppercase gray">Foundation for Jewish Camp</p>
                    </div>
                    <div className="resource__arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                        <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                      </svg>
                    </div>
                  </div>
                  </a>

                  <a target="_BLANK" href="https://jewishcamp.org/campopedia/spin-tzedakah-exploring-root-causes/">
                  <div className="resource">
                                        <div className="begin resource__arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                        <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                      </svg>
                    </div>
                    <div className="inner__resource">
                    <h3 className="teal-text slg bold text-uppercase">Social Justice: Exploring Root
Causes</h3>
                    <p className="xsm bold text-uppercase gray">Foundation for Jewish Camp</p>
</div>
                    <div className="resource__arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                        <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                      </svg>
                    </div>
                  </div>
                  </a>



                  <a target="_BLANK" href="https://jewishcamp.org/campopedia/dont-be-a-stranger-building-inclusive-camp-communities-rooted-in-justice/">
                  <div className="resource">
                                        <div className="begin resource__arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                        <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                      </svg>
                    </div>
                    <div className="inner__resource">
                    <h3 className="teal-text slg bold text-uppercase">Welcoming the Stranger and
Embracing Diversity</h3>
                    <p className="xsm bold text-uppercase gray">Foundation for Jewish Camp</p>
</div>
                    <div className="resource__arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                        <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                      </svg>
                    </div>
                  </div>
                  </a>





                  <a target="_BLANK" href="https://www.youtube.com/watch?v=RUeg6xwvo8I&list=PL29Gch2D8z5jsKwfcvij1S8ZFVNYlCnl7&index=6">
                    <div className="resource">
                      <div className="begin resource__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                          <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                        </svg>
                      </div>
                      <div className="inner__resource">
                      <h3 className="teal-text slg bold text-uppercase">Active Citizenship Training with Anya Kamenetz </h3>
                      <p className="xsm bold text-uppercase gray">The Bronfman Fellowship</p>
                      </div>
                      <div className="resource__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                          <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                        </svg>
                      </div>
                    </div>
                  </a>

                 




    
                </div>

                <div className="col-sm-12 col-md-12 col-lg-6 resource__wrapper">

                <a target="_BLANK" href="http://bronfman.org/Judith_Rosenbaum">
                    <div className="resource">
                                          <div className="begin resource__arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                        <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                      </svg>
                    </div>
                    <div className="inner__resource">
                    <div className="inner__resource">
                      <h3 className="teal-text slg bold text-uppercase">​​"Beyond tikkun olam: history, meaning, and relevance of Jewish activism in America"</h3></div>
                      <p className="xsm bold text-uppercase gray">The Bronfman Fellowship</p>
                    </div>
                      <div className="resource__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                          <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                        </svg>
                      </div>
                    </div>
                  </a>
            
                  <a target="_BLANK" href="http://bronfman.org/TalmudLive">
                  <div className="resource">
                                        <div className="begin resource__arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                        <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                      </svg>
                    </div>
                    <div className="inner__resource">
                    <h3 className="teal-text slg bold text-uppercase">​Talmud Live by Rabbi Mishael Zion</h3>

                    <p className="xsm bold text-uppercase gray">The Bronfman Fellowship</p>
                    </div>
                    <div className="resource__arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                        <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                      </svg>
                    </div>
                  </div>
                  </a>
                  <a target="_BLANK" href="https://www.youtube.com/watch?v=9vVGTTTeVDI&list=PL29Gch2D8z5jsKwfcvij1S8ZFVNYlCnl7&index=4&t=5s">
                    <div className="resource">
                      <div className="begin resource__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                          <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                        </svg>
                      </div>
                      <div className="inner__resource">
                        <h3 className="teal-text slg bold text-uppercase">​"The Right to Be Heard:
Jewish Drive for Justice, Past and Present" by Dr. James Loeffler</h3>
                        <p className="xsm bold text-uppercase gray">The Bronfman Fellowship</p>
                      </div>
                      <div className="resource__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                          <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                        </svg>
                      </div>
                    </div>
                  </a>
                  <a target="_BLANK" href="https://werepair.org/wp-content/uploads/2017/07/Racial-and-Food-Justice.pdf">
                  <div className="resource">
                                        <div className="begin resource__arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                        <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                      </svg>
                    </div>
                    <div className="inner__resource">
                    <h3 className="teal-text slg bold text-uppercase">​Food and Racial Justice</h3>
                    <p className="xsm bold text-uppercase gray">Repair the World</p>
                    </div>
                    <div className="resource__arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                        <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                      </svg>
                    </div>
                  </div>
                  </a>
                  <a target="_BLANK" href="https://docs.google.com/document/d/1dnzssGx3Ac1-GLJFVhp0Kz72tOZcVuPEXFn92cYb5zw/edit#">
                  <div className="resource">
                    <div className="begin resource__arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                        <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                      </svg>
                    </div>
                    <div className="inner__resource">
                    <h3 className="teal-text slg bold text-uppercase">​Leading an Effective Volunteer Program (LEVP)</h3>
                    <p className="xsm bold text-uppercase gray">Repair the World</p>
                    </div>
                    <div className="resource__arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                        <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                      </svg>
                    </div>
                  </div>
                  </a>
                  <a target="_BLANK" href="https://drive.google.com/file/d/0B4fOKYegSfuWVjg2V0cxMDNJV2c/view?usp=sharing">
                    <div className="resource">
                      <div className="begin resource__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                          <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                        </svg>
                      </div>
                      <div className="inner__resource">
                        <h3 className="teal-text slg bold text-uppercase">Organizing a Volunteer Opportunity</h3>
                        <p className="xsm bold text-uppercase gray">Repair the World</p>
                      </div>
                      <div className="resource__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                          <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                        </svg>
                      </div>
                    </div>
                  </a>

                  <a target="_BLANK" href="https://werepair.org/wp-content/uploads/2017/07/Role-of-Love-in-Service.pdf">
                  <div className="resource">
                                        <div className="begin resource__arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                        <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                      </svg>
                    </div>
                    <div className="inner__resource">
                    <h3 className="teal-text slg bold text-uppercase">Role of Love In Service</h3>
                    <p className="xsm bold text-uppercase gray">Repair the World</p>
                    </div>
                    <div className="resource__arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                        <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                      </svg>
                    </div>
                  </div>
                  </a>



                  <a target="_BLANK" href="https://werepair.org/wp-content/uploads/2017/07/Who-Belongs-in-Places-of-Learning.pdf">
                  <div className="resource">
                                        <div className="begin resource__arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                        <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                      </svg>
                    </div>
                    <div className="inner__resource">
                    <h3 className="teal-text slg bold text-uppercase">​Who Belongs in Places of Learning?</h3>
                    <p className="xsm bold text-uppercase gray">Repair the World</p>
                    </div>
                    <div className="resource__arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                        <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                      </svg>
                    </div>
                  </div>
                  </a>



                </div>

              </div>

            </div>            


          </div>
        </div>
      </section>
    </>
  )
}

// This gets called on every request
export async function getStaticProps() {
  const res = await fetch(`${process.env.ProjectUrl}/wp-json/acf/v3/pages/41`)
  const acfData = await res.json()

  return {
      props: {
        acfData,
      },
  }
}

