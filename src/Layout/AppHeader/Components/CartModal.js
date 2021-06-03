import React, {useState} from "react";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader, Table} from "reactstrap";
import {IoIosCart} from "react-icons/io";
import CartList from "./CartList";

const Checked = (e) => {
    console.log(e.target.checked, e.target.id)
}

const CartModal = (props) => {
    // const [checkedValue, setCheckedValue] useState([])

    return (
        <>
            <span className="d-inline-block mb-2 mr-2">
                 <Modal isOpen={props.modal} toggle={props.toggle} className={props.className}>
                        <ModalHeader toggle={props.toggle}><IoIosCart size={20}/> My Cart</ModalHeader>
                        <ModalBody>
                            <Table>
                                <tbody>
                                {[1, 2, 3, 4, 5].map((data, index) => (
                                    <CartList key={index} title="title" subtitle="subtitle" id={index} checked={(e) => {Checked(e)}}/>
                                ))}
                                </tbody>
                            </Table>


                        </ModalBody>
                        <ModalFooter>
                            <Button color="link" onClick={props.toggle}>Cancel</Button>
                            <Button color="primary" onClick={props.toggle}>CheckOut!</Button>
                        </ModalFooter>
                    </Modal>
            </span>
        </>
    )
}

export default CartModal;