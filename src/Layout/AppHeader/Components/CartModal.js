import React, {useEffect, useState} from "react";
import {
    Alert,
    Button, Card, CardFooter,
    CardHeader, CustomInput, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input,
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
    const [totalPrice, setTotalPrice] = useState(0)


    const getAllCartData = () => {
        axios.get('http://localhost:1212/api/cart').then(res => {
            setCartList(res.data)
            setCheckedState([])
            total(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    const total = (val) => {
        let price = 0
        val.map((data) => {
            price = price + data.subTotalHargaBuku
            console.log("sub total")
        })
        console.log("cart edited >>")
        console.log(price)
        setTotalPrice(price);
    }

    useEffect(() => {
        getAllCartData()
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
        // getAllCartData()

    }

    const cartEdited = (value) => {
        setCartList(value)
        total(value)
    }

    const Checked = (e, id) => {
        if (e.target.checked) {
            if ([...checkedState].indexOf(id) === -1) {
                let checked = [...checkedState, id]
                setCheckedState(checked)
                console.log("check >> ", id)
                console.log("checked array", checkedState)
            }
        } else {
            let unchecked = [...checkedState]
            let index = unchecked.indexOf(id)
            if (index !== -1) {
                unchecked.splice(index, 1)
                setCheckedState(unchecked)
                console.log("uncheck >> ", id)
                console.log("uncheck array", checkedState)
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
        total(cartList)

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
                                        <ListGroupItem>
                <div className="todo-indicator bg-success"/>
                <div className="widget-content p-0">
                    <div className="widget-content-wrapper">
                        <div className="widget-content-left mr-2">
                        </div>
                        <div className="widget-content-left flex2">
                            <div className="widget-heading">
                                Total : Rp {totalPrice} ,-
                            </div>
                        </div>
                    </div>
                </div>
            </ListGroupItem>
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