import React, { Component } from 'react'
import Slider from "react-slick";

export default class WhoWeAre extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cityArray: [],
        };
  
        this.createCities = this.createCities.bind(this);
  
    }

    componentWillMount(){
        this.createCities();
    }

=

    createCities(){
        var perChunk = 10 // items per chunk    

        var inputArray = this.props.cityData;
        
        var result = inputArray.reduce((resultArray, item, index) => { 
          const chunkIndex = Math.floor(index/perChunk)
        
          if(!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [] // start a new chunk
          }
        
          resultArray[chunkIndex].push(item)
        
          return resultArray
        }, [])

        var citiesArray = []; 
        var cityFinal = "";

        result.map((city_wrapper, index) => {


            var cityTop = 
            `
                <div class="city__container__${index}">
            `
            var cityInternal = ""

            city_wrapper.map((inner_city) => {
                cityInternal = cityInternal + 
                `
                    <div class="city__slider" data-city="${inner_city.title.rendered.replace(/ /g, '').replace(/,/g, '') .replace(/-/g, '') .replace(/!/g, '').replace(/ /g, '').replace(/'/g, '').replace(/\//g, '').replace(/\./g, '').toLowerCase()}">
                        <div class="city__image">
                            <img src="${inner_city.better_featured_image.source_url}" alt="${inner_city.title.rendered} city photo"/>
                        </div>
                        <div class="city__name">
                            <h3 class="poppins bold slg white-text">
                                ${inner_city.title.rendered}
                            </h3>
                        </div>
                    </div>
                `;
            })
            
            var cityBottom = `
            </div>
            `;

            cityFinal = cityTop + cityInternal + cityBottom;
            
            citiesArray.push(cityFinal);
            
        })
 
        this.setState({
            cityArray: citiesArray,
        });
    }

    render() {
        
        const settings = {
            dots: false,
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <main className="who__page">
                <section className="hero__container">
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
                                        dangerouslySetInnerHTML={{ __html: this.props.acfData.acf.body }}
                                    />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6 hero__content__image">
                                <img src={this.props.acfData.acf.image} alt="The Experience Image"/>
                            </div>
                        </div>
                    </div>
                </section>
            
                <section className="" id="jewish__sercive__alliance">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div
                                    className={`poppins bold xsmd white-text`}
                                    dangerouslySetInnerHTML={{ __html: this.props.acfData.acf.description_two }}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="partners">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 partners__wrapper d-flex justify-content-between align-items-center flex-wrap">
                                {
                                    this.props.partnerData.map((partner, index) => (
                                        <div className="the__partner" key={index}>
                                            <a href={partner.acf.partner_website}>
                                                <img src={`${partner.better_featured_image.source_url}`} alt={ `${partner.title.rendered} logo`}/>
                                            </a>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                    </div>
                </section>

                <section id="cities__background">
                    <div className="container-fluid no__padding">
                        <div className="row">
                            <div className="col-lg-12 no__padding">
                                <img src={this.props.acfData.acf.cities_section_background} alt="Cities Section Background"/>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="cities">
                    <div className="container">
                        <div className="row ">
                            <div className="col-lg-12 title">
                                <h2
                                    className={`poppins bold white-text text-center`}
                                    dangerouslySetInnerHTML={{ __html: this.props.acfData.acf.title_fourth }}
                                />
                                <div
                                    className={`md xl poppins regular white-text text-center`}
                                    dangerouslySetInnerHTML={{ __html: this.props.acfData.acf.description_fourth }}
                                />
                            </div>
                        </div>
                        <div className="row city__holder">
                            <div className="col-lg-12 cities__slider">
                                <Slider {...settings}>
                                    {
                                        this.state.cityArray.map((cityInfo, index) => (
                                            <div
                                                className="city__cluster" key={index}
                                                dangerouslySetInnerHTML={{ __html: cityInfo }}
                                            />
                                        ))
                                    }
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="team">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 title">
                                <h2
                                    className={`poppins bold teal-text text-left`}
                                    dangerouslySetInnerHTML={{ __html: this.props.acfData.acf.title_fifth }}
                                />
                            </div>
                        </div>
                        <div className="row team__members">
                            {
                                this.props.teamData.map((team_member, index) => (
                                    <div className="team__member col-sm-12 col-md-4 col-lg-3" data-city={team_member.acf.city.value.replace(/ /g, '').replace(/,/g, '') .replace(/-/g, '') .replace(/!/g, '').replace(/ /g, '').replace(/'/g, '').replace(/\//g, '').replace(/\./g, '').toLowerCase()} key={index}>
                                        <div className="team__avatar d-flex justify-content-center align-items-center">
                                            <img src={team_member.better_featured_image.source_url} alt={`${team_member.title.rendered} member avatar`}/>
                                        </div>
                                        <div className="team__title text-center">
                                            <h3 class="poppins bold slg teal-text text-uppercase">
                                                {team_member.title.rendered}
                                            </h3>
                                        </div>
                                        <div className="team__description">
                                            <div
                                                className={`poppins medium sm gray-text text-center`}
                                                dangerouslySetInnerHTML={{ __html: team_member.content.rendered }}
                                            />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>

                <section id="team" className="board">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 title">
                                <h2
                                    className={`poppins bold white-text text-left`}
                                    dangerouslySetInnerHTML={{ __html: this.props.acfData.acf.title_sixth }}
                                />
                            </div>
                        </div>
                        <div className="row team__members">
                            {
                                this.props.boardData.map((team_member, index) => (
                                    <div className="team__member col-sm-12 col-md-4 col-lg-3" data-city={team_member.acf.city.value.replace(/ /g, '').replace(/,/g, '') .replace(/-/g, '') .replace(/!/g, '').replace(/ /g, '').replace(/'/g, '').replace(/\//g, '').replace(/\./g, '').toLowerCase()} key={index}>
                                        <div className="team__avatar d-flex justify-content-center align-items-center">
                                            <img src={team_member.better_featured_image.source_url} alt={`${team_member.title.rendered} member avatar`}/>
                                        </div>
                                        <div className="team__title text-center">
                                            <h3 class="poppins bold slg white-text text-uppercase">
                                                {team_member.title.rendered}
                                            </h3>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>

                <section id="serve__the__moment">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2
                                    className={`poppins bold teal-text `}
                                    dangerouslySetInnerHTML={{ __html: this.props.acfData.acf.title_seventh }}
                                />
                            </div>
                        </div>
                        <div className="row serve__buttons">
                            {
                                this.props.acfData.acf.serve_buttons.map((button, index) => (
                                    <div className="serve__button__element" key={index}>
                                        <a href={button.button_file} target="_BLANK">
                                            <div className="serve__button__icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="26.823" height="27.8" viewBox="0 0 26.823 27.8">
                                                    <g id="Grupo_1956" data-name="Grupo 1956" transform="translate(15)">
                                                        <g id="Grupo_1957" data-name="Grupo 1957" transform="translate(-24)">
                                                        <path id="Trazado_2331" data-name="Trazado 2331" d="M83.538,209H81.814a.814.814,0,0,0-.814.817L81.012,216a.814.814,0,1,0,1.629,0v-1.879l.9,0a2.561,2.561,0,1,0,0-5.122Zm0,3.493-.9,0c0-.347,0-.72,0-.935,0-.184,0-.57,0-.932h.907a.933.933,0,1,1,0,1.864Z" transform="translate(-68.091 -197.652)" fill="#fff"/>
                                                        <path id="Trazado_2332" data-name="Trazado 2332" d="M211.516,209h-1.7a.814.814,0,0,0-.814.816s.012,5.986.012,6.008a.814.814,0,0,0,.814.812h0c.051,0,1.265,0,1.75-.013,1.84-.032,3.176-1.632,3.176-3.8,0-2.283-1.3-3.818-3.24-3.818Zm.036,5.993c-.211,0-.574.007-.913.009,0-.707-.007-3.638-.008-4.373h.885c1.495,0,1.611,1.675,1.611,2.189,0,1.069-.487,2.157-1.576,2.176Z" transform="translate(-189.141 -197.652)" fill="#fff"/>
                                                        <path id="Trazado_2333" data-name="Trazado 2333" d="M356.3,209.471a.814.814,0,0,0,0-1.629h-2.49a.814.814,0,0,0-.814.814V214.8a.814.814,0,1,0,1.629,0v-2.316h1.478a.814.814,0,0,0,0-1.629h-1.478v-1.385Z" transform="translate(-325.322 -196.557)" fill="#fff"/>
                                                        <path id="Trazado_2334" data-name="Trazado 2334" d="M33.379,7.873h-.6V7.641a4.056,4.056,0,0,0-1.117-2.8L28.282,1.27A4.089,4.089,0,0,0,25.327,0H14.484a2.446,2.446,0,0,0-2.443,2.443v5.43h-.6A2.446,2.446,0,0,0,9,10.316V20.09a2.446,2.446,0,0,0,2.443,2.443h.6v2.823A2.446,2.446,0,0,0,14.484,27.8H30.339a2.446,2.446,0,0,0,2.443-2.443V22.533h.6a2.446,2.446,0,0,0,2.443-2.443V10.316A2.446,2.446,0,0,0,33.379,7.873ZM13.67,2.443a.815.815,0,0,1,.814-.814H25.327a2.454,2.454,0,0,1,1.773.762L30.483,5.96a2.434,2.434,0,0,1,.67,1.681v.232H13.67ZM31.153,25.357a.815.815,0,0,1-.814.814H14.484a.815.815,0,0,1-.814-.814V22.533H31.153Zm3.041-5.267a.815.815,0,0,1-.814.814H11.443a.815.815,0,0,1-.814-.814V10.316a.815.815,0,0,1,.814-.814H33.379a.815.815,0,0,1,.814.814Z" fill="#fff"/>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="serve__button__text">
                                                <p className={`poppins bold white-text text-uppercase`}>
                                                    {button.button_text}
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>

                <section className="hero__container bottom__hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-6 hero__content">
                                <div className="hero__content__title">
                                    <h2
                                        className={`poppins bold xxmd teal-text`}
                                        dangerouslySetInnerHTML={{ __html: this.props.acfData.acf.title_eight }}
                                    />
                                </div>
                                <div className="hero__content__description">
                                    <div
                                        className={`md poppins medium teal-text`}
                                        dangerouslySetInnerHTML={{ __html: this.props.acfData.acf.description_eight }}
                                    />
                                </div>
                                <div className="hero__content__button">
                                    <a href={this.props.acfData.acf.button_link}>
                                        <button className={`btn main-btn clear-teal`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24.374" height="18.015" viewBox="0 0 24.374 18.015">
                                                <g id="Grupo_2085" data-name="Grupo 2085" transform="translate(0 -48)">
                                                    <g id="Grupo_1960" data-name="Grupo 1960" transform="translate(0 48)">
                                                    <path id="Trazado_2335" data-name="Trazado 2335" d="M23.314,48H1.06a1.05,1.05,0,0,0-.214.022A1.061,1.061,0,0,0,0,49.06v15.9a1.061,1.061,0,0,0,.846,1.038,1.05,1.05,0,0,0,.214.022H23.314a1.05,1.05,0,0,0,.214-.022,1.061,1.061,0,0,0,.846-1.038V49.06A1.061,1.061,0,0,0,23.314,48ZM1.06,51.16l8.4,6.112-8.4,6.113Zm22.254,13.8H1.06V64.7l9.3-6.768,1.511,1.1a.53.53,0,0,0,.623,0l1.511-1.1,9.3,6.767Zm0-1.571-8.4-6.113,8.4-6.112Zm0-13.535L12.187,57.942,1.06,49.85v-.79H23.314Z" transform="translate(0 -48)" fill="#fff"/>
                                                    </g>
                                                </g>
                                            </svg>

                                            <strong>
                                                {this.props.acfData.acf.button_text}
                                            </strong>
                                        </button>
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6 hero__content__image">
                                <img src={this.props.acfData.acf.image_eight} alt="The Experience Image"/>
                            </div>
                        </div>
                    </div>
                </section>


            </main>
        )
    }
}

// This gets called on every request
export async function getServerSideProps() {
    const res = await fetch(`${process.env.ProjectUrl}/wp-json/acf/v3/pages/188`)
    const acfData = await res.json()
  
    const resData = await fetch(`${process.env.ProjectUrl}/wp-json/wp/v2/pages/188`)
    const pageData = await resData.json()
  
    const resDataCities = await fetch(`${process.env.ProjectUrl}/wp-json/wp/v2/cities?per_page=100`)
    const cityData = await resDataCities.json()

    const resDataTeam = await fetch(`${process.env.ProjectUrl}/wp-json/wp/v2/team?per_page=100`)
    const teamData = await resDataTeam.json()

    const resDataBoard = await fetch(`${process.env.ProjectUrl}/wp-json/wp/v2/board?per_page=100`)
    const boardData = await resDataBoard.json()

    const resDataPartners = await fetch(`${process.env.ProjectUrl}/wp-json/wp/v2/partners?per_page=100`)
    const partnerData = await resDataPartners.json()

    return {
        props: {
          acfData,
          pageData,
          cityData,
          teamData,
          boardData,
          partnerData,
        },
    }
  }
  