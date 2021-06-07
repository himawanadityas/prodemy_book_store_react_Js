import React, {useEffect, useState} from 'react';
import {Button, CustomInput, Input, ListGroupItem} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faTrashAlt} from "@fortawesome/free-solid-svg-icons";

const CartList = (props) => {
    const [quantity, setQuantity] = useState(null)
    const [subTotal, setSubTotal] = useState(null)

    const quantityChange = (value) => {
        setQuantity(Number(value))
        setSubTotal(props.data.hargaBuku * value)
        let newData = [...props.dataArray];
        newData[props.index].kuantitasBuku = quantity;
        newData[props.index].subTotalHargaBuku = quantity * props.data.hargaBuku
        props.cartEdit(newData)
    }

    useEffect(() => {
        setSubTotal(props.data.hargaBuku * props.data.kuantitasBuku)
        },[])

    return (
        <>
            {/*// <tr>*/}
            {/*//     <td>*/}
            {/*        <Input type="checkbox" onChange={props.checked} id={props.id}/>*/}
            {/*    </td>*/}
            {/*    <td>*/}
            {/*        <Input type="number" value={quantity == null ? props.data.kuantitasBuku : quantity} onChange={(e) => {*/}
            {/*            quantityChange(e.target.value)*/}
            {/*        }} onClick={(e) => {*/}
            {/*            quantityChange(e.target.value)*/}
            {/*        }}/>*/}
            {/*    </td>*/}
            {/*    <td>*/}
            {/*        {subTotal}*/}
            {/*    </td>*/}
            {/*</tr>*/}

            <ListGroupItem>
                <div className="todo-indicator bg-success"/>
                <div className="widget-content p-0">
                    <div className="widget-content-wrapper">
                        <div className="widget-content-left mr-2">
                            <CustomInput type="checkbox" onChange={props.checked} id={props.id}
                                         label="&nbsp;"/>
                        </div>
                        <div className="widget-content-left flex2">
                            <div className="widget-heading">
                                Development Task
                            </div>
                            <div className="widget-subheading">
                                Finish React ToDo List App
                            </div>
                        </div>
                        <div className="widget-content-right">
                            {/*<div className="badge badge-warning mr-2">69</div>*/}
                            <Input type="number" value={quantity == null ? props.data.kuantitasBuku : quantity} onChange={(e) => {
                                quantityChange(e.target.value)
                            }} onClick={(e) => {
                                quantityChange(e.target.value)
                            }}/>
                        </div>
                        <div className="widget-content-right">
                            <Button className="border-0 btn-transition" outline
                                    color="success">
                                <FontAwesomeIcon icon={faCheck}/>
                            </Button>
                            <Button className="border-0 btn-transition" outline
                                    color="danger">
                                <FontAwesomeIcon icon={faTrashAlt}/>
                            </Button>
                        </div>
                    </div>
                </div>
            </ListGroupItem>
        </>
    )
}
export default CartList;