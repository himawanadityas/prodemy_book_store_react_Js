import React, {Fragment, useEffect, useState} from 'react';
import axios from "axios";
import AppHeader from '../../../Layout/AppHeader';
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import PageTitle from "../../../Layout/AppMain/PageTitle";
import {Jumbotron, Row} from "reactstrap";
import ProductCard from "../ProductCard";
import AppFooter from "../../../Layout/AppFooter";
import SweetAlert from "sweetalert-react";
import jumbotron2 from "../../../assets/utils/images/amazing-old-book-high-resolution-wallpaper-download-free-.jpg";
import logoLight from "../../../assets/utils/images/Webp.net-resizeimage (2).png";


const Novel = () => {
    const [novel, setNovel] = useState([])
    const [showNotif, setShowNotif] = useState(false)
    const [detailNotif, setDetailNotif] = useState("")

    useEffect(() => {
        axios.get('http://localhost:1212/api/book/page/Novel').then(res => {
            setNovel(res.data)
        })
    },[])

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
                        <Jumbotron style={{backgroundImage: `url(${jumbotron2})`, backgroundSize: 'cover'}}>
                            <div>
                                <img src={logoLight}/>
                            </div>
                            <h2 style={{textAlign: "left", color: "whitesmoke"}}>Novel</h2>
                        </Jumbotron>
                        <Row>
                            {novel.map((data, index) => (
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
            </CSSTransitionGroup>
            <SweetAlert
                title="Added to Cart!"
                confirmButtonColor=""
                show={showNotif}
                text={detailNotif}
                type="success"
                onConfirm={() => {
                    setShowNotif(false)
                }}/>
        </Fragment>);
}

export default Novel;