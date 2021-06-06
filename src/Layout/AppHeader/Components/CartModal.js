import React, {useEffect, useState} from "react";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader, Table} from "reactstrap";
import {IoIosCart} from "react-icons/io";
import CartList from "./CartList";
import axios from "axios";

const Checked = (e, id) => {
    if(e.target.checked){
        console.log(id, "Checked")
    }
}
const CartModal = (props) => {
    const [cartList, setCartList] = useState([])
    const [cartListEdited, setCartListEdited] = useState([])

    useEffect(() => {
        axios.get('http://localhost:1212/api/cart').then(res => {
            setCartList(res.data)
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    },[])

    useEffect(() => {
        console.log("cart list updated")
        console.log(cartList)
    }, [cartList])

    const saveCart = () => {
        console.log(console.log(cartListEdited))
    }
    const cartEdited = (value)=> {
        setCartListEdited(value)
        console.log(">>>>>")
        console.log("Cart Edited >>",cartListEdited)
    }

    return (
        <>
            <span className="d-inline-block mb-2 mr-2">
                 <Modal isOpen={props.modal} toggle={props.toggle} className={props.className}>
                        <ModalHeader toggle={props.toggle}><IoIosCart size={20}/> My Cart</ModalHeader>
                        <ModalBody>
                            <Table>
                                <tbody>
                                {cartList.map((data, index) => (
                                    <CartList key={index}
                                              index={index}
                                              data={data}
                                              cartEdit={cartEdited}
                                              dataArray={cartList}
                                              checked={(e, id) => {
                                        Checked(e, index)
                                    }}/>
                                ))}
                                </tbody>
                            </Table>


                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onClick={() => {saveCart()}}>Save</Button>
                            <Button color="link" onClick={props.toggle}>Cancel</Button>
                            <Button color="primary" onClick={props.toggle}>CheckOut!</Button>
                        </ModalFooter>
                    </Modal>
            </span>
        </>
    )
}

export default CartModal;