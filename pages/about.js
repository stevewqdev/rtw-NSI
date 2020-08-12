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

    componentDidMount(){
        var queryString = window.location.search;

        if(queryString.length > 0){           
            
            queryString = queryString.replace(/\?/g, '').split("&");
            queryString =  queryString[0].split("=")[1].replace(/ /g, '').replace(/,/g, '') .replace(/-/g, '') .replace(/!/g, '').replace(/ /g, '').replace(/'/g, '').replace(/\//g, '').replace(/\./g, '').toLowerCase();
            
            this.displayCityContent(queryString);
        }

        console.log(this.props.teamData)
    }

    displayCityContent(city){

        let partners = [...document.querySelectorAll(".the__partner")];
        let teamMembers = [...document.querySelectorAll("#team  .team__member")];
        let boardTeamMembers = [...document.querySelectorAll(".board .team__member")];

        partners.map((partner) => {
            if(partner.getAttribute("data-city") !== city){
                partner.remove();
            }

            return true; 
        })

        if([...document.querySelectorAll(".the__partner")].length < 1){
            document.getElementById("partners").remove();
        }

        teamMembers.map((teamMember) => {
            if(teamMember.getAttribute("data-city") !== city){
                teamMember.remove();
            }

            return true; 
        })

        if([...document.querySelectorAll("#team  .team__member")].length < 1){
            document.getElementById("team").remove();
        }

        boardTeamMembers.map((boardTeamMember) => {
            if(boardTeamMember.getAttribute("data-city") !== city){
                boardTeamMember.remove();
            }

            return true; 
        })

        if([...document.querySelectorAll(".board .team__member")].length < 1){
            document.querySelectorAll(".board")[0].remove();
        }
    }

    showBio(event){

        var targetEl = document.getElementById(event.target.getAttribute("data-member")); 

        if(targetEl.classList.contains("closed")){
            targetEl.classList.remove("closed")
        }else{
            targetEl.classList.add("closed")
        }
        

        
    }

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
                        <a href="/volunteer?location=${inner_city.title.rendered.replace(/ /g, '').replace(/,/g, '') .replace(/-/g, '') .replace(/!/g, '').replace(/ /g, '').replace(/'/g, '').replace(/\//g, '').replace(/\./g, '').toLowerCase()}#search__form">
                            <div class="city__image">
                                <img loading="lazy" src="${inner_city.better_featured_image.source_url}" alt="${inner_city.title.rendered} city photo"/>
                            </div>
                            <div class="city__name">
                                <h3 class="poppins bold slg white-text">
                                    ${inner_city.title.rendered}
                                </h3>
                            </div>
                        </a>
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
                                <img loading="lazy" src={this.props.acfData.acf.image} alt="The Experience Image"/>
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
                                        <div className="the__partner" key={index} 
                                        data-city={`${partner.acf.city.value.replace(/ /g, '').replace(/,/g, '') .replace(/-/g, '') .replace(/!/g, '').replace(/ /g, '').replace(/'/g, '').replace(/\//g, '').replace(/\./g, '').toLowerCase()}`}>
                                            <a href={partner.acf.partner_website}>
                                                {
                                                    partner.better_featured_image
                                                    ?
                                                    <img loading="lazy" src={`${partner.better_featured_image.source_url}`} alt={ `${partner.title.rendered} logo`}/>
                                                    : <span>{partner.title.rendered}</span>
                                                }
                                                
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
                                <img loading="lazy" src={this.props.acfData.acf.cities_section_background} alt="Cities Section Background"/>
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
                                            {
                                                team_member.better_featured_image
                                                ? <img loading="lazy" src={team_member.better_featured_image.source_url} alt={`${team_member.title.rendered} member avatar`}/>
                                                : ""
                                            }
                                            
                                        </div>
                                        <div className="team__title text-center">
                                            <h3 class="poppins bold slg teal-text text-uppercase">
                                                {team_member.title.rendered}
                                            </h3>
                                            <p class="poppins bold sm teal-text text-uppercase">{team_member.acf.positioncharge}</p>
                                        </div>
                                        <div className="team__description closed" id={`member-1${index}`}>
                                            <div
                                                className={`poppins medium sm gray-text text-center`}
                                                dangerouslySetInnerHTML={{ __html: team_member.content.rendered }}
                                            />
                                            <div className={`read__more__button `} data-member={`member-1${index}`} onClick={this.showBio}>
                                                +
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>

                {/* <section id="team" className="board">
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
                                            {
                                                team_member.better_featured_image
                                                ? <img loading="lazy" src={team_member.better_featured_image.source_url} alt={`${team_member.title.rendered} member avatar`}/>
                                                : ""
                                            }
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
                </section> */}

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
                                                <svg xmlns="http://www.w3.org/2000/svg" width="137.656" height="158.2" viewBox="0 0 137.656 158.2" title={button.button_text}>
                                                
                                                <g id="Grupo_9" data-name="Grupo 9" transform="translate(-2354.607 -503.002)">
                                                    <path id="Trazado_8" data-name="Trazado 8" d="M2492.263,503V641.2a5,5,0,0,1-5,5h0a5,5,0,0,1-5-5V513H2389.6a5,5,0,0,1-5-5h0a5,5,0,0,1,5-5Z" fill="#005f5e"/>
                                                    <g id="Grupo_6" data-name="Grupo 6">
                                                    <path id="Trazado_9" data-name="Trazado 9" d="M2477.263,518V661.2H2374.6a5,5,0,0,1-5-5h0a5,5,0,0,1,5-5h92.66V569.6H2369.6V518Z" fill="#005f5e"/>
                                                    </g>
                                                    <g id="Grupo_8" data-name="Grupo 8">
                                                    <g id="Grupo_7" data-name="Grupo 7">
                                                        <path id="Trazado_10" data-name="Trazado 10" d="M2378.806,607.518c0,1.011-.489,1.69-1.79,1.69h-1.639v-3.38h1.639C2378.317,605.828,2378.806,606.5,2378.806,607.518Z" fill="#005f5e"/>
                                                        <path id="Trazado_11" data-name="Trazado 11" d="M2405.327,606.239h-1.381v8.219h1.381c2.55,0,4.24-1.429,4.24-4.11S2407.877,606.239,2405.327,606.239Zm0,0h-1.381v8.219h1.381c2.55,0,4.24-1.429,4.24-4.11S2407.877,606.239,2405.327,606.239Zm-50.72-21.641v51.6a10,10,0,0,0,10,10h97.659V574.6h-97.659A10,10,0,0,0,2354.607,584.6Zm23.06,29.16h-2.29v5.851h-5.77V601.2h8.06c4.62,0,6.989,2.6,6.989,6.32C2384.656,610.918,2382.287,613.758,2377.667,613.758Zm28.179,5.851h-7.67V601.2h7.67c5.881,0,9.571,3.85,9.571,9.15C2415.417,615.609,2411.727,619.609,2405.846,619.609Zm36.35-13.83h-7.23v2.54h5.2v4.349h-5.2v6.941h-5.77V601.2h13Zm-36.869.46h-1.381v8.219h1.381c2.55,0,4.24-1.429,4.24-4.11S2407.877,606.239,2405.327,606.239Z" fill="#005f5e"/>
                                                    </g>
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

                {/* <section className="hero__container bottom__hero">
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
                                    <a href={this.props.acfData.acf.button_link} tabIndex="0">
                                        <button className={`btn main-btn clear-teal`} tabIndex="-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="107.66" height="71.77" viewBox="0 0 107.66 71.77" title={this.props.acfData.acf.button_text}>
                                                <g id="Grupo_5" data-name="Grupo 5" transform="translate(-2140.12 -542.688)">
                                                <g id="Grupo_4" data-name="Grupo 4">
                                                <path id="Trazado_7" data-name="Trazado 7" d="M2140.12,552.688v61.77h107.66v-61.77a10,10,0,0,0-10-10h-87.66A10,10,0,0,0,2140.12,552.688Zm102.56,5.23L2193.95,580l-48.73-22.08v-5.63l48.73,22.08,48.73-22.08Z" fill="#005f5e"/>
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
                                <img loading="lazy" src={this.props.acfData.acf.image_eight} alt="The Experience Image"/>
                            </div>
                        </div>
                    </div>
                </section> */}


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
  