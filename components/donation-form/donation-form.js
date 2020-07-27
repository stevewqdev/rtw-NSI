import React, { Component } from 'react'
import Head from 'next/head'
import Slider from "react-slick";

export default class DonationForm extends Component {

    componentDidMount(){
        const script = document.createElement("script");
        script.src = "/js/donationForm.js";
        script.async = true;
        document.body.appendChild(script);
    }

    render() {

        const settings = {
            dots: true,
            arrows: false,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
        };

        return (
            <>
                <Head>
          
                    <script type="text/javascript" src="https://www.tfaforms.com/wForms/3.11/js/wforms.js?v=6815167f43cb13d1c4221d1d55861ccaa68f614e"></script>
                    <script type="text/javascript">
                        wFORMS.behaviors.prefill.skip = false;
                    </script>
                    <script type="text/javascript" src="https://www.tfaforms.com/wForms/3.11/js/localization-en_US.js?v=6815167f43cb13d1c4221d1d55861ccaa68f614e"></script>
                    <script src='https://www.google.com/recaptcha/api.js?onload=gCaptchaReadyCallback&render=explicit&hl=en_US' async
                        defer></script>
                </Head>
                <main id="donation__form">
                    <div id="donation__form" className="wFormContainer">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="wFormHeader">
                                    </div>
                                    
                                    <div classname>

                                        <div className="wForm" id="4696781-WRPR" dir="ltr">

                                        <form method="post" action="https://www.tfaforms.com/responses/processor" className="hintsBelow labelsAbove" id={4696781} role="form">
                                            <Slider {...settings}>
                                                <div className="form__step form__step__one">
                                                    <fieldset id="tfa_2562" className="section">
                                                        <legend id="tfa_2562-L"><b>Your Gift</b></legend>
                                                        <div className="oneField field-container-D  labelsRemoved  " id="tfa_2-D" role="radiogroup" aria-labelledby="tfa_2-L" data-tfa-labelledby="-L tfa_2-L">
                                                            <div className="inputWrapper">
                                                                <table id="tfa_2" className="choices columns3 required">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td><span className="oneChoice maskControl"><input value="" type="radio" defaultValue="tfa_6" className="calc-amt calcval-36" id="tfa_6" name="tfa_2" aria-required="true" aria-labelledby="tfa_6-L" data-tfa-labelledby="tfa_2-L tfa_6-L" /><label className="label postField" id="tfa_6-L" htmlFor="tfa_6"><span className="input-radio-faux" /><img style={{maxWidth: '100%'}} alt="$36" src="//www.tfaforms.com/forms/get_image/208798/sSV9daau3KQ56wS2BfNovbgwjMxeCJFJRN8AHMDlJWkykyn4N6MkhdHrr9lxpZlW-button1.png" /></label></span></td>
                                                                            <td><span className="oneChoice maskControl"><input value="" type="radio" defaultValue="tfa_7" className="calc-amt calcval-54" id="tfa_7" name="tfa_2" aria-required="true" aria-labelledby="tfa_7-L" data-tfa-labelledby="tfa_2-L tfa_7-L" /><label className="label postField" id="tfa_7-L" htmlFor="tfa_7"><span className="input-radio-faux" /><img style={{maxWidth: '100%'}} alt="$54" src="//www.tfaforms.com/forms/get_image/208798/6Wb2l5OhODaCG7BLkcFXyw9pQIJmJkK9JDSzlHEz2uMbxgaNZvqqJNAg9FnhBvbL-button2.png" /></label></span></td>
                                                                            <td><span className="oneChoice maskControl"><input value="" type="radio" defaultValue="tfa_8" className="calc-amt calcval-98" id="tfa_8" name="tfa_2" aria-required="true" aria-labelledby="tfa_8-L" data-tfa-labelledby="tfa_2-L tfa_8-L" /><label className="label postField" id="tfa_8-L" htmlFor="tfa_8"><span className="input-radio-faux" /><img style={{maxWidth: '100%'}} alt="$98" src="//www.tfaforms.com/forms/get_image/208798/nvnq59CAnaB89sAnGmdnNxygXVu6UjENayF93xq3QQu2CF4ydbeKzNJPcblpIxUX-button3.png" /></label></span></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><span className="oneChoice maskControl"><input value="" type="radio" defaultValue="tfa_9" className="calc-amt calcval-180" id="tfa_9" name="tfa_2" aria-required="true" aria-labelledby="tfa_9-L" data-tfa-labelledby="tfa_2-L tfa_9-L" /><label className="label postField" id="tfa_9-L" htmlFor="tfa_9"><span className="input-radio-faux" /><img style={{maxWidth: '100%'}} alt="$180" src="//www.tfaforms.com/forms/get_image/208798/tTi7Ya1t0oL2PoKsyV5XzEZlis8pXFDQcqsp42yJzEc3nbFpRhbANQiUyBckZhmC-button9.png" /></label></span></td>
                                                                            <td><span className="oneChoice maskControl"><input value="" type="radio" defaultValue="tfa_10" className="calc-amt calcval-360" id="tfa_10" name="tfa_2" aria-required="true" aria-labelledby="tfa_10-L" data-tfa-labelledby="tfa_2-L tfa_10-L" /><label className="label postField" id="tfa_10-L" htmlFor="tfa_10"><span className="input-radio-faux" /><img style={{maxWidth: '100%'}} alt="$360" src="//www.tfaforms.com/forms/get_image/208798/im3XbstYuRHxy1RMCrs8zNw3GpPcmTK4ySl9qdnSIwXfyZJhDXl1bNks8hQgm8sG-button10.png" /></label></span></td>
                                                                            <td><span className="oneChoice maskControl"><input value="" type="radio" defaultValue="tfa_13" className="calc-amt calcval-0" id="tfa_13" name="tfa_2" aria-required="true" data-conditionals="#tfa_14" aria-labelledby="tfa_13-L" data-tfa-labelledby="tfa_2-L tfa_13-L" /><label className="label postField" id="tfa_13-L" htmlFor="tfa_13"><span className="input-radio-faux" /><img style={{maxWidth: '100%'}} alt="Other" src="//www.tfaforms.com/forms/get_image/208798/jeka8ZUaFG3vWvIraDjcVruaQH9V4yyAREJv6JQScGcZgLUiYiOqUxQIU0vDSniY-button_other1.png" /></label></span></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    
                                                        <div className="oneField field-container-D  labelsLeftAligned  " id="tfa_14-D">
                                                            <label id="tfa_14-L" className="label preField reqMark" htmlFor="tfa_14">Amount</label>
                                                            <div className="inputWrapper">
                                                                <input value="" type="text" id="tfa_14" name="tfa_14" defaultValue aria-required="true" data-condition="`#tfa_13`" title="Amount:" className="validate-float calc-otheramt required" />
                                                            </div>
                                                        </div>

                                                        <div id="tfa_2605" className="section inline group">
                                                            <div className="oneField field-container-D  labelsLeftAligned  " id="tfa_16-D" role="radiogroup" aria-labelledby="tfa_16-L" data-tfa-labelledby="-L tfa_16-L">
                                                                <label id="tfa_16-L" className="label preField reqMark">Frequency</label>
                                                                <div className="inputWrapper">
                                                                    <span id="tfa_16" className="choices horizontal required">
                                                                        <span className="oneChoice">
                                                                            <input value="" type="radio" defaultValue="tfa_17" className="calc-payments calcval-1" defaultChecked data-default-value="true" id="tfa_17" name="tfa_16" aria-required="true" data-conditionals="#tfa_2720" aria-labelledby="tfa_17-L" data-tfa-labelledby="tfa_16-L tfa_17-L" />
                                                                            <label className="label postField" id="tfa_17-L" htmlFor="tfa_17">
                                                                                <span className="input-radio-faux" />One time
                                                                            </label>
                                                                        </span>
                                                                        <span className="oneChoice">
                                                                            <input value="" type="radio" defaultValue="tfa_18" className="calc-payments calcval-9999" id="tfa_18" name="tfa_16" aria-required="true" data-conditionals="#tfa_2555" aria-labelledby="tfa_18-L" data-tfa-labelledby="tfa_16-L tfa_18-L" />
                                                                            <label className="label postField" id="tfa_18-L" htmlFor="tfa_18">
                                                                                <span className="input-radio-faux" />Monthly
                                                                            </label>
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="oneField field-container-D  labelsLeftAligned  " id="tfa_2188-D">
                                                                <label id="tfa_2188-L" className="label preField reqMark" htmlFor="tfa_2188">Direct my donation to</label>
                                                                <div className="inputWrapper">
                                                                    <select id="tfa_2188" name="tfa_2188" title="Direct my donation to" aria-required="true" className="calc-gau required">
                                                                        <option value>Please select...</option>
                                                                        <option value="tfa_2196" id="tfa_2196" className="calcval-a0e6A000002BPwzQAG" selected data-default-value="true">Where it is needed most</option>
                                                                        <option value="tfa_2572" id="tfa_2572" data-conditionals="#tfa_2584" classname>A Repair the World Community</option>
                                                                        <option value="tfa_2195" id="tfa_2195" className="calcval-a0e6A000002BPx4QAG">One America Movement</option>
                                                                        <option value="tfa_2719" id="tfa_2719" className="calcval-a0e3s00000HVMl9AAH">Serve the Moment</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="oneField field-container-D  labelsLeftAligned   wf-acl-hidden" id="tfa_2571-D">
                                                                <label id="tfa_2571-L" className="label preField " htmlFor="tfa_2571">Other Designation</label>
                                                                <div className="inputWrapper">
                                                                    <input value="" type="text" id="tfa_2571" name="tfa_2571" defaultValue title="Other Designation" classname />
                                                                </div>
                                                            </div>
                                                            <div className="oneField field-container-D  labelsLeftAligned  " id="tfa_2584-D">
                                                                    <label id="tfa_2584-L" className="label preField reqMark" htmlFor="tfa_2584">Which community?</label><div className="inputWrapper">
                                                                    <select id="tfa_2584" name="tfa_2584" data-condition="`#tfa_2572`" title="Which community?" aria-required="true" className="calc-gau required">
                                                                        <option value>Please select...</option>
                                                                        <option value="tfa_2595" id="tfa_2595" className="calcval-a0e6A000002Q14zQAC">Atlanta</option>
                                                                        <option value="tfa_2596" id="tfa_2596" className="calcval-a0e6A000002BPxZQAW">Baltimore</option>
                                                                        <option value="tfa_2640" id="tfa_2640" className="calcval-a0e6A000007TEd2QAG">Brooklyn</option>
                                                                        <option value="tfa_2597" id="tfa_2597" className="calcval-a0e6A000002Q16HQAS">Chicago</option>
                                                                        <option value="tfa_2598" id="tfa_2598" data-conditionals="#tfa_2603" className="calcval-a0e6A000002BPxTQAW">Detroit</option>
                                                                        <option value="tfa_2641" id="tfa_2641" className="calcval-a0e6A000007TEdHQAW">Harlem</option>
                                                                        <option value="tfa_2601" id="tfa_2601" className="calcval-a0e6A000002BPxOQAW">Miami</option>
                                                                        <option value="tfa_2600" id="tfa_2600" data-conditionals="#tfa_2603" className="calcval-a0e6A000002BPxJQAW">Pittsburgh</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="oneField field-container-D  labelsRemoved  " id="tfa_2603-D" role="group" aria-labelledby="tfa_2603-L" data-tfa-labelledby="-L tfa_2603-L">
                                                                <div className="inputWrapper">
                                                                    <span id="tfa_2603" className="choices horizontal " data-condition="`#tfa_2598` OR `#tfa_2600`">
                                                                        <span className="oneChoice">
                                                                            <input value="" type="checkbox" defaultValue="tfa_2604" classname id="tfa_2604" name="tfa_2604" aria-labelledby="tfa_2604-L" data-tfa-labelledby="tfa_2603-L tfa_2604-L" />
                                                                            <span class="checkmark"><div class="line__one"></div><div class="line__two"></div></span>
                                                                            <label className="label postField" id="tfa_2604-L" htmlFor="tfa_2604">
                                                                                <span className="input-checkbox-faux" />This donation is for PeerCorps
                                                                            </label>
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </fieldset>
                                                    <fieldset id="tfa_28" className="section">
                                                        <div className="oneField field-container-D  labelsRemoved  " id="tfa_29-D" role="group" aria-labelledby="tfa_29-L" data-tfa-labelledby="-L tfa_29-L">
                                                            <div className="inputWrapper">
                                                                <span id="tfa_29" className="choices vertical ">
                                                                    <span className="oneChoice">
                                                                        <div className="input__heart">
                                                                            <input value="" type="checkbox" defaultValue="tfa_30" classname id="tfa_30" name="tfa_30" data-conditionals="#tfa_31" aria-labelledby="tfa_30-L" data-tfa-labelledby="tfa_29-L tfa_30-L" />
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="30.502" height="26.8" viewBox="0 0 30.502 26.8">
                                                                                <path id="Trazado_2413" data-name="Trazado 2413" d="M911.834,506.176c-4.363-2.952-8.572-6-11.821-10.163a9.5,9.5,0,0,1-2.231-7.916,7.558,7.558,0,0,1,5.534-6.108,7.758,7.758,0,0,1,7.939,1.929c.189.175.374.353.611.576a8.386,8.386,0,0,1,4.715-2.737,8.052,8.052,0,0,1,9.3,9.608,13.37,13.37,0,0,1-3.306,5.97A55.119,55.119,0,0,1,911.834,506.176Z" transform="translate(-896.613 -480.581)" fill="none" stroke="#fff" stroke-width="2"/>
                                                                            </svg>

                                                                        </div>
                                                                        <label className="label postField" id="tfa_30-L" htmlFor="tfa_30">
                                                                            <span className="input-checkbox-faux" />I would like to dedicate my donation in honor or memory of...
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </fieldset>
                                                    <fieldset id="tfa_31" className="section" data-condition="`#tfa_30`">
                                                        <legend id="tfa_31-L">
                                                            <b>Tribute Details</b>
                                                        </legend>
                                                        <div id="tfa_36" className="section inline group">
                                                            <div className="oneField field-container-D  labelsRemoved  " id="tfa_32-D" role="radiogroup" aria-labelledby="tfa_32-L" data-tfa-labelledby="-L tfa_32-L">
                                                                <div className="inputWrapper">
                                                                    <span id="tfa_32" className="choices horizontal required">
                                                                        <span className="oneChoice">
                                                                            <input value="" type="radio" defaultValue="tfa_34" classname id="tfa_34" name="tfa_32" aria-required="true" aria-labelledby="tfa_34-L" data-tfa-labelledby="tfa_32-L tfa_34-L" />
                                                                            <span class="checkmark">
                                                                                <div className="line__one"></div>
                                                                                <div className="line__two"></div>
                                                                            </span>
                                                                            <label className="label postField" id="tfa_34-L" htmlFor="tfa_34">
                                                                                <span className="input-radio-faux" />In honor of
                                                                            </label>
                                                                        </span>
                                                                        <span className="oneChoice">
                                                                            <input value="" type="radio" defaultValue="tfa_33" classname id="tfa_33" name="tfa_32" aria-required="true" aria-labelledby="tfa_33-L" data-tfa-labelledby="tfa_32-L tfa_33-L" />
                                                                            <span class="checkmark">
                                                                                <div className="line__one"></div>
                                                                                <div className="line__two"></div>
                                                                            </span>
                                                                            <label className="label postField" id="tfa_33-L" htmlFor="tfa_33"><span className="input-radio-faux" />In memory of</label>
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            <div className="oneField field-container-D  labelsRemoved  " id="tfa_35-D">
                                                                <div className="inputWrapper">
                                                                    <input value="" type="text" id="tfa_35" name="tfa_35" defaultValue aria-required="true" title="Honoree Name" className="required" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="oneField field-container-D    " id="tfa_37-D" role="radiogroup" aria-labelledby="tfa_37-L" data-tfa-labelledby="-L tfa_37-L">
                                                            <label id="tfa_37-L" className="label preField reqMark">Would you like us to notify someone of this donation?</label>
                                                            <br />
                                                            <div className="inputWrapper">
                                                                <span id="tfa_37" className="choices vertical required">
                                                                    <span className="oneChoice">
                                                                        <input value="" type="radio" defaultValue="tfa_38" classname id="tfa_38" name="tfa_37" aria-required="true" data-conditionals="#tfa_2181,#tfa_43" aria-labelledby="tfa_38-L" data-tfa-labelledby="tfa_37-L tfa_38-L" />
                                                                        <span class="checkmark">
                                                                            <div className="line__one"></div>
                                                                            <div className="line__two"></div>
                                                                        </span>
                                                                        <label className="label postField" id="tfa_38-L" htmlFor="tfa_38"><span className="input-radio-faux" />Yes</label></span><span className="oneChoice"><input value="" type="radio" defaultValue="tfa_39" classname id="tfa_39" name="tfa_37" aria-required="true" aria-labelledby="tfa_39-L" data-tfa-labelledby="tfa_37-L tfa_39-L" />
                                                                        <span class="checkmark">
                                                                                <div className="line__one"></div>
                                                                                <div className="line__two"></div>
                                                                            </span>
                                                                        <label className="label postField" id="tfa_39-L" htmlFor="tfa_39">
                                                                            <span className="input-radio-faux" />No
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div id="tfa_43" className="section inline group" data-condition="`#tfa_38`">
                                                            <div className="oneField field-container-D  labelsLeftAligned  " id="tfa_41-D">
                                                                <label id="tfa_41-L" className="label preField reqMark" htmlFor="tfa_41">To:</label>
                                                            <div className="inputWrapper">
                                                            <input value="" type="text" id="tfa_41" name="tfa_41" defaultValue placeholder="First Name" value="" aria-required="true" title="To:" className="required" />
                                                            </div>
                                                        </div>
                                                        <div className="oneField field-container-D  labelsRemoved  " id="tfa_2635-D"><div className="inputWrapper"><input value="" type="text" id="tfa_2635" name="tfa_2635" defaultValue placeholder="Last Name" aria-required="true" title="To:" className="required" /></div></div>
                                                        <div className="oneField field-container-D  labelsLeftAligned  " id="tfa_42-D">
                                                            <label id="tfa_42-L" className="label preField reqMark" htmlFor="tfa_42">From:</label><div className="inputWrapper"><input value="" type="text" id="tfa_42" name="tfa_42" defaultValue aria-required="true" placeholder="TYPE" title="From:" className="required" /></div>
                                                        </div>
                                                        </div>
                                                        <div id="tfa_2181" className="section group" data-condition="`#tfa_38`"><div id="tfa_2178" className="section inline group">
                                                            <div className="oneField field-container-D    " id="tfa_44-D">
                                                            <label id="tfa_44-L" className="label preField " htmlFor="tfa_44">Personal message:</label><br /><div className="inputWrapper"><textarea id="tfa_44" name="tfa_44" title="Personal message:" placeholder="MESSAGE" classname defaultValue={""} /></div>
                                                            </div>
                                                            <div className="htmlSection" id="tfa_45"><div className="htmlContent" id="tfa_45-HTML"><i style={{"color" : "white!important"}}>This is the contact information for the person(s) being acknowledged for this tribute gift; this should not be the donor's information.</i><br /></div></div>
                                                            <div className="oneField field-container-D    " id="tfa_2633-D">
                                                            <label id="tfa_2633-L" className="label preField reqMark" htmlFor="tfa_2633">Recipient's Email Address</label><br /><div className="inputWrapper"><input value="" placeholder="Email" type="text" id="tfa_2633" name="tfa_2633" defaultValue aria-required="true" title="Recipient's Email Address" className="validate-email required" /></div>
                                                            </div>
                                                        </div></div>
                                                    </fieldset>
                                                </div>
                                                <div className="form__step form__step__two">
                                                    <fieldset id="tfa_2524" className="section">
                                                    <legend id="tfa_2524-L"><b>Payment Information</b></legend>
                                                    <div className="oneField field-container-D     wf-acl-hidden" id="tfa_2720-D" role="radiogroup" aria-labelledby="tfa_2720-L" data-tfa-labelledby="-L tfa_2720-L">
                                                        <label id="tfa_2720-L" className="label preField ">How would you like to pay?</label><br /><div className="inputWrapper"><span id="tfa_2720" className="choices vertical " data-condition="`#tfa_17`"><span className="oneChoice"><input value="" type="radio" defaultValue="tfa_2721" className="calc-method calcval-1" defaultChecked data-default-value="true" id="tfa_2721" name="tfa_2720" aria-labelledby="tfa_2721-L" data-tfa-labelledby="tfa_2720-L tfa_2721-L" /><label className="label postField" id="tfa_2721-L" htmlFor="tfa_2721"><span className="input-radio-faux" />Credit Card</label></span><span className="oneChoice"><input value="" type="radio" defaultValue="tfa_2722" className="calc-method calcval-2" id="tfa_2722" name="tfa_2720" aria-labelledby="tfa_2722-L" data-tfa-labelledby="tfa_2720-L tfa_2722-L" /><label className="label postField" id="tfa_2722-L" htmlFor="tfa_2722"><span className="input-radio-faux" />PayPal</label></span></span></div>
                                                    </div>
                                                    <div id="tfa_2716" className="section inline group">
                                                        <div className="oneField field-container-D    " id="tfa_2627-D">
                                                        <label id="tfa_2627-L" className="label preField reqMark" htmlFor="tfa_2627">Credit Card Type</label><br /><div className="inputWrapper"><select id="tfa_2627" name="tfa_2627" title="Credit Card Type" aria-required="true" className="required"><option value>Please select...</option>
                                                            <option value="tfa_2628" id="tfa_2628" classname>Visa</option>
                                                            <option value="tfa_2629" id="tfa_2629" classname>Mastercard</option>
                                                            <option value="tfa_2630" id="tfa_2630" classname>Discover</option>
                                                            <option value="tfa_2631" id="tfa_2631" classname>Amex</option>
                                                            <option value="tfa_2632" id="tfa_2632" classname>Other</option></select></div>
                                                        </div>
                                                        <div className="oneField field-container-D    " id="tfa_2526-D">
                                                        <label id="tfa_2526-L" className="label preField reqMark" htmlFor="tfa_2526">Card Number</label><br /><div className="inputWrapper"><input value="" type="text" id="tfa_2526" name="tfa_2526" defaultValue aria-required="true" title="Card Number" className="validate-custom /^\d+$/g required" /></div>
                                                        </div>
                                                        <div className="oneField field-container-D    " id="tfa_2528-D">
                                                        <label id="tfa_2528-L" className="label preField reqMark" htmlFor="tfa_2528">MM</label><br /><div className="inputWrapper"><input value="" type="text" id="tfa_2528" name="tfa_2528" defaultValue maxLength={2} aria-required="true" min={1} max={12} title="MM" className="validate-integer required" /></div>
                                                        </div>
                                                        <div className="oneField field-container-D    " id="tfa_2529-D">
                                                        <label id="tfa_2529-L" className="label preField reqMark" htmlFor="tfa_2529">YY</label><br /><div className="inputWrapper"><input value="" type="text" id="tfa_2529" name="tfa_2529" defaultValue maxLength={2} aria-required="true" max={9999} title="YY" className="validate-integer required" /></div>
                                                        </div>
                                                        <div className="oneField field-container-D    " id="tfa_2530-D">
                                                        <label id="tfa_2530-L" className="label preField reqMark" htmlFor="tfa_2530">Code</label><br /><div className="inputWrapper"><input value="" type="text" id="tfa_2530" name="tfa_2530" defaultValue aria-required="true" title="Code" className="required" /></div>
                                                        </div>
                                                        <div id="tfa_2717" className="section inline group">
                                                        <div className="oneField field-container-D    " id="tfa_2525-D">
                                                            <label id="tfa_2525-L" className="label preField reqMark" htmlFor="tfa_2525">First Name</label><br /><div className="inputWrapper"><input value="" type="text" id="tfa_2525" name="tfa_2525" defaultValue aria-required="true" title="First Name" className="calc-cardfirstname required" /></div>
                                                        </div>
                                                        <div className="oneField field-container-D    " id="tfa_2532-D">
                                                            <label id="tfa_2532-L" className="label preField reqMark" htmlFor="tfa_2532">Last Name</label><br /><div className="inputWrapper"><input value="" type="text" id="tfa_2532" name="tfa_2532" defaultValue aria-required="true" title="Last Name" className="calc-cardlastname required" /></div>
                                                        </div>
                                                        </div>
                                                        <div id="tfa_2513" className="section inline group">
                                                        <div className="oneField field-container-D    " id="tfa_2198-D">
                                                            <label id="tfa_2198-L" className="label preField reqMark" htmlFor="tfa_2198">Street Address</label><br /><div className="inputWrapper"><input value="" type="text" id="tfa_2198" name="tfa_2198" defaultValue aria-required="true" title="Street Address" className="required" /></div>
                                                        </div>
                                                        <div className="oneField field-container-D    " id="tfa_2200-D">
                                                            <label id="tfa_2200-L" className="label preField reqMark" htmlFor="tfa_2200">City</label><br /><div className="inputWrapper"><input value="" type="text" id="tfa_2200" name="tfa_2200" defaultValue aria-required="true" title="City" className="required" /></div>
                                                        </div>
                                                        </div>
                                                        <div id="tfa_2514" className="section inline group">
                                                        <div className="oneField field-container-D    " id="tfa_2201-D">
                                                            <label id="tfa_2201-L" className="label preField reqMark" htmlFor="tfa_2201">Country</label><br /><div className="inputWrapper"><select id="tfa_2201" name="tfa_2201" title="Country" aria-required="true" className="required"><option value>Please select...</option>
                                                                <option value="tfa_2202" id="tfa_2202" classname>Afghanistan</option>
                                                                <option value="tfa_2203" id="tfa_2203" classname>Albania</option>
                                                                <option value="tfa_2204" id="tfa_2204" classname>Algeria</option>
                                                                <option value="tfa_2205" id="tfa_2205" classname>American Samoa</option>
                                                                <option value="tfa_2206" id="tfa_2206" classname>Andorra</option>
                                                                <option value="tfa_2207" id="tfa_2207" classname>Angola</option>
                                                                <option value="tfa_2208" id="tfa_2208" classname>Anguilla</option>
                                                                <option value="tfa_2209" id="tfa_2209" classname>Antarctica</option>
                                                                <option value="tfa_2210" id="tfa_2210" classname>Antigua and Barbuda</option>
                                                                <option value="tfa_2211" id="tfa_2211" classname>Argentina</option>
                                                                <option value="tfa_2212" id="tfa_2212" classname>Armenia</option>
                                                                <option value="tfa_2213" id="tfa_2213" classname>Aruba</option>
                                                                <option value="tfa_2214" id="tfa_2214" classname>Australia</option>
                                                                <option value="tfa_2215" id="tfa_2215" classname>Austria</option>
                                                                <option value="tfa_2216" id="tfa_2216" classname>Azerbaijan</option>
                                                                <option value="tfa_2217" id="tfa_2217" classname>Bahamas</option>
                                                                <option value="tfa_2218" id="tfa_2218" classname>Bahrain</option>
                                                                <option value="tfa_2219" id="tfa_2219" classname>Bangladesh</option>
                                                                <option value="tfa_2220" id="tfa_2220" classname>Barbados</option>
                                                                <option value="tfa_2221" id="tfa_2221" classname>Belarus</option>
                                                                <option value="tfa_2222" id="tfa_2222" classname>Belgium</option>
                                                                <option value="tfa_2223" id="tfa_2223" classname>Belize</option>
                                                                <option value="tfa_2224" id="tfa_2224" classname>Benin</option>
                                                                <option value="tfa_2225" id="tfa_2225" classname>Bermuda</option>
                                                                <option value="tfa_2226" id="tfa_2226" classname>Bhutan</option>
                                                                <option value="tfa_2227" id="tfa_2227" classname>Bolivia</option>
                                                                <option value="tfa_2228" id="tfa_2228" classname>Bosnia and Herzegovina</option>
                                                                <option value="tfa_2229" id="tfa_2229" classname>Botswana</option>
                                                                <option value="tfa_2230" id="tfa_2230" classname>Bouvet Island</option>
                                                                <option value="tfa_2231" id="tfa_2231" classname>Brazil</option>
                                                                <option value="tfa_2232" id="tfa_2232" classname>British Indian Ocean Territory</option>
                                                                <option value="tfa_2233" id="tfa_2233" classname>Brunei</option>
                                                                <option value="tfa_2234" id="tfa_2234" classname>Bulgaria</option>
                                                                <option value="tfa_2235" id="tfa_2235" classname>Burkina Faso</option>
                                                                <option value="tfa_2236" id="tfa_2236" classname>Burundi</option>
                                                                <option value="tfa_2237" id="tfa_2237" classname>Cambodia</option>
                                                                <option value="tfa_2238" id="tfa_2238" classname>Cameroon</option>
                                                                <option value="tfa_2239" id="tfa_2239" data-conditionals="#tfa_2497,#tfa_2511" classname>Canada</option>
                                                                <option value="tfa_2240" id="tfa_2240" classname>Cape Verde</option>
                                                                <option value="tfa_2241" id="tfa_2241" classname>Cayman Islands</option>
                                                                <option value="tfa_2242" id="tfa_2242" classname>Central African Republic</option>
                                                                <option value="tfa_2243" id="tfa_2243" classname>Chad</option>
                                                                <option value="tfa_2244" id="tfa_2244" classname>Chile</option>
                                                                <option value="tfa_2245" id="tfa_2245" classname>China</option>
                                                                <option value="tfa_2246" id="tfa_2246" classname>Christmas Island</option>
                                                                <option value="tfa_2247" id="tfa_2247" classname>Cocos ( Keeling ) Islands</option>
                                                                <option value="tfa_2248" id="tfa_2248" classname>Colombia</option>
                                                                <option value="tfa_2249" id="tfa_2249" classname>Comoros</option>
                                                                <option value="tfa_2250" id="tfa_2250" classname>Congo</option>
                                                                <option value="tfa_2251" id="tfa_2251" classname>Cook Islands</option>
                                                                <option value="tfa_2252" id="tfa_2252" classname>Costa Rica</option>
                                                                <option value="tfa_2253" id="tfa_2253" classname>Côte d ' Ivoire</option>
                                                                <option value="tfa_2254" id="tfa_2254" classname>Croatia ( Hrvatska )</option>
                                                                <option value="tfa_2255" id="tfa_2255" classname>Cuba</option>
                                                                <option value="tfa_2256" id="tfa_2256" classname>Cyprus</option>
                                                                <option value="tfa_2257" id="tfa_2257" classname>Czech Republic</option>
                                                                <option value="tfa_2258" id="tfa_2258" classname>Congo ( DRC )</option>
                                                                <option value="tfa_2259" id="tfa_2259" classname>Denmark</option>
                                                                <option value="tfa_2260" id="tfa_2260" classname>Djibouti</option>
                                                                <option value="tfa_2261" id="tfa_2261" classname>Dominica</option>
                                                                <option value="tfa_2262" id="tfa_2262" classname>Dominican Republic</option>
                                                                <option value="tfa_2263" id="tfa_2263" classname>East Timor</option>
                                                                <option value="tfa_2264" id="tfa_2264" classname>Ecuador</option>
                                                                <option value="tfa_2265" id="tfa_2265" classname>Egypt</option>
                                                                <option value="tfa_2266" id="tfa_2266" classname>El Salvador</option>
                                                                <option value="tfa_2267" id="tfa_2267" classname>Equatorial Guinea</option>
                                                                <option value="tfa_2268" id="tfa_2268" classname>Eritrea</option>
                                                                <option value="tfa_2269" id="tfa_2269" classname>Estonia</option>
                                                                <option value="tfa_2270" id="tfa_2270" classname>Ethiopia</option>
                                                                <option value="tfa_2271" id="tfa_2271" classname>Falkland Islands ( Islas Malvinas )</option>
                                                                <option value="tfa_2272" id="tfa_2272" classname>Faroe Islands</option>
                                                                <option value="tfa_2273" id="tfa_2273" classname>Fiji Islands</option>
                                                                <option value="tfa_2274" id="tfa_2274" classname>Finland</option>
                                                                <option value="tfa_2275" id="tfa_2275" classname>France</option>
                                                                <option value="tfa_2276" id="tfa_2276" classname>French Guiana</option>
                                                                <option value="tfa_2277" id="tfa_2277" classname>French Polynesia</option>
                                                                <option value="tfa_2278" id="tfa_2278" classname>French Southern and Antarctic Lands</option>
                                                                <option value="tfa_2279" id="tfa_2279" classname>Gabon</option>
                                                                <option value="tfa_2280" id="tfa_2280" classname>Gambia</option>
                                                                <option value="tfa_2281" id="tfa_2281" classname>Georgia</option>
                                                                <option value="tfa_2282" id="tfa_2282" classname>Germany</option>
                                                                <option value="tfa_2283" id="tfa_2283" classname>Ghana</option>
                                                                <option value="tfa_2284" id="tfa_2284" classname>Gibraltar</option>
                                                                <option value="tfa_2285" id="tfa_2285" classname>Greece</option>
                                                                <option value="tfa_2286" id="tfa_2286" classname>Greenland</option>
                                                                <option value="tfa_2287" id="tfa_2287" classname>Grenada</option>
                                                                <option value="tfa_2288" id="tfa_2288" classname>Guadeloupe</option>
                                                                <option value="tfa_2289" id="tfa_2289" classname>Guam</option>
                                                                <option value="tfa_2290" id="tfa_2290" classname>Guatemala</option>
                                                                <option value="tfa_2291" id="tfa_2291" classname>Guinea</option>
                                                                <option value="tfa_2292" id="tfa_2292" classname>Guinea-Bissau</option>
                                                                <option value="tfa_2293" id="tfa_2293" classname>Guyana</option>
                                                                <option value="tfa_2294" id="tfa_2294" classname>Haiti</option>
                                                                <option value="tfa_2295" id="tfa_2295" classname>Heard Island and McDonald Islands</option>
                                                                <option value="tfa_2296" id="tfa_2296" classname>Honduras</option>
                                                                <option value="tfa_2297" id="tfa_2297" classname>Hong Kong SAR</option>
                                                                <option value="tfa_2298" id="tfa_2298" classname>Hungary</option>
                                                                <option value="tfa_2299" id="tfa_2299" classname>Iceland</option>
                                                                <option value="tfa_2300" id="tfa_2300" classname>India</option>
                                                                <option value="tfa_2301" id="tfa_2301" classname>Indonesia</option>
                                                                <option value="tfa_2302" id="tfa_2302" classname>Iran</option>
                                                                <option value="tfa_2303" id="tfa_2303" classname>Iraq</option>
                                                                <option value="tfa_2304" id="tfa_2304" classname>Ireland</option>
                                                                <option value="tfa_2305" id="tfa_2305" classname>Israel</option>
                                                                <option value="tfa_2306" id="tfa_2306" classname>Italy</option>
                                                                <option value="tfa_2307" id="tfa_2307" classname>Jamaica</option>
                                                                <option value="tfa_2308" id="tfa_2308" classname>Japan</option>
                                                                <option value="tfa_2309" id="tfa_2309" classname>Jordan</option>
                                                                <option value="tfa_2310" id="tfa_2310" classname>Kazakhstan</option>
                                                                <option value="tfa_2311" id="tfa_2311" classname>Kenya</option>
                                                                <option value="tfa_2312" id="tfa_2312" classname>Kiribati</option>
                                                                <option value="tfa_2313" id="tfa_2313" classname>Korea</option>
                                                                <option value="tfa_2314" id="tfa_2314" classname>Kuwait</option>
                                                                <option value="tfa_2315" id="tfa_2315" classname>Kyrgyzstan</option>
                                                                <option value="tfa_2316" id="tfa_2316" classname>Laos</option>
                                                                <option value="tfa_2317" id="tfa_2317" classname>Latvia</option>
                                                                <option value="tfa_2318" id="tfa_2318" classname>Lebanon</option>
                                                                <option value="tfa_2319" id="tfa_2319" classname>Lesotho</option>
                                                                <option value="tfa_2320" id="tfa_2320" classname>Liberia</option>
                                                                <option value="tfa_2321" id="tfa_2321" classname>Libya</option>
                                                                <option value="tfa_2322" id="tfa_2322" classname>Liechtenstein</option>
                                                                <option value="tfa_2323" id="tfa_2323" classname>Lithuania</option>
                                                                <option value="tfa_2324" id="tfa_2324" classname>Luxembourg</option>
                                                                <option value="tfa_2325" id="tfa_2325" classname>Macao SAR</option>
                                                                <option value="tfa_2326" id="tfa_2326" classname>Macedonia, Former Yugoslav Republic of</option>
                                                                <option value="tfa_2327" id="tfa_2327" classname>Madagascar</option>
                                                                <option value="tfa_2328" id="tfa_2328" classname>Malawi</option>
                                                                <option value="tfa_2329" id="tfa_2329" classname>Malaysia</option>
                                                                <option value="tfa_2330" id="tfa_2330" classname>Maldives</option>
                                                                <option value="tfa_2331" id="tfa_2331" classname>Mali</option>
                                                                <option value="tfa_2332" id="tfa_2332" classname>Malta</option>
                                                                <option value="tfa_2333" id="tfa_2333" classname>Marshall Islands</option>
                                                                <option value="tfa_2334" id="tfa_2334" classname>Martinique</option>
                                                                <option value="tfa_2335" id="tfa_2335" classname>Mauritania</option>
                                                                <option value="tfa_2336" id="tfa_2336" classname>Mauritius</option>
                                                                <option value="tfa_2337" id="tfa_2337" classname>Mayotte</option>
                                                                <option value="tfa_2338" id="tfa_2338" classname>Mexico</option>
                                                                <option value="tfa_2339" id="tfa_2339" classname>Micronesia</option>
                                                                <option value="tfa_2340" id="tfa_2340" classname>Moldova</option>
                                                                <option value="tfa_2341" id="tfa_2341" classname>Monaco</option>
                                                                <option value="tfa_2342" id="tfa_2342" classname>Mongolia</option>
                                                                <option value="tfa_2343" id="tfa_2343" classname>Montserrat</option>
                                                                <option value="tfa_2344" id="tfa_2344" classname>Morocco</option>
                                                                <option value="tfa_2345" id="tfa_2345" classname>Mozambique</option>
                                                                <option value="tfa_2346" id="tfa_2346" classname>Myanmar</option>
                                                                <option value="tfa_2347" id="tfa_2347" classname>Namibia</option>
                                                                <option value="tfa_2348" id="tfa_2348" classname>Nauru</option>
                                                                <option value="tfa_2349" id="tfa_2349" classname>Nepal</option>
                                                                <option value="tfa_2350" id="tfa_2350" classname>Netherlands</option>
                                                                <option value="tfa_2351" id="tfa_2351" classname>Netherlands Antilles</option>
                                                                <option value="tfa_2352" id="tfa_2352" classname>New Caledonia</option>
                                                                <option value="tfa_2353" id="tfa_2353" classname>New Zealand</option>
                                                                <option value="tfa_2354" id="tfa_2354" classname>Nicaragua</option>
                                                                <option value="tfa_2355" id="tfa_2355" classname>Niger</option>
                                                                <option value="tfa_2356" id="tfa_2356" classname>Nigeria</option>
                                                                <option value="tfa_2357" id="tfa_2357" classname>Niue</option>
                                                                <option value="tfa_2358" id="tfa_2358" classname>Norfolk Island</option>
                                                                <option value="tfa_2359" id="tfa_2359" classname>North Korea</option>
                                                                <option value="tfa_2360" id="tfa_2360" classname>Northern Mariana Islands</option>
                                                                <option value="tfa_2361" id="tfa_2361" classname>Norway</option>
                                                                <option value="tfa_2362" id="tfa_2362" classname>Oman</option>
                                                                <option value="tfa_2363" id="tfa_2363" classname>Pakistan</option>
                                                                <option value="tfa_2364" id="tfa_2364" classname>Palau</option>
                                                                <option value="tfa_2365" id="tfa_2365" classname>Panama</option>
                                                                <option value="tfa_2366" id="tfa_2366" classname>Papua New Guinea</option>
                                                                <option value="tfa_2367" id="tfa_2367" classname>Paraguay</option>
                                                                <option value="tfa_2368" id="tfa_2368" classname>Peru</option>
                                                                <option value="tfa_2369" id="tfa_2369" classname>Philippines</option>
                                                                <option value="tfa_2370" id="tfa_2370" classname>Pitcairn Islands</option>
                                                                <option value="tfa_2371" id="tfa_2371" classname>Poland</option>
                                                                <option value="tfa_2372" id="tfa_2372" classname>Portugal</option>
                                                                <option value="tfa_2373" id="tfa_2373" classname>Puerto Rico</option>
                                                                <option value="tfa_2374" id="tfa_2374" classname>Qatar</option>
                                                                <option value="tfa_2375" id="tfa_2375" classname>Reunion</option>
                                                                <option value="tfa_2376" id="tfa_2376" classname>Romania</option>
                                                                <option value="tfa_2377" id="tfa_2377" classname>Russia</option>
                                                                <option value="tfa_2378" id="tfa_2378" classname>Rwanda</option>
                                                                <option value="tfa_2379" id="tfa_2379" classname>Samoa</option>
                                                                <option value="tfa_2380" id="tfa_2380" classname>San Marino</option>
                                                                <option value="tfa_2381" id="tfa_2381" classname>São Tomé and Prìncipe</option>
                                                                <option value="tfa_2382" id="tfa_2382" classname>Saudi Arabia</option>
                                                                <option value="tfa_2383" id="tfa_2383" classname>Senegal</option>
                                                                <option value="tfa_2384" id="tfa_2384" classname>Serbia and Montenegro</option>
                                                                <option value="tfa_2385" id="tfa_2385" classname>Seychelles</option>
                                                                <option value="tfa_2386" id="tfa_2386" classname>Sierra Leone</option>
                                                                <option value="tfa_2387" id="tfa_2387" classname>Singapore</option>
                                                                <option value="tfa_2388" id="tfa_2388" classname>Slovakia</option>
                                                                <option value="tfa_2389" id="tfa_2389" classname>Slovenia</option>
                                                                <option value="tfa_2390" id="tfa_2390" classname>Solomon Islands</option>
                                                                <option value="tfa_2391" id="tfa_2391" classname>Somalia</option>
                                                                <option value="tfa_2392" id="tfa_2392" classname>South Africa</option>
                                                                <option value="tfa_2393" id="tfa_2393" classname>South Georgia and the South Sandwich Islands</option>
                                                                <option value="tfa_2394" id="tfa_2394" classname>Spain</option>
                                                                <option value="tfa_2395" id="tfa_2395" classname>Sri Lanka</option>
                                                                <option value="tfa_2396" id="tfa_2396" classname>St. Helena</option>
                                                                <option value="tfa_2397" id="tfa_2397" classname>St. Kitts and Nevis</option>
                                                                <option value="tfa_2398" id="tfa_2398" classname>St. Lucia</option>
                                                                <option value="tfa_2399" id="tfa_2399" classname>St. Pierre and Miquelon</option>
                                                                <option value="tfa_2400" id="tfa_2400" classname>St. Vincent and the Grenadines</option>
                                                                <option value="tfa_2401" id="tfa_2401" classname>Sudan</option>
                                                                <option value="tfa_2402" id="tfa_2402" classname>Suriname</option>
                                                                <option value="tfa_2403" id="tfa_2403" classname>Svalbard and Jan Mayen</option>
                                                                <option value="tfa_2404" id="tfa_2404" classname>Swaziland</option>
                                                                <option value="tfa_2405" id="tfa_2405" classname>Sweden</option>
                                                                <option value="tfa_2406" id="tfa_2406" classname>Switzerland</option>
                                                                <option value="tfa_2407" id="tfa_2407" classname>Syria</option>
                                                                <option value="tfa_2408" id="tfa_2408" classname>Taiwan</option>
                                                                <option value="tfa_2409" id="tfa_2409" classname>Tajikistan</option>
                                                                <option value="tfa_2410" id="tfa_2410" classname>Tanzania</option>
                                                                <option value="tfa_2411" id="tfa_2411" classname>Thailand</option>
                                                                <option value="tfa_2412" id="tfa_2412" classname>Togo</option>
                                                                <option value="tfa_2413" id="tfa_2413" classname>Tokelau</option>
                                                                <option value="tfa_2414" id="tfa_2414" classname>Tonga</option>
                                                                <option value="tfa_2415" id="tfa_2415" classname>Trinidad and Tobago</option>
                                                                <option value="tfa_2416" id="tfa_2416" classname>Tunisia</option>
                                                                <option value="tfa_2417" id="tfa_2417" classname>Turkey</option>
                                                                <option value="tfa_2418" id="tfa_2418" classname>Turkmenistan</option>
                                                                <option value="tfa_2419" id="tfa_2419" classname>Turks and Caicos Islands</option>
                                                                <option value="tfa_2420" id="tfa_2420" classname>Tuvalu</option>
                                                                <option value="tfa_2421" id="tfa_2421" classname>Uganda</option>
                                                                <option value="tfa_2422" id="tfa_2422" classname>Ukraine</option>
                                                                <option value="tfa_2423" id="tfa_2423" classname>United Arab Emirates</option>
                                                                <option value="tfa_2424" id="tfa_2424" classname>United Kingdom</option>
                                                                <option value="tfa_2425" id="tfa_2425" data-conditionals="#tfa_2439,#tfa_2511" classname selected data-default-value="true">United States</option>
                                                                <option value="tfa_2426" id="tfa_2426" data-conditionals="#tfa_2439,#tfa_2511" classname>United States Minor Outlying Islands</option>
                                                                <option value="tfa_2427" id="tfa_2427" classname>Uruguay</option>
                                                                <option value="tfa_2428" id="tfa_2428" classname>Uzbekistan</option>
                                                                <option value="tfa_2429" id="tfa_2429" classname>Vanuatu</option>
                                                                <option value="tfa_2430" id="tfa_2430" classname>Vatican City</option>
                                                                <option value="tfa_2431" id="tfa_2431" classname>Venezuela</option>
                                                                <option value="tfa_2432" id="tfa_2432" classname>Viet Nam</option>
                                                                <option value="tfa_2433" id="tfa_2433" classname>Virgin Islands ( British )</option>
                                                                <option value="tfa_2434" id="tfa_2434" classname>Virgin Islands</option>
                                                                <option value="tfa_2435" id="tfa_2435" classname>Wallis and Futuna</option>
                                                                <option value="tfa_2436" id="tfa_2436" classname>Yemen</option>
                                                                <option value="tfa_2437" id="tfa_2437" classname>Zambia</option>
                                                                <option value="tfa_2438" id="tfa_2438" classname>Zimbabwe</option></select></div>
                                                        </div>
                                                        <div className="oneField field-container-D    " id="tfa_2439-D">
                                                            <label id="tfa_2439-L" className="label preField reqMark" htmlFor="tfa_2439">State</label><br /><div className="inputWrapper"><select id="tfa_2439" name="tfa_2439" data-condition="`#tfa_2425` OR `#tfa_2426`" title="State" aria-required="true" className="required"><option value>Please select...</option>
                                                                <option value="tfa_2440" id="tfa_2440" classname>Alabama</option>
                                                                <option value="tfa_2441" id="tfa_2441" classname>Alaska</option>
                                                                <option value="tfa_2442" id="tfa_2442" classname>Arizona</option>
                                                                <option value="tfa_2443" id="tfa_2443" classname>Arkansas</option>
                                                                <option value="tfa_2444" id="tfa_2444" classname>California</option>
                                                                <option value="tfa_2445" id="tfa_2445" classname>Colorado</option>
                                                                <option value="tfa_2446" id="tfa_2446" classname>Connecticut</option>
                                                                <option value="tfa_2447" id="tfa_2447" classname>Delaware</option>
                                                                <option value="tfa_2448" id="tfa_2448" classname>District Of Columbia</option>
                                                                <option value="tfa_2449" id="tfa_2449" classname>Florida</option>
                                                                <option value="tfa_2450" id="tfa_2450" classname>Georgia</option>
                                                                <option value="tfa_2451" id="tfa_2451" classname>Hawaii</option>
                                                                <option value="tfa_2452" id="tfa_2452" classname>Idaho</option>
                                                                <option value="tfa_2453" id="tfa_2453" classname>Illinois</option>
                                                                <option value="tfa_2454" id="tfa_2454" classname>Indiana</option>
                                                                <option value="tfa_2455" id="tfa_2455" classname>Iowa</option>
                                                                <option value="tfa_2456" id="tfa_2456" classname>Kansas</option>
                                                                <option value="tfa_2457" id="tfa_2457" classname>Kentucky</option>
                                                                <option value="tfa_2458" id="tfa_2458" classname>Louisiana</option>
                                                                <option value="tfa_2459" id="tfa_2459" classname>Maine</option>
                                                                <option value="tfa_2460" id="tfa_2460" classname>Maryland</option>
                                                                <option value="tfa_2461" id="tfa_2461" classname>Massachusetts</option>
                                                                <option value="tfa_2462" id="tfa_2462" classname>Michigan</option>
                                                                <option value="tfa_2463" id="tfa_2463" classname>Minnesota</option>
                                                                <option value="tfa_2464" id="tfa_2464" classname>Mississippi</option>
                                                                <option value="tfa_2465" id="tfa_2465" classname>Missouri</option>
                                                                <option value="tfa_2466" id="tfa_2466" classname>Montana</option>
                                                                <option value="tfa_2467" id="tfa_2467" classname>Nebraska</option>
                                                                <option value="tfa_2468" id="tfa_2468" classname>Nevada</option>
                                                                <option value="tfa_2469" id="tfa_2469" classname>New Hampshire</option>
                                                                <option value="tfa_2470" id="tfa_2470" classname>New Jersey</option>
                                                                <option value="tfa_2471" id="tfa_2471" classname>New Mexico</option>
                                                                <option value="tfa_2472" id="tfa_2472" classname>New York</option>
                                                                <option value="tfa_2473" id="tfa_2473" classname>North Carolina</option>
                                                                <option value="tfa_2474" id="tfa_2474" classname>North Dakota</option>
                                                                <option value="tfa_2475" id="tfa_2475" classname>Ohio</option>
                                                                <option value="tfa_2476" id="tfa_2476" classname>Oklahoma</option>
                                                                <option value="tfa_2477" id="tfa_2477" classname>Oregon</option>
                                                                <option value="tfa_2478" id="tfa_2478" classname>Pennsylvania</option>
                                                                <option value="tfa_2479" id="tfa_2479" classname>Rhode Island</option>
                                                                <option value="tfa_2480" id="tfa_2480" classname>South Carolina</option>
                                                                <option value="tfa_2481" id="tfa_2481" classname>South Dakota</option>
                                                                <option value="tfa_2482" id="tfa_2482" classname>Tennessee</option>
                                                                <option value="tfa_2483" id="tfa_2483" classname>Texas</option>
                                                                <option value="tfa_2484" id="tfa_2484" classname>Utah</option>
                                                                <option value="tfa_2485" id="tfa_2485" classname>Vermont</option>
                                                                <option value="tfa_2486" id="tfa_2486" classname>Virginia</option>
                                                                <option value="tfa_2487" id="tfa_2487" classname>Washington</option>
                                                                <option value="tfa_2488" id="tfa_2488" classname>West Virginia</option>
                                                                <option value="tfa_2489" id="tfa_2489" classname>Wisconsin</option>
                                                                <option value="tfa_2490" id="tfa_2490" classname>Wyoming</option>
                                                                <option value="tfa_2491" id="tfa_2491" classname>Puerto Rico</option>
                                                                <option value="tfa_2492" id="tfa_2492" classname>Virgin Island</option>
                                                                <option value="tfa_2493" id="tfa_2493" classname>Northern Mariana Islands</option>
                                                                <option value="tfa_2494" id="tfa_2494" classname>Guam</option>
                                                                <option value="tfa_2495" id="tfa_2495" classname>American Samoa</option>
                                                                <option value="tfa_2496" id="tfa_2496" classname>Palau</option></select></div>
                                                        </div>
                                                        </div>
                                                        <div id="tfa_2515" className="section inline group">
                                                        <div className="oneField field-container-D    " id="tfa_2497-D">
                                                            <label id="tfa_2497-L" className="label preField reqMark" htmlFor="tfa_2497">Provinces</label><br /><div className="inputWrapper"><select id="tfa_2497" name="tfa_2497" data-condition="`#tfa_2239`" title="Provinces" aria-required="true" className="calc-province required"><option value>Please select...</option>
                                                                <option value="tfa_2498" id="tfa_2498" className="calcval-AB">Alberta</option>
                                                                <option value="tfa_2499" id="tfa_2499" className="calcval-BC">British Columbia</option>
                                                                <option value="tfa_2500" id="tfa_2500" className="calcval-MB">Manitoba</option>
                                                                <option value="tfa_2501" id="tfa_2501" className="calcval-NB">New Brunswick</option>
                                                                <option value="tfa_2502" id="tfa_2502" className="calcval-NL">Newfoundland</option>
                                                                <option value="tfa_2503" id="tfa_2503" className="calcval-NT">Northwest Territories</option>
                                                                <option value="tfa_2504" id="tfa_2504" className="calcval-NS">Nova Scotia</option>
                                                                <option value="tfa_2505" id="tfa_2505" className="calcval-NU">Nunavut</option>
                                                                <option value="tfa_2506" id="tfa_2506" className="calcval-ON">Ontario</option>
                                                                <option value="tfa_2507" id="tfa_2507" className="calcval-PE">Prince Edward Island</option>
                                                                <option value="tfa_2508" id="tfa_2508" className="calcval-QC">Quebec</option>
                                                                <option value="tfa_2509" id="tfa_2509" className="calcval-SK">Saskatchewan</option>
                                                                <option value="tfa_2510" id="tfa_2510" className="calcval-YT">Yukon</option></select></div>
                                                        </div>
                                                        <div className="oneField field-container-D    " id="tfa_2511-D">
                                                            <label id="tfa_2511-L" className="label preField reqMark" htmlFor="tfa_2511">State/Province</label><br /><div className="inputWrapper"><input value="" type="text" id="tfa_2511" name="tfa_2511" defaultValue aria-required="true" data-condition="NOT (`#tfa_2425`) AND NOT (`#tfa_2426`) AND NOT (`#tfa_2239`)" title="State/Province" className="required" /></div>
                                                        </div>
                                                        <div className="oneField field-container-D    " id="tfa_2512-D">
                                                            <label id="tfa_2512-L" className="label preField reqMark" htmlFor="tfa_2512">Postal Code</label><br /><div className="inputWrapper"><input value="" type="text" id="tfa_2512" name="tfa_2512" defaultValue aria-required="true" title="Postal Code" className="validate-alphanum required" /></div>
                                                        </div>
                                                        </div>
                                                        <div id="tfa_2718" className="section inline group">
                                                        <div className="oneField field-container-D    " id="tfa_2186-D">
                                                            <label id="tfa_2186-L" className="label preField reqMark" htmlFor="tfa_2186">Email</label><br /><div className="inputWrapper">
                                                            <input value="" type="text" id="tfa_2186" name="tfa_2186" defaultValue aria-required="true" aria-describedby="tfa_2186-HH" title="Email" className="validate-email calc-cardemail required" /><span className="field-hint-inactive" id="tfa_2186-H"><span id="tfa_2186-HH" className="hint">You'll receive emails from Repair the World. You may unsubscribe at any time.</span></span>
                                                            </div>
                                                        </div>
                                                        <div className="oneField field-container-D    " id="tfa_2516-D">
                                                            <label id="tfa_2516-L" className="label preField " htmlFor="tfa_2516">Phone Number</label><br /><div className="inputWrapper"><input value="" type="text" id="tfa_2516" name="tfa_2516" defaultValue title="Phone Number" classname /></div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    <div id="tfa_2551" className="section inline group">
                                                        <input value="" type="hidden" id="tfa_2548" name="tfa_2548" defaultValue className="formula=cardfirstname+space+cardlastname" /><input value="" type="hidden" id="tfa_2549" name="tfa_2549" defaultValue className="formula=cardemail" /><input value="" type="hidden" id="tfa_2564" name="tfa_2564" defaultValue=" " className="calc-space" />
                                                    </div>
                                                    </fieldset>
                                                </div>
                                                <div className="form__step form__step__three">
                                                    <fieldset id="tfa_2552" className="section">
                                                    <legend id="tfa_2552-L"><b>Total Gift</b></legend>
                                                    <div className="oneField field-container-D     wf-acl-hidden" id="tfa_2639-D">
                                                        <label id="tfa_2639-L" className="label preField " htmlFor="tfa_2639">Credit Card Processing Fee</label><br /><div className="inputWrapper"><input value="" type="text" id="tfa_2639" name="tfa_2639" defaultValue readOnly title="Credit Card Processing Fee" className="formula=(ProcessingFee*0.025*(amt+otheramt)) readonly" /></div>
                                                    </div>
                                                    <div className="oneField field-container-D  labelsLeftAligned  " id="tfa_2553-D">
                                                        <label id="tfa_2553-L" className="label preField reqMark" htmlFor="tfa_2553">$</label><div className="inputWrapper"><input value="" type="text" id="tfa_2553" name="tfa_2553" defaultValue readOnly aria-required="true" title="$" className="validate-float formula=(((amt+otheramt)+(ProcessingFee*0.025*(amt+otheramt)))).toFixed(2) calc-total readonly required" /></div>
                                                    </div>
                                                    <div id="tfa_2555" className="section group" data-condition="`#tfa_18`"><div className="htmlSection" id="tfa_2554"><div className="htmlContent" id="tfa_2554-HTML">donated monthly</div></div></div>
                                                    <div className="oneField field-container-D  labelsRemoved   wf-acl-hidden" id="tfa_2623-D" role="group" aria-labelledby="tfa_2623-L" data-tfa-labelledby="-L tfa_2623-L"><div className="inputWrapper"><span id="tfa_2623" className="choices vertical "><span className="oneChoice"><input value="" type="checkbox" defaultValue="tfa_2624" classname id="tfa_2624" name="tfa_2624" aria-labelledby="tfa_2624-L" data-tfa-labelledby="tfa_2623-L tfa_2624-L" /><label className="label postField" id="tfa_2624-L" htmlFor="tfa_2624"><span className="input-checkbox-faux" />I would like this donation to be listed as anonymous</label></span></span></div></div>
                                                    <div className="oneField field-container-D  labelsRemoved  " id="tfa_2636-D" role="group" aria-labelledby="tfa_2636-L" data-tfa-labelledby="-L tfa_2636-L"><div className="inputWrapper"><span id="tfa_2636" className="choices vertical "><span className="oneChoice"><input value="" type="checkbox" defaultValue="tfa_2637" className="calc-ProcessingFee calcval-1" defaultChecked data-default-value="true" id="tfa_2637" name="tfa_2637" aria-labelledby="tfa_2637-L" data-tfa-labelledby="tfa_2636-L tfa_2637-L" /><label className="label postField" id="tfa_2637-L" htmlFor="tfa_2637"><span className="input-checkbox-faux" />I would like to maximize my impact by covering the 2.5% transaction fee on my donation.</label></span></span></div></div>
                                                    </fieldset>
                                                    <input value="" type="hidden" id="tfa_2621" name="tfa_2621" defaultValue className="formula=gau" /><input value="" type="hidden" id="tfa_2622" name="tfa_2622" defaultValue className="formula=payments" /><div className="oneField field-container-D     wf-acl-hidden" id="tfa_2723-D">
                                                    <label id="tfa_2723-L" className="label preField " htmlFor="tfa_2723">PayPal Quantity</label><br /><div className="inputWrapper"><input value="" type="text" id="tfa_2723" name="tfa_2723" defaultValue readOnly title="PayPal Quantity" className="formula=if(method==2){payments}else{0} readonly" /></div>
                                                    </div>
                                                    <input value="" type="hidden" id="tfa_2625" name="tfa_2625" defaultValue className="formula=100*total" /><input value="" type="hidden" id="STRIPE_CUSTOMER_274127" name="STRIPE_CUSTOMER_274127" defaultValue classname /><input value="" type="hidden" id="STRIPE_SUBSCR_274127" name="STRIPE_SUBSCR_274127" defaultValue classname /><input value="" type="hidden" id="STRIPE_CHARGE_274127" name="STRIPE_CHARGE_274127" defaultValue classname /><input value="" type="hidden" id="tfa_2626" name="tfa_2626" defaultValue classname /><div id="Paypal_Hidden_Fields" className="section column group wf-acl-hidden">
                                                    <label className="label preField" id="Paypal_Hidden_Fields-L">Paypal_Hidden_Fields</label><br /><table className="columnLayout">
                                                        <tbody><tr>
                                                            <td><input value="" type="hidden" id="PayPal_Transaction_Amount" name="PayPal_Transaction_Amount" defaultValue classname /></td>
                                                            <td><input value="" type="hidden" id="PayPal_Buyer_Information" name="PayPal_Buyer_Information" defaultValue classname /></td>
                                                            <td><input value="" type="hidden" id="PayPal_Transaction_Id" name="PayPal_Transaction_Id" defaultValue classname /></td>
                                                        </tr>
                                                        <tr>
                                                            <td><input value="" type="hidden" id="PayPal_Transaction_Status" name="PayPal_Transaction_Status" defaultValue classname /></td>
                                                            <td><input value="" type="hidden" id="PayPal_Buyer_Notes" name="PayPal_Buyer_Notes" defaultValue classname /></td>
                                                        </tr>
                                                        </tbody></table>
                                                    </div>
                                                    <div className="actions" id="4696781-A">
                                                    <div id="google-captcha" style={{display: 'none'}}>
                                                        <br /><div className="captcha">
                                                        <div className="oneField">
                                                            <div className="g-recaptcha" id="g-recaptcha-render-div" />
                                                            <div className="g-captcha-error" />
                                                            <br />
                                                        </div>
                                                        <div className="captchaHelp">reCAPTCHA helps prevent automated form spam.<br />
                                                        </div>
                                                        <div id="disabled-explanation" className="captchaHelp" style={{display: 'none'}}>The submit button will be disabled until you complete the CAPTCHA.</div>
                                                        </div>
                                                    </div>
                                                    <input value="" type="submit" data-label="Donate" className="primaryAction" id="submit_button" defaultValue="Donate" />
                                                    </div>
                                                    <div style={{clear: 'both'}} />
                                                    <input value="" type="hidden" defaultValue={4696781} name="tfa_dbFormId" id="tfa_dbFormId" /><input value="" type="hidden" defaultValue name="tfa_dbResponseId" id="tfa_dbResponseId" /><input value="" type="hidden" defaultValue="456681eb362897875a1b544075626721" name="tfa_dbControl" id="tfa_dbControl" /><input value="" type="hidden" defaultValue={132} name="tfa_dbVersionId" id="tfa_dbVersionId" /><input value="" type="hidden" defaultValue name="tfa_switchedoff" id="tfa_switchedoff" />
                                                </div>
                                            </Slider>
                                        </form>
                                        </div>
                                        </div>
                                        
                                        <div className="wFormFooter"><p className="supportInfo"><a target="new" className="contactInfoLink" href="https://www.tfaforms.com/forms/help/4670930">Contact Information</a><br /></p></div>
                                        <p className="supportInfo">
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                </main>
            </>
        )
    }
}
