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
                            <CustomInput type="checkbox" id={props.data.id} onChange={props.checked}
                                         label="&nbsp;"/>
                            {/*<Input type="checkbox" onChange={props.checked} id={props.id}/>*/}
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
                            <h6>
                                {subTotal}
                            </h6>
                        </div>
                        <div className="widget-content-right">
                            {/*<div className="badge badge-warning mr-2">69</div>*/}
                            <Input type="number" min={1} value={quantity == null ? props.data.kuantitasBuku : quantity} onChange={(e) => {
                                quantityChange(e.target.value)
                            }} onClick={(e) => {
                                quantityChange(e.target.value)
                            }} width={30}/>
                        </div>
                    </div>
                </div>
            </ListGroupItem>
        </>
    )
}
export default CartList;