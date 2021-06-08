import React, {Component, Fragment, useEffect, useState} from "react";
import Slider from "react-slick"
import axios from "axios";

const BestSeller = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    }

    return (
        <>
            <Slider {...settings}/>

        </>
    )


}

export default BestSeller;