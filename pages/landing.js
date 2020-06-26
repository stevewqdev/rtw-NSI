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
      setCount(props.acfData.acf.sfour_data_section_block[0].data_number)
      setCountTwo(props.acfData.acf.sfour_data_section_block[1].data_number)
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
      <section id="main" style={{"background" : `url(${props.pageData.better_featured_image.source_url})`}}>
        <div className="floating__svg">
          <img src="/landing/images/scroll.svg" alt="Scroll"/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
                {/* <p className=" sm medium">Serve the Moment</p> */}
                <div
                  className={`poppins`}
                  dangerouslySetInnerHTML={{ __html: props.acfData.acf.sone_title }}
                />
                <div
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
              <div
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
              <img src={props.acfData.acf.stwo_image} alt=""/>  
            </div>
          </div>
        </div>
      </section>
      <section id="cause__new">
        <div className="container-fluid one__fluid">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-4 floating left d-flex align-items-end justify-content-center image ">
              <img src={props.acfData.acf.sthree_image} alt=""/>  
            </ div>
            <div className="col-sm-12 col-md-12 col-lg-8 left d-flex align-items-end justify-content-center"></ div>
          </div>
          <div className="container one__container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-4 left d-flex align-items-end justify-content-center">
                <div className="black__box teal">
                  <div
                    className={`slg poppins`}
                    dangerouslySetInnerHTML={{ __html: props.acfData.acf.stwo_square_content }}
                  />
                  <div className="divider --white"></div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-1 left d-flex align-items-end justify-content-center"></div>
              <div className="col-sm-12 col-md-12 col-lg-7 right">
                {/* <p className=" sm bold teal-text">THE CAUSE</p> */}
                <div
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
                <div
                  className={`poppins bold`}
                  dangerouslySetInnerHTML={{ __html: props.acfData.acf.sfour_title }}
                />
                <div
                  className={`md poppins`}
                  dangerouslySetInnerHTML={{ __html: props.acfData.acf.sfour_content }}
                />
                <a href={props.acfData.acf.sfour_button_link} target="_BLANK">
                  <button className="btn main-btn teal"><strong>{props.acfData.acf.sfour_button_text}</strong></button>
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
                  <div
                    className={`sxl teal-text  bold`}
                    dangerouslySetInnerHTML={{ __html: props.acfData.acf.sfour_data_section}}
                  />
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
                  <div
                    className={`sxl semibold text-uppercase teal-text`}
                    dangerouslySetInnerHTML={{ __html: props.acfData.acf.sfour_data_section_block[0].data_title}}
                  />
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
                  <div
                    className={`sxl semibold text-uppercase teal-text`}
                    dangerouslySetInnerHTML={{ __html: props.acfData.acf.sfour_data_section_block[1].data_title}}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 right no__padding">
              <div className="white__box">
                <div className="row">
                  <div className="col-lg-12 no__padding">
                    <div
                      className={`poppins bold`}
                      dangerouslySetInnerHTML={{ __html: props.acfData.acf.sfour_floating_title}}
                    />
                    <div
                      className={`md medium`}
                      dangerouslySetInnerHTML={{ __html: props.acfData.acf.sfour_floating_content}}
                    />
                  </div>
                  {
                    props.acfData.acf.sfour_floating_block_buttons.map((element, index) => 
                      <div className="col-sm-12 col-lg-6 no__padding" key={index}>
                        <a href={element.button_link} target="_BLANK">
                          <button className="btn main-btn">{element.button_text}</button>
                        </a>
                      </div>
                    )
                  }


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
              <div
                className={`poppins bold teal-text`}
                dangerouslySetInnerHTML={{ __html: props.acfData.acf.sfive_title}}
              />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-2 "></div>
            <div className="col-sm-12 col-md-12 col-lg-10 logo__wrapper one d-flex flex-wrap ">
              {
                props.acfData.acf.sfive_partners.map((partner, index) => 
                  <a href={partner.link} className="partner__repeater__element" key={index}>
                    <div className="logo">
                      <img src={partner.logo} alt="Partner Logo"/>
                    </div>
                  </a>
                )
              }
            </div>
          </div>
        </div>
      </section>
      <section id="resources">
        <div className="container resources">
          <div className="row">
            <div className="col-lg-12 title__wrapper">
              {/* <p className=" sm text-uppercase bold teal-text">MORE INFORMATION</p> */}
              <div
                className={`poppins bold teal-text`}
                dangerouslySetInnerHTML={{ __html: props.acfData.acf.ssix_title}}
              />
            </div>
            {
              props.acfData.acf.ssix_floating_block_buttons.map((element, index) =>
              <div className="col-sm-12 col-md-6 col-lg-6 button__wrapper button__desktop" key={index}>
                <button className={`btn main-btn slg bold button__resources ${index === 0 ? "active" : ""}`} data-id={`${index === 0 ? "r_one" : "r_two"}`} onClick={toggleSections}>
                  {element.button_text}
                </button>
              </div>
              )
            }

            {
              props.acfData.acf.ssix_floating_block_buttons.map((element, index) =>
              <>
              {
                index === 0
                ?
                <div className="col-sm-12 col-md-12 col-lg-12 button__wrapper button__mobile">
                  <button className={`btn main-btn slg bold button__resources ${index === 0 ? "active" : ""}`} data-id={`r_one`} onClick={toggleSections}>
                    {element.button_text}
                  </button>
                </div>
                : ""
              }
              </>
              )
            }

            <div className="resources__item resource__one col-lg-12 active" id="r_one">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6 resource__wrapper">
                {
                  props.acfData.acf.resources.map((element, index) =>
                    (
                      index <= 5
                      ?
                      <>
                        {
                          element.type === "opportunities"
                          ?
                          <>
                            <a target="_BLANK" href={element.link} key={index}>
                              <div className={`resource ${element.type}`}>
                                <div className="begin resource__arrow">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                                    <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                                  </svg>
                                </div>
                                <div className="inner__resource">
                                  <h3 className="teal-text slg bold text-uppercase">{element.title} </h3>
                                  <p className="xsm bold text-uppercase gray">{element.subtitle}</p>
                                </div>
                                <div className="resource__arrow">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                                    <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                                  </svg>
                                </div>
                              </div>
                            </a>
                          </>
                          :""
                        }
                      </>
                      :""
                    )
                  )
                }
                </div>


                <div className="col-sm-12 col-md-12 col-lg-6 resource__wrapper">
                  {
                    props.acfData.acf.resources.map((element, index) =>
                      (
                        index > 5 && index < 12
                        ?
                        <>
                          {
                            element.type === "opportunities"
                            ?
                            <>
                              <a target="_BLANK" href={element.link} key={index}>
                                <div className={`resource ${element.type}`}>
                                  <div className="begin resource__arrow">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                                      <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                                    </svg>
                                  </div>
                                  <div className="inner__resource">
                                    <h3 className="teal-text slg bold text-uppercase">{element.title} </h3>
                                    <p className="xsm bold text-uppercase gray">{element.subtitle}</p>
                                  </div>
                                  <div className="resource__arrow">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                                      <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                                    </svg>
                                  </div>
                                </div>
                              </a>
                            </>
                            :""
                          }
                        </>
                        :""
                      )
                    )
                  }
                </div>
              </div>
            </div>
            
            {
              props.acfData.acf.ssix_floating_block_buttons.map((element, index) =>
              <>
              {
                index === 1
                ?
                <div className="col-sm-12 col-md-12 col-lg-12 button__wrapper button__mobile">
                  <button className={`btn main-btn slg bold button__resources ${index === 0 ? "active" : ""}`} data-id={`r_two`} onClick={toggleSections}>
                    {element.button_text}
                  </button>
                </div>
                : ""
              }
              </>
              )
            }

            <div className="resources__item resource__two col-lg-12" id="r_two">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6 resource__wrapper">
                  {
                    props.acfData.acf.resources.map((element, index) =>
                      (
                        index > 11 && index < 20
                        ?
                        <>
                          {
                            element.type === "educational"
                            ?
                            <>
                              <a target="_BLANK" href={element.link} key={index}>
                                <div className={`resource ${element.type}`}>
                                  <div className="begin resource__arrow">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                                      <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                                    </svg>
                                  </div>
                                  <div className="inner__resource">
                                    <h3 className="teal-text slg bold text-uppercase">{element.title} </h3>
                                    <p className="xsm bold text-uppercase gray">{element.subtitle}</p>
                                  </div>
                                  <div className="resource__arrow">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                                      <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                                    </svg>
                                  </div>
                                </div>
                              </a>
                            </>
                            :""
                          }
                        </>
                        :""
                      )
                    )
                  }
                </div>

                <div className="col-sm-12 col-md-12 col-lg-6 resource__wrapper">
                {
                    props.acfData.acf.resources.map((element, index) =>
                      (
                        index > 19
                        ?
                        <>
                          {
                            element.type === "educational"
                            ?
                            <>
                              <a target="_BLANK" href={element.link} key={index}>
                                <div className={`resource ${element.type}`}>
                                  <div className="begin resource__arrow">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                                      <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                                    </svg>
                                  </div>
                                  <div className="inner__resource">
                                    <h3 className="teal-text slg bold text-uppercase">{element.title} </h3>
                                    <p className="xsm bold text-uppercase gray">{element.subtitle}</p>
                                  </div>
                                  <div className="resource__arrow">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                                      <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fillRule="evenodd"/>
                                    </svg>
                                  </div>
                                </div>
                              </a>
                            </>
                            :""
                          }
                        </>
                        :""
                      )
                    )
                  }
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

  const resData = await fetch(`${process.env.ProjectUrl}/wp-json/wp/v2/pages/41`)
  const pageData = await resData.json()

  return {
      props: {
        acfData,
        pageData,
      },
  }
}

