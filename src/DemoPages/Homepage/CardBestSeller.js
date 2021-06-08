import React, {Fragment, useState} from "react";
import {Button, Card, CardBody, CardFooter, CardImg, CardSubtitle, CardTitle, Col} from "reactstrap";
import {IoIosCart} from "react-icons/io";
import DetailProductCard from "./DetailProductCard";



const CardBestBeller = (props) => {
    const [modal, setModal] = useState(false)

    return (
        <Fragment>
            <Col md="3">
                <Card className="main-card mb-3">
                    <CardImg top width="20%"
                             src={"data:image/*;base64,"+image}
                             alt="Card image cap" onClick={(e) => {
                        setModal(!modal)
                    }}/>
                    <CardBody>
                        <CardTitle>{props.title}</CardTitle>
                        <CardSubtitle>{props.subtitle}</CardSubtitle>
                    </CardBody>
                    <CardFooter>
                        <div className='align-content'>
                            <Button className="btn btn-success" disabled>
                                <IoIosCart size={20}/>
                            </Button>
                        </div>
                        <div className='align-content'>
                            <span>Kosong</span>
                        </div>
                    </CardFooter>
                </Card>
                <DetailProductCard modal={modal} toggle={toggle} data={props.data}/>
            </Col>
        </Fragment>
    )
}

export default CardBestBeller;