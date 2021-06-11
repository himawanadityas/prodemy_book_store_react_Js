import React, {Fragment, Component, useState, useEffect} from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import axios from "axios";

import AppHeader from '../../Layout/AppHeader/';
import AppSidebar from '../../Layout/AppSidebar/';
import MyFooter from "../../Layout/AppFooter/MyFooter";
import AppFooter from '../../Layout/AppFooter/';
import logo from '../../assets/utils/images/Webp.net-resizeimage.png'
import logoLight from '../../assets/utils/images/Webp.net-resizeimage (2).png'
// Theme Options

import ThemeOptions from '../../Layout/ThemeOptions/';
import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardSubtitle,
    CardTitle,
    Col,
    Jumbotron,
    ListGroup,
    ListGroupItem,
    Row
} from "reactstrap";
import ProductCard from "./ProductCard";
import PageTitle from "../../Layout/AppMain/PageTitle";
import {IoIosSearch} from "react-icons/all";
import SweetAlert from "sweetalert-react";
import BestSeller from "./BestSeller";
import Slider from "react-slick";
import image from "../../assets/utils/images/SMP-books-banner.jpg"
import jumbotron2 from "../../assets/utils/images/amazing-old-book-high-resolution-wallpaper-download-free-.jpg"
import SearchBox from "../../Layout/AppHeader/Components/SearchBox";


const Homepage = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    }
    const [listDataBook, setListDataBook] = useState([])
    const [search, setSearch] = useState("")
    const [listSearch, setListSearch] = useState([])
    const [searchActive, setSearchActive] = useState(false)
    const [showNotif, setShowNotif] = useState(false)
    const [detailNotif, setDetailNotif] = useState(null)
    const [bestSeller, setBestSeller] = useState([])
    const [recommendation, setRecommendation] = useState([])

    useEffect(() => {
        axios.get('http://localhost:1212/api/book').then(res => {
            setListDataBook(res.data)
            console.log(res.data)
        }).catch()
    }, [])

    useEffect(() => {
        axios.get('http://localhost:1212/api/rekomendasi').then(res => {
            setRecommendation(res.data)
            console.log(res.data)
        }).catch()
        axios.get('http://localhost:1212/api/best-seller').then(res => {
            setBestSeller(res.data)
            console.log(res.data)
        }).catch()
    }, [])

    const addToCart = (value) => {
        let text = "Add '" + value.judulBuku + "' to your cart"
        setDetailNotif(text)
        setShowNotif(true)
        const dataCart = {
            "addToCart": [{
                "id": value.id,
                "idBuku": value.id,
                "kuantitasBuku": 1
            }]
        }
        axios.post('http://localhost:1212/api/cart', dataCart).then().catch()
    }


    const handleSearch = () => {
        setSearchActive(true)
        axios.get('http://localhost:1212/api/book/search/' + search).then(res => {
            setListSearch(res.data)
            console.log(res.data)
        }).catch()
    }

    const handleChangeSearch = (e) => {
        setSearch(e.target.value)
    }

    if (searchActive) {
        return (
            <Fragment>
                <CSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <AppHeader/>
                    <div className="app-main">
                        <div className="app-main__inner">
                            <Jumbotron style={{backgroundImage: `url(${image})`, backgroundSize: 'cover', height: 300}}>
                                <div className="search-wrapper active">
                                    <div className="input-holder">
                                        <input type="text" className="search-input" placeholder="Search Books"
                                               onChange={(e) => {
                                                   handleChangeSearch(e)
                                               }}/>
                                        <Button className="search-icon" onClick={() => {
                                            handleSearch()
                                        }}><span/></Button>
                                    </div>
                                </div>
                            </Jumbotron>
                            <Row>
                                {listSearch.map((data, index) => (
                                    <ProductCard key={index} data={data} title={data.judulBuku}
                                                 subtitle={data.hargaBuku}
                                                 id={data.id} handleClick={() => {
                                        addToCart(data)
                                    }}/>
                                ))}
                            </Row>
                            <AppFooter/>
                        </div>
                    </div>
                    <SweetAlert
                        title="Added to Cart!"
                        confirmButtonColor=""
                        show={showNotif}
                        text={detailNotif}
                        type="success"
                        onConfirm={() => {
                            setShowNotif(false)
                        }}/>
                </CSSTransitionGroup>
            </Fragment>);
    }
    return (
        <Fragment>
            <CSSTransitionGroup
                component="div"
                transitionName="TabsAnimation"
                transitionAppear={true}
                transitionAppearTimeout={0}
                transitionEnter={false}
                transitionLeave={false}>
                <AppHeader/>
                <div className="app-main">
                    <div className="app-main__inner">
                        <Jumbotron style={{backgroundImage: `url(${image})`, backgroundSize: 'cover', height: 300}}>
                            <img src={logo}/>
                            <div className="search-wrapper active">
                                <div className="input-holder">
                                    <input type="text" className="search-input" placeholder="Search Books"
                                           onChange={(e) => {
                                               handleChangeSearch(e)
                                           }}/>
                                    <Button className="search-icon" onClick={() => {
                                        handleSearch()
                                    }}><span/></Button>
                                </div>
                            </div>
                        </Jumbotron>
                        <Row>
                            {listDataBook.map((data, index) => (

                                <ProductCard key={index} data={data} title={data.judulBuku}
                                             subtitle={data.hargaBuku}
                                             id={data.id} handleClick={() => {
                                    addToCart(data)
                                }}/>

                            ))}
                        </Row>
                        <Jumbotron style={{backgroundImage: `url(${jumbotron2})`, backgroundSize: 'cover'}}>
                            <div>
                                <img src={logoLight}/>
                            </div>
                            <h2 style={{textAlign: "left", color: "whitesmoke"}}>BEST SELLER</h2>
                        </Jumbotron>
                        <Row>
                            {bestSeller.map((data, index) => (

                                <ProductCard key={index} data={data} title={data.judulBuku}
                                             subtitle={data.hargaBuku}
                                             id={data.id} handleClick={() => {
                                    addToCart(data)
                                }}/>

                            ))}
                        </Row>
                        <Jumbotron style={{backgroundImage: `url(${jumbotron2})`, backgroundSize: 'cover'}}>
                            <div>
                                <img src={logoLight}/>
                            </div>
                            <h2 style={{textAlign: "left", color: "whitesmoke"}}>RECOMMENDATION</h2>
                        </Jumbotron>
                        <Row>
                            {recommendation.map((data, index) => (

                                <ProductCard key={index} data={data} title={data.judulBuku}
                                             subtitle={data.hargaBuku}
                                             id={data.id} handleClick={() => {
                                    addToCart(data)
                                }}/>

                            ))}
                        </Row>

                        {/*<AppFooter/>*/}

                    </div>
                </div>
                {/*<MyFooter/>*/}
                <SweetAlert
                    title="Added to Cart!"
                    confirmButtonColor=""
                    show={showNotif}
                    text={detailNotif}
                    type="success"
                    onConfirm={() => {
                        setShowNotif(false)
                    }}/>
            </CSSTransitionGroup>
            {/*<BestSeller/>*/}
            {/*<MyFooter/>*/}
        </Fragment>);

};

export default Homepage;