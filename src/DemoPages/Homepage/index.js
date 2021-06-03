import React, {Fragment, Component, useState, useEffect} from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import axios from "axios";

import AppHeader from '../../Layout/AppHeader/';
import AppSidebar from '../../Layout/AppSidebar/';
import AppFooter from '../../Layout/AppFooter/';

// Theme Options

import ThemeOptions from '../../Layout/ThemeOptions/';
import {Button, Card, CardBody, CardImg, CardSubtitle, CardTitle, Col, ListGroup, ListGroupItem, Row} from "reactstrap";
import bg1 from "../../assets/utils/images/dropdown-header/abstract1.jpg";
import avatar1 from "../../assets/utils/images/avatars/1.jpg";
import bg2 from "../../assets/utils/images/dropdown-header/abstract2.jpg";
import avatar2 from "../../assets/utils/images/avatars/2.jpg";
import LiquidFillGauge from "react-liquid-gauge";
import bg3 from "../../assets/utils/images/dropdown-header/abstract3.jpg";
import avatar3 from "../../assets/utils/images/avatars/3.jpg";
import cx from "classnames";
import Footer from "../Components/GuidedTours/Examples/Footer";
import ProductCard from "./ProductCard";
import PageTitle from "../../Layout/AppMain/PageTitle";
import AllBook from "./BookData";
const getId = (index) => {
    console.log('>> Get Index >>')
    console.log(index)
}
const Homepage = () => {
    const [listDataBook, setListDataBook] = useState([])


    useEffect(() => {
        axios.get('http://localhost:1212/api/book').then(res => {setListDataBook(res.data)}).catch()
    })

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
                        <PageTitle
                            heading="Home"
                            subheading="The Best Seller Books and All Book Products in this Store"
                            icon="pe-7s-diamond icon-gradient bg-premium-dark"
                            breadcrumbPaths={[]}
                        />
                        <Row>
                            {listDataBook.map((data, index) => (
                                <ProductCard key={index} title={data.judulBuku} subtitle={data.namaPengarang}
                                             image={data.image} handleClick={() => {getId(data.id)}}/>
                            ))}
                        </Row>

                        <AppFooter/>
                    </div>
                </div>
            </CSSTransitionGroup>
        </Fragment>);
};

export default Homepage;