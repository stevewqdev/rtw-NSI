import React, { Component } from 'react'

export default class LoadingCard extends Component {
    render() {
        return (
            <div class="col-sm-6  the-card flash_loading animated flash infinite slower" >
                <div class="card__header col-sm-12 col-md-4"  ><p>Event image</p></div>
                <div class="card__content__wrapper col-sm-12 col-md-8">
                    <div class="card__title">
                        <h3>Event Name</h3>
                        <div class="card__tags" >
                            <span class="gray__tag" >Issue</span>
                        </div>
                    </div>
                    <div class="card__date">
                        <div class="row">
                            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-4" >
                                <span class="date">Jul 01, 2020</span>
                            </div>
                            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-8">
                                <span class="location">New York</span>
                            </div>
                        </div>
                    </div>
                    <div class="card__content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur minima facere </p>
                    </div>
                    <div class="card____button">
                        <a  class="learn__more__btn">send</a>
                    </div>
                </div>
            </div>
        )
    }
}
