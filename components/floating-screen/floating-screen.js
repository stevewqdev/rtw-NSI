import React, { Component } from 'react'
import Styles from "./floating-screen.module.css"

export default class FloatingScreen extends Component {

    toggleMenu(event){
        event.preventDefault()

        if(document.querySelectorAll(".floating__screen__selector")[0].classList.contains("fs__opened")){
            document.querySelectorAll(".floating__screen__selector")[0].classList.remove("fs__opened");
            document.querySelectorAll(".floating__screen__selector")[0].classList.add("fs__closed");
        }else{
            document.querySelectorAll(".floating__screen__selector")[0].classList.remove("fs__closed");
            document.querySelectorAll(".floating__screen__selector")[0].classList.add("fs__opened");
        }  
    }
    render() {
 
        return (
            
            <div className={`${Styles.floating__screen} floating__screen__selector fs__closed`}>
                <div className={`${Styles.floating__screen__opener}`} onClick={this.toggleMenu}>
                    <svg id="Componente_3_1" data-name="Componente 3 – 1" xmlns="http://www.w3.org/2000/svg" width="69" height="328" viewBox="0 0 69 328">
                        <g id="Componente_2_1" data-name="Componente 2 – 1">
                            <rect id="Rectángulo_362" data-name="Rectángulo 362" width="69" height="328" fill="#029c91"/>
                        </g>
                        <text id="Active_Campaigns" data-name="Active Campaigns" transform="translate(28.761 188.951) rotate(90)" fill="#fff" fontSize="20" fontFamily="Poppins-Medium, Poppins" fontWeight="500"><tspan x="-93.12" y="0">Active Campaigns</tspan></text>
                        <g id="Grupo_1820" data-name="Grupo 1820" transform="translate(12.145 43.916)">
                            <path id="Trazado_2192" data-name="Trazado 2192" d="M49.817,85.148l-7.595-7.595L36.472,83.3l-.117.117-.117-.117L32.32,79.386l-.117-.117.117-.117L38.071,73.4,30.85,66.181A7.445,7.445,0,0,0,20.321,76.71L39.288,95.677l1.722-1.722L35.254,88.2l-.117-.117.117-.117.983-.983.117-.117.117.117,5.756,5.756,1.722-1.722L38.193,85.26l-.117-.117.117-.117,1.1-1.1L45.162,89.8l1.722-1.722-5.756-5.756-.117-.117.117-.117.978-.978L42.223,81l.117.117L48.1,86.869Z" transform="translate(-18.145 -64)" fill="#fff"/>
                            <path id="Trazado_2193" data-name="Trazado 2193" d="M43.895,81l5.756-5.756.117-.117.117.117,8.691,8.691L65.8,76.71A7.445,7.445,0,1,0,55.267,66.181L42.173,79.275Z" transform="translate(-25.685 -64)" fill="#fff"/>
                        </g>
                    </svg>
                </div>
                <div className={`container ${Styles.floating__screen__container}`}>
                    <div className={`${Styles.close_fs} close__popup`} onClick={this.toggleMenu}>
                        <p>╳</p>
                    </div>
                    <div className={`row`}>
                        <div className={`col-sm-12 col-md-5 col-lg-5 ${Styles.title}`}>
                            <h2 className={`xxmd poppins bold teal-text`}>
                                {this.props.screenData.acf.window_title}
                            </h2>
                        </div>
                        <div className={`col-sm-12 col-md-7 col-lg-7 ${Styles.subtitle}`}>
                            <h4 className={` poppins semibold clear-teal`}>
                                {this.props.screenData.acf.window_description}
                            </h4>
                        </div>
                        <div className={`col-sm-12 col-md-12 col-lg-9 ${Styles.campaign}`}>
                            <div className={`row`}>
                                <div className={`col-sm-12 col-md-12 col-lg-7 ${Styles.campaign__image}`}>
                                    <img src={this.props.screenData.acf.prioritized_campaign_image} alt="Active Campaign"/>
                                </div>
                                <div className={`col-sm-12 col-md-12 col-lg-5 ${Styles.campaig__content}`}>
                                    <div className={`${Styles.divider}`}></div>
                                    <div className={`${Styles.campaign__title}`}>
                                        <h3 className={`poppins bold teal-text`}>
                                            {this.props.screenData.acf.prioritized_campaing.post_title}
                                        </h3>
                                    </div>
                                    <div className={`${Styles.campaign__body}`}>
                                        <div
                                            className={` poppins medium teal-text` }
                                            dangerouslySetInnerHTML={{ __html: this.props.screenData.acf.prioritized_campaing.post_content }}
                                        />
                                    </div>
                                    <div className={`${Styles.campaign__button}`}>
                                        <a href={this.props.screenData.acf.prioritized_campaign_cta_link}>
                                            <button className={`btn full__btn main-btn clear-teal`}>
                                                <strong>
                                                    {this.props.screenData.acf.prioritized_campaign_cta_text}
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="10.392" height="18.188" viewBox="0 0 10.392 18.188">
                                                        <path id="Hover" d="M104.432,32.715,97.446,39.49a1.3,1.3,0,0,0,1.837,1.837l7.795-7.795a1.3,1.3,0,0,0,0-1.835v0L99.291,23.9a1.3,1.3,0,0,0-1.845,1.837l6.986,6.975" transform="translate(-97.066 -23.52)" fill="#fafafc" fillRule="evenodd"/>
                                                    </svg>
                                                </strong>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`col-sm-12 col-md-12 col-lg-3 ${Styles.resources}`}>
                            <div className={`${Styles.resources__icon}`}>
                                <img src={this.props.screenData.acf.resource_icon} alt="Resources icon"/>
                            </div>
                            <div className={`${Styles.resources__title}`}>
                                <h3>
                                    {this.props.screenData.acf.resource_title}
                                </h3>
                            </div>
                            <div className={`${Styles.resources__description}`}>
                                <p className={`poppins medium md`}>
                                    {this.props.screenData.acf.resource_body}
                                </p>
                            </div>
                            <div className={`${Styles.resources__button}`}>
                                <a href={this.props.screenData.acf.resource_cta_link}>
                                    <button className={`btn main-btn white-btn full__btn`}>
                                        <strong>
                                            {this.props.screenData.acf.resource_cta_text}
                                        </strong>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
