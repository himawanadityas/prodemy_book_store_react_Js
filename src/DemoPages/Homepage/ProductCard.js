import React, {Component, Fragment, useState} from "react";
import {Button, Card, CardBody, CardFooter, CardImg, CardSubtitle, CardTitle, Col} from "reactstrap";
import bg1 from "../../assets/utils/images/dropdown-header/abstract1.jpg";
import ButtonsIcons from "../Elements/Button/Icons";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import DetailProductCard from "./DetailProductCard";
import {IoIosCart} from "react-icons/io";

const ProductCard = (props) => {
    const [modal, setModal] = useState(false)

    const toggle = () => {
        setModal(!modal)
    }
    return (
        <Fragment>
            <Col md="3">
                <Card className="main-card mb-3">
                    <CardImg top width="20%"
                             src={props.image}
                             alt="Card image cap" onClick={(e) => {setModal(!modal)}}/>
                    <CardBody>
                        <CardTitle>{props.title}</CardTitle>
                        <CardSubtitle>{props.subtitle}</CardSubtitle>
                    </CardBody>
                    <CardFooter>
                        <div className='align-content'>
                            <Button className="btn btn-success" onClick={props.handleClick}>
                                <IoIosCart size={20}/>
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
                <DetailProductCard modal={modal} toggle={toggle} title={props.title} subtitle={props.subtitle}/>
            </Col>
        </Fragment>
    )
}
export default ProductCard;