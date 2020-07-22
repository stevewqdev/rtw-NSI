import React, { Component } from 'react'

export default class MakeDonation extends Component {

    componentDidMount(){
    }

    render() {
        return (
           <main className="donation__page">
                <div className="hero__container">
                    <div className="stm__background">
                        <svg xmlns="http://www.w3.org/2000/svg" width="768" height="561.153" viewBox="0 0 768 561.153">
                            <g id="Grupo_1933" data-name="Grupo 1933" transform="translate(-1034.838 -263.064)">
                                <g id="Grupo_1934" data-name="Grupo 1934" transform="translate(1034.838 263.064)">
                                <path id="Trazado_2304" data-name="Trazado 2304" d="M1134.227,645.159l-125.69-125.513-86.07,86.3a8.808,8.808,0,0,1-12.455.033l-.032-.033-55.332-55.129a8.833,8.833,0,0,1,0-12.488l93.074-92.821L807.248,305.152q-3.132-3.354-6.491-6.486l-.782-.781-.126-.064A132.538,132.538,0,0,0,620.7,493.193q20.263,21.662,42.574,41.277L947.75,818.948a17.918,17.918,0,0,0,25.342.04l.04-.04,22.718-22.59L899.22,699.7l19.645-19.366,89.851,90.08a8.959,8.959,0,0,0,12.67.02l.021-.02,16.32-16.347a8.934,8.934,0,0,0,.056-12.635l-.056-.056L947.648,651.5l19.391-19.417,89.927,90.105a8.934,8.934,0,0,0,12.635.056l.056-.056L1085.928,706a8.961,8.961,0,0,0,.02-12.671l-.02-.02-90-90,19.088-19.7,90.511,90.333a8.934,8.934,0,0,0,12.635.056l.056-.056,16.015-16.092a8.935,8.935,0,0,0,.056-12.635Z" transform="translate(-577.838 -263.064)" fill="#f7f7f7"/>
                                <path id="Trazado_2305" data-name="Trazado 2305" d="M1317.328,478.3a132.539,132.539,0,0,0-205.044-167.964L897.694,538.76a8.96,8.96,0,0,0-.021,12.671l.021.02,16.117,16.143a8.96,8.96,0,0,0,12.671.02l.02-.02,85.969-86.3,138.912,138.636a17.9,17.9,0,0,0,25.306.076c.025-.026.051-.051.076-.076l127.709-127.71q3.035-2.85,5.886-5.887l7.551-7.551Z" transform="translate(-578.291 -263.064)" fill="#f7f7f7"/>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-6 hero__content">
                                <div className="hero__content__title">
                                    <h2
                                        className={`poppins bold xxmd teal-text`}
                                        dangerouslySetInnerHTML={{ __html: this.props.acfData.acf.title }}
                                    />
                                </div>
                                <div className="hero__content__description">
                                    <div
                                        className={`md poppins medium teal-text`}
                                        dangerouslySetInnerHTML={{ __html: this.props.acfData.acf.description }}
                                    />
                                </div>
                                <div className="donation__form">
                                    <img src={this.props.acfData.acf.donation_image} alt="GIVE IN HONOUR OF SOMEONE"/>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6 hero__content__image">
                                <img src={this.props.pageData.better_featured_image.source_url} alt="The Experience Image"/>
                            </div>
                        </div>
                    </div>
                </div>
           </main>
        )
    }
}

// This gets called on every request
export async function getServerSideProps() {
    const res = await fetch(`${process.env.ProjectUrl}/wp-json/acf/v3/pages/192`)
    const acfData = await res.json()
  
    const resData = await fetch(`${process.env.ProjectUrl}/wp-json/wp/v2/pages/192`)
    const pageData = await resData.json()

    return {
        props: {
          acfData,
          pageData,
        },
    }
  }
  
  
  