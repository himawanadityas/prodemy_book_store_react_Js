import React, {useEffect, useState} from "react";
import {
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
            .then(res => {})
            .catch(err => {
            console.log('pesan error >>', err)
        })

        console.log("save cart > > ", cartList)
        console.log("checked id > > ", dataCart)
        setCheckedState([])
        props.toggle(false)
        getAllCartData()
    }

    const cartEdited = (value) => {
        setCartList(value)
    }

    // const Checked = (e, id) => {
    //     if (e.target.checked) {
    //         if ([...checkedState].indexOf(id) === -1) {
    //             let checked = [...checkedState, cartList[id]]
    //             setCheckedState(checked)
    //             console.log("check >> ", id)
    //         }
    //     } else {
    //         let unchecked = [...checkedState]
    //         let index = unchecked.indexOf(id)
    //         if (index !== -1) {
    //             unchecked.splice(index, 1)
    //             setCheckedState(unchecked)
    //             console.log("uncheck >> ", id)
    //         }
    //     }
    // }


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

        console.log("checked to delete >> ",checkedState)

        checkedState.map((id) => {
            axios.delete('http://localhost:1212/api/cart/'+id).then().catch()
        })

        props.toggle(false)
    }

    return (
        <>
            <span className="d-inline-block mb-2 mr-2">
                 <Modal isOpen={props.modal} toggle={props.toggle} className="modal-content">
                        <ModalHeader toggle={props.toggle} style={{backgroundColor:"#d2a58e"}}><IoIosCart size={18} /> My Cart</ModalHeader>
                        <ModalBody>
                            {/*<Table>*/}
                            {/*    <tbody>*/}
                            {/*    {cartList.map((data, index) => (*/}
                            {/*        <CartList key={index}*/}
                            {/*                  index={index}*/}
                            {/*                  data={data}*/}
                            {/*                  cartEdit={cartEdited}*/}
                            {/*                  dataArray={cartList}*/}
                            {/*                  checked={(e) => {*/}
                            {/*                      Checked(e, data.id)*/}
                            {/*                  }}/>*/}
                            {/*    ))}*/}
                            {/*    </tbody>*/}
                            {/*</Table>*/}

                                    <ListGroup className="todo-list-wrapper" flush>
                                        {cartList.map((data, index) => (
                                            <CartList key={index}
                                                      index={index}
                                                      data={data}
                                                      cartEdit={cartEdited}
                                                      dataArray={cartList}
                                                      checked={(e) => {Checked(e, data.id)}}/>
                                        ))}

                                        {/*<ListGroupItem>*/}
                                        {/*    <div className="todo-indicator bg-warning"/>*/}
                                        {/*    <div className="widget-content p-0">*/}
                                        {/*        <div className="widget-content-wrapper">*/}
                                        {/*            <div className="widget-content-left mr-2">*/}
                                        {/*                <CustomInput type="checkbox" id="exampleCustomCheckbox12"*/}
                                        {/*                             label="&nbsp;"/>*/}
                                        {/*            </div>*/}
                                        {/*            <div className="widget-content-left">*/}
                                        {/*                <div className="widget-heading">*/}
                                        {/*                    Wash the car*/}
                                        {/*                    <div className="badge badge-danger ml-2">Rejected</div>*/}
                                        {/*                </div>*/}
                                        {/*                <div className="widget-subheading">*/}
                                        {/*                    <i>Written by Bob</i>*/}
                                        {/*                </div>*/}
                                        {/*            </div>*/}
                                        {/*            <div className="widget-content-right widget-content-actions">*/}
                                        {/*                <Button className="border-0 btn-transition" outline*/}
                                        {/*                        color="success">*/}
                                        {/*                    <FontAwesomeIcon icon={faCheck}/>*/}
                                        {/*                </Button>*/}
                                        {/*                <Button className="border-0 btn-transition" outline*/}
                                        {/*                        color="danger">*/}
                                        {/*                    <FontAwesomeIcon icon={faTrashAlt}/>*/}
                                        {/*                </Button>*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*</ListGroupItem>*/}
                                        {/*<ListGroupItem>*/}
                                        {/*    <div className="todo-indicator bg-focus"/>*/}
                                        {/*    <div className="widget-content p-0">*/}
                                        {/*        <div className="widget-content-wrapper">*/}
                                        {/*            <div className="widget-content-left mr-2">*/}
                                        {/*                <CustomInput type="checkbox" id="exampleCustomCheckbox1"*/}
                                        {/*                             label="&nbsp;"/>*/}
                                        {/*            </div>*/}
                                        {/*            <div className="widget-content-left">*/}
                                        {/*                <div className="widget-heading">*/}
                                        {/*                    Task with hover dropdown menu*/}
                                        {/*                </div>*/}
                                        {/*                <div className="widget-subheading">*/}
                                        {/*                    <div>*/}
                                        {/*                        By Johnny*/}
                                        {/*                        <div*/}
                                        {/*                            className="badge badge-pill badge-info ml-2">NEW</div>*/}
                                        {/*                    </div>*/}
                                        {/*                </div>*/}
                                        {/*            </div>*/}
                                        {/*            /!*<div className="widget-content-right widget-content-actions">*!/*/}
                                        {/*            /!*    <Dropdown className="d-inline-block"*!/*/}
                                        {/*            /!*              onMouseOver={this.onMouseEnter}*!/*/}
                                        {/*            /!*              onMouseLeave={this.onMouseLeave}*!/*/}
                                        {/*            /!*              isOpen={this.state.dropdownOpen}*!/*/}
                                        {/*            /!*              toggle={this.toggle}>*!/*/}
                                        {/*            /!*        <DropdownToggle color="link"*!/*/}
                                        {/*            /!*                        className="border-0 btn-transition">*!/*/}
                                        {/*            /!*            <FontAwesomeIcon icon={faEllipsisH}/>*!/*/}
                                        {/*            /!*        </DropdownToggle>*!/*/}
                                        {/*            /!*        <DropdownMenu right>*!/*/}
                                        {/*            /!*            <DropdownItem header>Header</DropdownItem>*!/*/}
                                        {/*            /!*            <DropdownItem disabled>Action</DropdownItem>*!/*/}
                                        {/*            /!*            <DropdownItem>Another Action</DropdownItem>*!/*/}
                                        {/*            /!*            <DropdownItem divider/>*!/*/}
                                        {/*            /!*            <DropdownItem>Another Action</DropdownItem>*!/*/}
                                        {/*            /!*        </DropdownMenu>*!/*/}
                                        {/*            /!*    </Dropdown>*!/*/}
                                        {/*            /!*</div>*!/*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*</ListGroupItem>*/}
                                        {/*<ListGroupItem>*/}
                                        {/*    <div className="todo-indicator bg-primary"/>*/}
                                        {/*    <div className="widget-content p-0">*/}
                                        {/*        <div className="widget-content-wrapper">*/}
                                        {/*            <div className="widget-content-left mr-2">*/}
                                        {/*                <CustomInput type="checkbox" id="exampleCustomCheckbox4"*/}
                                        {/*                             label="&nbsp;"/>*/}
                                        {/*            </div>*/}
                                        {/*            <div className="widget-content-left flex2">*/}
                                        {/*                <div className="widget-heading">*/}
                                        {/*                    Badge on the right task*/}
                                        {/*                </div>*/}
                                        {/*                <div className="widget-subheading">*/}
                                        {/*                    This task has show on hover actions!*/}
                                        {/*                </div>*/}
                                        {/*            </div>*/}
                                        {/*            <div className="widget-content-right widget-content-actions">*/}
                                        {/*                <Button className="border-0 btn-transition" outline*/}
                                        {/*                        color="success">*/}
                                        {/*                    <FontAwesomeIcon icon={faCheck}/>*/}
                                        {/*                </Button>*/}
                                        {/*            </div>*/}
                                        {/*            <div className="widget-content-right ml-3">*/}
                                        {/*                <div className="badge badge-pill badge-success">Latest Task*/}
                                        {/*                </div>*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*</ListGroupItem>*/}
                                        {/*<ListGroupItem>*/}
                                        {/*    <div className="todo-indicator bg-info"/>*/}
                                        {/*    <div className="widget-content p-0">*/}
                                        {/*        <div className="widget-content-wrapper">*/}
                                        {/*            <div className="widget-content-left mr-2">*/}
                                        {/*                <CustomInput type="checkbox" id="exampleCustomCheckbox2"*/}
                                        {/*                             label="&nbsp;"/>*/}
                                        {/*            </div>*/}
                                        {/*            <div className="widget-content-left mr-3">*/}
                                        {/*                <div className="widget-content-left">*/}
                                        {/*                    <img width={42} className="rounded" src={avatar2} alt=""/>*/}
                                        {/*                </div>*/}
                                        {/*            </div>*/}
                                        {/*            <div className="widget-content-left">*/}
                                        {/*                <div className="widget-heading">*/}
                                        {/*                    Go grocery shopping*/}
                                        {/*                </div>*/}
                                        {/*                <div className="widget-subheading">*/}
                                        {/*                    A short description for this todo item*/}
                                        {/*                </div>*/}
                                        {/*            </div>*/}
                                        {/*            <div className="widget-content-right widget-content-actions">*/}
                                        {/*                <Button className="border-0 btn-transition" outline*/}
                                        {/*                        color="success">*/}
                                        {/*                    <FontAwesomeIcon icon={faCheck}/>*/}
                                        {/*                </Button>*/}
                                        {/*                <Button className="border-0 btn-transition" outline*/}
                                        {/*                        color="danger">*/}
                                        {/*                    <FontAwesomeIcon icon={faTrashAlt}/>*/}
                                        {/*                </Button>*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*</ListGroupItem>*/}
                                        {/*<ListGroupItem>*/}
                                        {/*    <div className="todo-indicator bg-success"/>*/}
                                        {/*    <div className="widget-content p-0">*/}
                                        {/*        <div className="widget-content-wrapper">*/}
                                        {/*            <div className="widget-content-left mr-2">*/}
                                        {/*                <CustomInput type="checkbox" id="exampleCustomCheckbox3"*/}
                                        {/*                             label="&nbsp;"/>*/}
                                        {/*            </div>*/}
                                        {/*            <div className="widget-content-left flex2">*/}
                                        {/*                <div className="widget-heading">*/}
                                        {/*                    Development Task*/}
                                        {/*                </div>*/}
                                        {/*                <div className="widget-subheading">*/}
                                        {/*                    Finish React ToDo List App*/}
                                        {/*                </div>*/}
                                        {/*            </div>*/}
                                        {/*            <div className="widget-content-right">*/}
                                        {/*                /!*<div className="badge badge-warning mr-2">69</div>*!/*/}
                                        {/*                <CustomInput type="number"/>*/}
                                        {/*            </div>*/}
                                        {/*            <div className="widget-content-right">*/}
                                        {/*                <Button className="border-0 btn-transition" outline*/}
                                        {/*                        color="success">*/}
                                        {/*                    <FontAwesomeIcon icon={faCheck}/>*/}
                                        {/*                </Button>*/}
                                        {/*                <Button className="border-0 btn-transition" outline*/}
                                        {/*                        color="danger">*/}
                                        {/*                    <FontAwesomeIcon icon={faTrashAlt}/>*/}
                                        {/*                </Button>*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*</ListGroupItem>*/}
                                    </ListGroup>

                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" onClick={() =>{deleteCart()}}>Delete</Button>
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