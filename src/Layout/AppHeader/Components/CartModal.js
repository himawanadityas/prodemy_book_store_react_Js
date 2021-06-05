import React, {useEffect, useState} from "react";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader, Table} from "reactstrap";
import {IoIosCart} from "react-icons/io";
import CartList from "./CartList";
import axios from "axios";

const Checked = (e) => {
    console.log(e.target.checked, e.target.value)
}
const CartModal = (props) => {
    const [cartList, setCartList] = useState([])

    useEffect(() => {
        axios.get('http://localhost:1212/api/cart').then(res => {
            setCartList(res.data)
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    },[])

    return (
        <>
            <span className="d-inline-block mb-2 mr-2">
                 <Modal isOpen={props.modal} toggle={props.toggle} className={props.className}>
                        <ModalHeader toggle={props.toggle}><IoIosCart size={20}/> My Cart</ModalHeader>
                        <ModalBody>
                            <Table>
                                <tbody>
                                {cartList.map((data, index) => (
                                    <CartList key={index} title="title" subtitle="subtitle" id={index} checked={(e) => {
                                        Checked(e)
                                    }}/>
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