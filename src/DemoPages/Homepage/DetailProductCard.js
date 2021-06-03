import React from "react";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";


const DetailProductCard = (props) => {
    return (
        <>
            <span className="d-inline-block mb-2 mr-2">
                 <Modal isOpen={props.modal} toggle={props.toggle} className={props.className}>
                        <ModalHeader toggle={props.toggle}>Book Detail</ModalHeader>
                        <ModalBody>
                            <h3>{props.title}</h3>
                            <h4>{props.subtitle}</h4>
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