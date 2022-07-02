import React from 'react'
import "../style.css"
import pin from '../images/svg.png'
import bug from '../images/bug.png'
import cog from '../images/cog.png'
import fb from '../images/facebook.png'
import inst from '../images/instagram.png'
import twt from '../images/twitter.png'
import * as Icon from 'react-bootstrap-icons';
import Header from '../components/Header';


export default function Homepage() {
    return (
        <div>
            <Header/>
            <div class="hpimage " data-setbg="images/">

                <br /><br /><br /><br />
                <div className="hpbox">
                    <span className="topic">
                        Join with the best tutor to find your child's
                        <span className="white" style={{ lineheight: '110px' }}> potential  </span>
                    </span>
                </div>

            </div>


            <section className="fdb-block" id="1">
                <br /><br />
                <div className="container pt-3">
                    <div className="row align-items-center">
                        <div className="col-sm-6 side">
                            <h1>A Great way to grow your child</h1>
                            <p className="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                        <div className="col-sm-6 ">
                            <img alt="image" className="img-fluid img-side" src={pin} style={{ width: '400px' }} />
                        </div>
                    </div>
                </div>
            </section>


            <br /> <br /> <br />
            <div className="container-fluid">

                <div className="row text-center ">

                    <div className="col-md-6 bg-color-whitesmoke ">
                        <br /> <br /> <br />
                        <h1 className="hone">
                            Why Laboratory
                        </h1>
                        <br /> <br />
                        <p className="pr-5 pl-5">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque assumenda excepturi reiciendis. Minima dolor quisquam ad quo facere esse rem maxime aut, dolorum id alias voluptate, at, reprehenderit corporis asperiores.
                        </p>
                        <br /> <br /> <br />
                        <span>
                            <img src={bug} alt="image" style={{ height: '70px', width: '70px' }} />
                            {/* <i className="fa fa-bug icon-big-outline border-yellow " aria-hidden="true"></i> */}
                        </span>
                        {/* <Icon.Bug/> */}
                        <br /> <br /> <br /> <br /> <br />
                    </div>
                    <div className="col-md-6">

                        <div className="how-image">
                            <div className="bg-trans">

                                <br /> <br /> <br />
                                <h1 className=" font-weight-bold">
                                    How we can help you
                                </h1>
                                <br /> <br />
                                <p className="text-center pr-5 pl-5 ">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque assumenda excepturi reiciendis. Minima dolor quisquam ad quo facere esse rem maxime aut, dolorum id alias voluptate, at, reprehenderit corporis asperiores.
                                </p>
                                <br /> <br /> <br />
                                <span>
                                    <img src={cog} alt="image" style={{ height: '70px', width: '70px' }} />
                                    {/* <i className="fa fa-cog icon-big-outline border-white black" aria-hidden="true"></i>  */}
                                </span>

                                <br /> <br /> <br /> <br /> <br />

                            </div>
                        </div>

                    </div>

                </div>
            </div>







            <div className="container-fluid bg-gradient-yellow">
                <br /> <br /> <br /> <br />
                <div className="row">
                    <div className="col-sm-5 m-auto text-center">
                        <h3>Subscribe to our Newsletter</h3>
                        <br />
                    </div>
                    <div className="col-sm-7 m-auto text-center">
                        <form action="/action_page.php" className="form-inline submit-form ">
                            <input type="email" className="emailform" placeholder="john@gmail.com" value="" />
                            <input type="button" class=" btn btn-def1" value="Submit" />
                        </form>
                    </div>
                </div>
                <br /><br />
            </div>
            <div className="div row">

                <div class="col-md-4">

                </div>
                <div class="col-md-4">
                    <div class="container-fluid bg-white ">
                        <br /> <br /> <br />
                        <h1 class="text-center"> Apply now</h1>
                        <h6 class="text-center grey">Hurry up! only limited seats available</h6>


                    </div>
                    <br />

                    <div class="text-center">
                        <br /><br/><br/>
                        {/* <button href="#" class="btn btn-def btn-def-hoverout "> Apply Now</button> */}
                    </div>
                </div>
                <div class="col-md-4  text-center">
                    <br /> <br />
                    <br /> <br />
                    <div class="social-media">
                        <p class="mb-0 d-flex">
                            <a href="#" class="d-flex align-items-center justify-content-center"> <img src={fb} alt="image" style={{ height: '25px', width: '25px' }} /></a>
                            <a href="#" class="d-flex align-items-center justify-content-center"> <img src={twt} alt="image" style={{ height: '25px', width: '25px' }} /></a>
                            <a href="#" class="d-flex align-items-center justify-content-center"> <img src={inst} alt="image" style={{ height: '25px', width: '25px' }} /></a>
                        </p>
                    </div>
                </div>
                <br /><br />
            </div>
        </div>
    )
}
