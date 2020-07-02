import React, { Component } from 'react'
import Head from 'next/head'

export default class form extends Component {

componentDidMount(){
    const script = document.createElement("script");
    script.src = "/js/main.js";
    script.async = true;
    document.body.appendChild(script);
}

render() {
    return (
        <div className="page__contain__search">
            <Head>
                {/* Styles from original RWT form ***REMOVE LATER*** */}
                <link rel="stylesheet" href="https://stm.raxo.dev/wp-content/themes/littlebot-wordpress-api-master/assets/css/styles.css" />
                
                {/* Dependency to add custom styles to select fields */}
                <link rel="stylesheet" href="https://stm.raxo.dev/wp-content/themes/littlebot-wordpress-api-master/assets/css/nice-select.css" />
                
                {/* Library that allow us to create a field for date picking */}
                <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />
                
                {/* CSS for the Flickity slider library  */}
                <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />

                {/* Jquery CDN code */}
                <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>

                {/* Moment js library */}
                <script type="text/javascript" src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>

                {/* Library for the date picking select */}
                <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>

                {/* Fontawesome Kit */}
                <script src="https://kit.fontawesome.com/841603387b.js" crossorigin="anonymous"></script>

                {/* Flickity library javascript */}
                <script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>

                {/* Library for custom select fields */}
                <script src="https://stm.raxo.dev/wp-content/themes/littlebot-wordpress-api-master/assets/js/jquery.nice-select.min.js"></script>

                <script src="https://stm.raxo.dev/wp-content/themes/littlebot-wordpress-api-master/assets/js/fastclick.js"></script>

                <script src="https://stm.raxo.dev/wp-content/themes/littlebot-wordpress-api-master/assets/js/prism.js"></script>


            </Head>

            <section id="form">
                <div className="get_info">
                    {/* <?php if($_GET['city']){ ?>
                    <div className="city_get">
                        <?php  echo $_GET['city']; ?>
                    </div>
                    <?php }?>
                    <?php if($_GET['interest']){ ?>
                    <div className="interest_get">
                        <?php echo $_GET['interest']; ?>
                    </div>
                    <?php }?>
                    <?php if($_GET['appropriate']){ ?>
                    <div className="appropriate_get">
                        <?php echo $_GET['appropriate']; ?>
                    </div>
                    <?php }?>
                    <?php if($_GET['type']){ ?>
                    <div className="type__event">
                        <?php echo $_GET['type']; ?>
                    </div>
                    <?php }?>
                    <div className="date_get">
                        <?php if($_GET['start_date']){  ?>
                        <div className="start">
                            <?php echo $_GET['start_date']; ?>
                        </div>
                        <?php }?>
                        <?php if($_GET['end_date']){  ?>
                        <div className="end">
                            <?php  echo $_GET['end_date']; ?>
                        </div>
                        <?php }?>
                    </div> */}
                </div>

                <div id="hidden__block__popup" style={{"display":"none"}}></div>

                <div className="volunteer__header page__header">
                    <div className="container">
                        <div className="header__container">
                            <h1>Volunteer</h1>
                            <div className="search__module">
                                <form action="#" className="form">
                                    <div className="row">
                                        <div className=" city__input input__wrapper arrow-down" >
                                            <select name="cities" id="cities">
                                                <option value="-1" id="city_first" selected="true" disabled="disabled">City</option>
                                            </select>
                                        </div>
                                        <div className=" interest__input input__wrapper arrow-down">
                                            <select  name="interest" id="interest" >
                                                <option value="-1" id="interest_first" selected="true" disabled="disabled">Interest</option>
                                            </select>
                                        </div>
                                        <div className=" appropriate__input input__wrapper arrow-down" >
                                            <div className="issues__wrapper">
                                                <div className="select_simulator">
                                                    <p>Under 18?</p>
                                                    <div className="select_options" className="open_drop"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" type__input input__wrapper arrow-down" >
                                            <select name="types" id="types">
                                                <option value="-1" id="type_first" selected="true" disabled="disabled">Type</option>
                                                <option data-option-count="1" value="inperson" className="inperson">In Person</option>
                                                <option data-option-count="2" value="ongoing" className="ongoing">Ongoing</option>
                                                <option data-option-count="3" value="virtual" className="virtual">Virtual</option>
                                            </select>
                                        </div>
                                        <div className=" input__wrapper arrow-down calendar-input">
                                            <input type="text" name="daterange" value="Calendar" className="calendar__input" />
                                        </div>
                                        <div className="col-sm-12 col-md-2">
                                            <button className="btn btn-primary" id="search-events">Search</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="page__section opportunities" id="opportunities">
                    <div className="container-fluid">
                        <div className="searchTagsWrapper" >
                            <div className="search__sub__wrapper container">
                            </div>
                        </div>
                    </div>

                    <div id="end-list" style={{"display": "none"}}></div>

                    <div id="initial_list" style={{"display": "none"}}></div>
                    <div id="backup_list" style={{"display": "none"}}></div>
                    <div className="container events__container" id="full_ops">
                        <h2 className="section__title">Opportunities<br /></h2>
                        <p className="sub-text" style={{"textAlign": "center" , "margin": "0"}}>
                            <a href="#ongoing-carousel" style={{"text-decoration":"none" , "color":"#404040"}}>Scroll down to find ongoing opportunities</a>
                         </p>
                        <div className="row" id="list">
                            <div className="col-sm-4 flash_loading animated flash infinite slower">
                                <img src="https://werepair.org/wp-content/themes/evolux/images/event-placeholder.jpg" alt="" />
                            </div>
                            <div className="col-sm-4 flash_loading animated flash infinite slower">
                                <img src="https://werepair.org/wp-content/themes/evolux/images/event-placeholder.jpg" alt="" />
                            </div>
                            <div className="col-sm-4 flash_loading animated flash infinite slower">
                                <img src="https://werepair.org/wp-content/themes/evolux/images/event-placeholder.jpg" alt="" />
                            </div>
                            <div className="col-sm-4 flash_loading animated flash infinite slower">
                                <img src="https://werepair.org/wp-content/themes/evolux/images/event-placeholder.jpg" alt="" />
                            </div>
                            <div className="col-sm-4 flash_loading animated flash infinite slower">
                                <img src="https://werepair.org/wp-content/themes/evolux/images/event-placeholder.jpg" alt="" />
                            </div>
                            <div className="col-sm-4 flash_loading animated flash infinite slower">
                                <img src="https://werepair.org/wp-content/themes/evolux/images/event-placeholder.jpg" alt="" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="event__pagination" >
                                <ul  id="list_controller" ></ul>
                            </div>
                            <div id="hidden_list" style={{"display": "none"}}></div>
                        </div>
                    </div>

                    <div className="container events__container" id="ongoing-carousel">
                        <h2 className="section__title">Ongoing Opportunities<br /></h2>
                        <div className="row " id="carousel-list">
                            <div className="col-sm-4 flash_loading animated flash infinite slower">
                                <img src="https://werepair.org/wp-content/themes/evolux/images/event-placeholder.jpg" alt="" />
                            </div>
                            <div className="col-sm-4 flash_loading animated flash infinite slower">
                                <img src="https://werepair.org/wp-content/themes/evolux/images/event-placeholder.jpg" alt="" />
                            </div>
                            <div className="col-sm-4 flash_loading animated flash infinite slower">
                                <img src="https://werepair.org/wp-content/themes/evolux/images/event-placeholder.jpg" alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
    }
}
