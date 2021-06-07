import React, {useEffect, useState} from "react";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader, Col, Row} from "reactstrap";
import axios from "axios";

const DetailProductCard = (props) => {
    const [imageDetailProduct, setImageDetailProduct] = useState("")

    useEffect(() =>{
        axios.get('http://localhost:1212/api/book/getImage/'+props.data.id).then().catch()
    },[])

    return (
        <>
            <span className="d-inline-block mb-2 mr-2">
                 <Modal isOpen={props.modal} toggle={props.toggle} className={props.className}>
                        <ModalHeader toggle={props.toggle}>Book Detail</ModalHeader>
                        <ModalBody>
                            <Row>
                                <Col md="6">
                                <h4>{props.data.judulBuku}</h4>
                                <p>{props.data.namaPengarang}</p>
                                <p>{props.data.namaPenerbit}</p>
                                <p>{props.data.namaKategori}</p>
                            </Col>
                            <Col md="6">
                                <img src={"data:image/*;base64,"+props.image} height={100}/>
                            </Col>
                            </Row>

                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={props.toggle}>Exit</Button>
                        </ModalFooter>
                    </Modal>
            </span>
        </>
    )
}

export default DetailProductCard;