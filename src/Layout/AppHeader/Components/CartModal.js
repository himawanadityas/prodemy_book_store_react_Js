import React, {useEffect, useState} from "react";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader, Table} from "reactstrap";
import {IoIosCart} from "react-icons/io";
import CartList from "./CartList";
import axios from "axios";

const CartModal = (props) => {
    const [cartList, setCartList] = useState([])
    const [cartListEdited, setCartListEdited] = useState([])
    const [checkedState, setCheckedState] = useState([])

    useEffect(() => {
        axios.get('http://localhost:1212/api/cart').then(res => {
            setCartList(res.data)
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    useEffect(() => {
        setCheckedState([])
    }, [])

    const saveCart = () => {
        const dataCart = []
        checkedState.map((data, index) => {
            dataCart.push(
                {
                    "id": data.id,
                    "idBuku": data.idBuku,
                    "idCustomer": data.idCustomer,
                    "kuantitasBuku": data.kuantitasBuku
                })
        })

        axios.post('http://localhost:1212/api/cart', dataCart)
            .then(res => {})
            .catch(err => {
            console.log('pesan error >>', err)
        })
        
        console.log("save cart > > ", cartList)
        console.log("checked id > > ", dataCart)
        setCheckedState([])
    }

    const cartEdited = (value) => {
        setCartList(value)
    }

    const Checked = (e, id) => {
        if (e.target.checked) {
            if ([...checkedState].indexOf(id) === -1) {
                let checked = [...checkedState, cartList[id]]
                setCheckedState(checked)
                console.log("check >> ", id)
            }
        } else {
            let unchecked = [...checkedState]
            let index = unchecked.indexOf(id)
            if (index !== -1) {
                unchecked.splice(index, 1)
                setCheckedState(unchecked)
                console.log("uncheck >> ", id)
            }
        }
    }

    const deleteCart = () => {

    }

    return (
        <>
            <span className="d-inline-block mb-2 mr-2">
                 <Modal isOpen={props.modal} toggle={props.toggle} className={props.className}>
                        <ModalHeader toggle={props.toggle}><IoIosCart size={18}/> My Cart</ModalHeader>
                        <ModalBody>
                            <Table>
                                <tbody>
                                {cartList.map((data, index) => (
                                    <CartList key={index}
                                              index={index}
                                              data={data}
                                              cartEdit={cartEdited}
                                              dataArray={cartList}
                                              checked={(e) => {
                                                  Checked(e, index)
                                              }}/>
                                ))}
                                </tbody>
                            </Table>


                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onClick={() => {
                                saveCart()
                            }}>Save</Button>
                            <Button color="link" onClick={props.toggle}>Cancel</Button>
                            <Button color="primary" onClick={props.toggle}>CheckOut!</Button>
                        </ModalFooter>
                    </Modal>
            </span>
        </>
    )
}

export default CartModal;