import Head from 'next/head'
import React, { useState, useEffect } from 'react';

export default function Home(props) {
  const customStyles = 
  `
  .header{
    background: black;
  }
  `;

  return (
    <>
      <Head>
        <style>{customStyles}</style>
      </Head>
      <main className="home__page">
        <section id="main" style={{"background" : `url(${props.pageData.better_featured_image.source_url})`}}>
          <div className="floating__svg">
            <img loading="lazy" src="/landing/images/scroll.svg" alt="Scroll"/>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                  <h1
                    className={`poppins bold`}
                    dangerouslySetInnerHTML={{ __html: props.acfData.acf.title }}
                  />
                  <h2
                    className={` poppins  sub__p xxl semibold` }
                    dangerouslySetInnerHTML={{ __html: props.acfData.acf.subtitle }}
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
                dangerouslySetInnerHTML={{ __html: props.acfData.acf.title_two }}
              />
            </div>
            <div className="col-md-12 col-lg-5 text">
              <div
                className={`md poppins medium teal-text`}
                dangerouslySetInnerHTML={{ __html: props.acfData.acf.subtitle_two }}
              />
            </div>
            <div className="col-md-12 col-lg-1"></div>
            <div className="col-md-12 col-lg-5 image">
              
              <img loading="lazy" src={props.acfData.acf.image_two} alt=""/>  
            </div>
          </div>
        </div>
      </section>

        <section id="extraordinary__moment">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 title">
                <h2
                  className={`poppins bold white-text text-center`}
                  dangerouslySetInnerHTML={{ __html: props.acfData.acf.title_third }}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="movement__steps">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {
                  props.acfData.acf.work_steps.map((step, index ) => 
                    (
                      <div className="movement__step" key={index}>
                        <img loading="lazy" className={'icon'} src={step.icon} alt={`${step.title} icon`}/>
                        <div className="line__divider"></div>
                        <h3 className={`title poppins bold  xmd teal-text text-uppercase`}>{step.title}</h3>
                        <div
                          className={`description poppins medium teal-text slg text-center`}
                          dangerouslySetInnerHTML={{ __html: step.description }}
                        />
                      </div>
                    )
                  )
                }
              </div>
            </div>
          </div>
        </section>

        <section id="join__us">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 d-flex title justify-content-center align-items-center flex-column">
                <h2
                  className={`poppins bold teal-text text-center`}
                  dangerouslySetInnerHTML={{ __html: props.acfData.acf.title_four }}
                />
                <div
                  className={`description poppins medium teal-text slg text-center`}
                  dangerouslySetInnerHTML={{ __html: props.acfData.acf.description_four }}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="we__serve__because">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 d-flex title justify-content-center align-items-center flex-column">
                <h2
                  className={`poppins bold teal-text text-center`}
                  dangerouslySetInnerHTML={{ __html: props.acfData.acf.title_five }}
                />
                <div
                  className={`description poppins medium teal-text slg text-center`}
                  dangerouslySetInnerHTML={{ __html: props.acfData.acf.description }}
                />
                <div className="divider__line"></div>
              </div>
            </div>
            <div className="row reasons__we__serve d-flex justify-content-center align-items-center">
                {
                  props.acfData.acf.we_serve_reasons.map((reason, index) => (
                    <div className="col-sm-12 col-md-6 col-lg-4 reason__we__serve" key={index}>
                      <img loading="lazy" src={reason.image} alt={reason.reason}/>
                      <p
                        className={`xl poppins text-uppercase teal-text bold text-center`}
                        dangerouslySetInnerHTML={{ __html: reason.reason }}
                      />

                    </div>
                  ))
                }
            </div>
          </div>
        </section>

        <section id="in__the__press">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2
                  className={`poppins bold white-text text-center`}
                  dangerouslySetInnerHTML={{ __html: props.acfData.acf.title_six }}
                />
              </div>
              {
                props.postData.map((post, index) => (
                  <div className="press__post col-sm-12 col-md-6 col-lg-6" key={index}>
                    <p className="title poppins teal-text bold xxl">
                      {post.title.rendered}
                    </p>
                    <p className="title poppins gray-text bold text-uppercase sm">
                      {
                        post.acf.subtitle.length > 50 
                        ? post.acf.subtitle.substr(0,50) + `...`
                        : post.acf.subtitle
                      }
                    </p>
                    <div className="press__post__arrow">
                      <a href={post.acf.press_external_link}>
                        <span className="absolute__name">{post.title.rendered}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                          <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fill="#015d5d" fillRule="evenodd"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </section>

      </main>
    </>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  const res = await fetch(`${process.env.ProjectUrl}/wp-json/acf/v3/pages/184`)
  const acfData = await res.json()

  const resData = await fetch(`${process.env.ProjectUrl}/wp-json/wp/v2/pages/184`)
  const pageData = await resData.json()

  const resDataPost = await fetch(`${process.env.ProjectUrl}/wp-json/wp/v2/posts?per_page=6`)
  const postData = await resDataPost.json()

  return {
      props: {
        acfData,
        pageData,
        postData
      },
  }
}


