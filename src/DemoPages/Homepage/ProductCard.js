import React, {Component, Fragment} from "react";
import {Button, Card, CardBody, CardFooter, CardImg, CardSubtitle, CardTitle, Col} from "reactstrap";
import bg1 from "../../assets/utils/images/dropdown-header/abstract1.jpg";
import ButtonsIcons from "../Elements/Button/Icons";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

const ProductCard = (props) => (
    <Fragment>
            <Col md="3">
                <Card className="main-card mb-3">
                    <CardImg top width="20%"
                             src={props.image}
                             alt="Card image cap"/>
                    <CardBody>
                        <CardTitle>{props.title}</CardTitle>
                        <CardSubtitle>{props.subtitle}</CardSubtitle>
                    </CardBody>
                    <CardFooter>
                        <div className='align-content'>
                            <Button className="btn btn-success">Button</Button>
                        </div>
                    </CardFooter>
                </Card>
            </Col>
    </Fragment>
);

export default ProductCard;