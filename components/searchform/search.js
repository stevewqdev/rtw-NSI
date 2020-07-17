import React, { Component } from 'react'
import LoadingCard from "../loading-card/loading-card";
export default class Search extends Component {

componentDidMount(){
    const script = document.createElement("script");
    script.src = "/js/main.js";
    script.async = true;
    document.body.appendChild(script);
}

render() {
    return (
        <>
            <div id="search__form" >
                {/* Get info div contains values in case the GET variables are used for different fields */}
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
                    <?php if($_GET['partner']){ ?>
                    <div className="partner_get">
                        <?php echo $_GET['partner']; ?>
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

                {/* This div will let us hold some invisble data we need to re-use */ }
                <div id="hidden__block__popup" style={{"display":"none"}}></div>

                <div className={`search__module volunteer__header page__header`}>
                    <div className="container">
                        <div className="header__container">
                            {/* Form Title */}
                            <div className="search__module">
                                {/* This is the FORM and the FORM fields */}
                                <form action="#" className="form">
                                    <div className="row center__row justify-content-evenly align-items-center">
                                        <div className=" interest__input input__wrapper arrow-down">
                                            <select  name="interest" id="interest" >
                                                <option value="-1" id="interest_first" selected={true} disabled="disabled">Issue</option>
                                            </select>
                                        </div>
                                        <div className=" city__input input__wrapper arrow-down" >
                                            <select  name="cities" id="cities">
                                                <option value="-1" id="city_first" selected={true} disabled="disabled">Location</option>
                                            </select>
                                        </div>
                                        <div className=" partner__input input__wrapper arrow-down">
                                            <select  name="partner" id="partner" >
                                                <option value="-1" id="partner_first" selected={true} disabled="disabled">Partner</option>
                                            </select>
                                        </div>
                                        <div className=" input__wrapper arrow-down calendar-input">
                                            <input type="text" name="daterange" value="Date" className="calendar__input" />
                                        </div>

                                        {/* <div className=" type__input input__wrapper arrow-down" >
                                            <select name="types" id="types" >
                                                <option value="-1" id="type_first" selected={true} disabled="disabled">Experiences</option>
                                                <option data-option-count="1" value="inperson" className="inperson">In Person</option>
                                                <option data-option-count="2" value="ongoing" className="ongoing">Ongoing</option>
                                                <option data-option-count="3" value="virtual" className="virtual">Virtual</option>
                                            </select>
                                        </div> */}
                                        {/* <div className=" appropriate__input input__wrapper arrow-down" >
                                            <div className="issues__wrapper">
                                                <div className="select_simulator">
                                                    <p>Under 18?</p>
                                                    <div className="select_options" className="open_drop"></div>
                                                </div>
                                            </div>
                                        </div> */}
                                        <div className="col-sm-12 col-md-2 searchFormButton">
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

                    {/* **DONT REMOVE** */}
                    {/* This empty divs are being used to hold content for the JS code  */}
                    <div id="end-list" style={{"display": "none"}}></div>
                    <div id="initial_list" style={{"display": "none"}}></div>
                    <div id="backup_list" style={{"display": "none"}}></div>

                    {/* Main opportunities are shownd here */}
                    <div className="container events__container" id="full_ops">

                        <div className="row" id="list">
                            {/* This initials divs are holding placeholder for the cards -- PLEASE CONVERT INTO CSS CARDS ON DEVELOPMENT */}
                            <LoadingCard />
                            <LoadingCard />
                            <LoadingCard />
                            <LoadingCard />
                            <LoadingCard />
                            <LoadingCard />
                        </div>
                        {/* This div contains the pagination of the search results */}
                        <div className="row">
                            <div className="event__pagination" >
                                <ul  id="list_controller" ></ul>
                            </div>
                            <div id="hidden_list" style={{"display": "none"}}></div>
                        </div>
                    </div>

                    {/* Ongoing events show up here in a carousel */}
                    <div className="container events__container" id="ongoing-carousel">
                        <div className="row " id="carousel-list">
                            {/* This initials divs are holding placeholder for the cards -- PLEASE CONVERT INTO CSS CARDS ON DEVELOPMENT */}
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
            </div>
        </>
    )
    }
}
