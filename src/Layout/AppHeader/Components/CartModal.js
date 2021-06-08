import React, {useEffect, useState} from "react";
import {
    Alert,
    Button, Card, CardFooter,
    CardHeader, CustomInput, Dropdown, DropdownItem, DropdownMenu, DropdownToggle,
    ListGroup,
    ListGroupItem,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Table
} from "reactstrap";
import {IoIosCart} from "react-icons/io";
import CartList from "./CartList";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faEllipsisH, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import avatar2 from "../../../assets/utils/images/avatars/2.jpg";

const CartModal = (props) => {
    const [cartList, setCartList] = useState([])
    const [cartListEdited, setCartListEdited] = useState([])
    const [checkedState, setCheckedState] = useState([])


    const getAllCartData = () => {
        axios.get('http://localhost:1212/api/cart').then(res => {
            setCartList(res.data)
        }).catch(err => {
            console.log(err)
        })
    }
    useEffect(() => {
        getAllCartData()
    }, [])

    useEffect(() => {
        setCheckedState([])
    }, [])

    const saveCart = () => {
        const dataCart = {"addToCart": []}
        cartList.map((data, index) => {
            dataCart.addToCart.push(
                {
                    "id": data.id,
                    "idBuku": data.idBuku,
                    "idCustomer": data.idCustomer,
                    "kuantitasBuku": data.kuantitasBuku
                })
        })

        axios.post('http://localhost:1212/api/cart', dataCart)
            .then(
                getAllCartData
            )
            .catch(err => {
                console.log('pesan error >>', err)
            })

        console.log("save cart > > ", cartList)
        console.log("checked id > > ", dataCart)
        setCheckedState([])
        props.toggle(false)
        getAllCartData()
        alert()

    }

    const cartEdited = (value) => {
        setCartList(value)
    }

    const Checked = (e, id) => {
        if (e.target.checked) {
            if ([...checkedState].indexOf(id) === -1) {
                let checked = [...checkedState, id]
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

        console.log("checked to delete >> ", checkedState)
        checkedState.map((id) => {
            axios.delete('http://localhost:1212/api/cart/' + id).then(
                getAllCartData
            ).catch()
        })

        props.toggle(false)
    }



    return (
        <>
            <span className="d-inline-block mb-2 mr-2">
                 <Modal isOpen={props.modal} toggle={props.toggle} className="modal-content">
                        <ModalHeader toggle={props.toggle}><IoIosCart size={18}/> My Cart</ModalHeader>
                        <ModalBody>
                                    <ListGroup className="todo-list-wrapper" flush>
                                        {cartList.map((data, index) => (
                                            <CartList key={index}
                                                      index={index}
                                                      data={data}
                                                      cartEdit={cartEdited}
                                                      dataArray={cartList}
                                                      checked={(e) => {
                                                          Checked(e, data.id)
                                                      }}/>
                                        ))}
                                    </ListGroup>

                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" onClick={() => {
                                deleteCart()
                            }}>Delete</Button>
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