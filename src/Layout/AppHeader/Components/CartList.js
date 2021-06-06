import React, {useEffect, useState} from 'react';
import {Input} from "reactstrap";

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
            <tr>
                <td>
                    <Input type="checkbox" onChange={props.checked} id={props.id}/>
                </td>
                <td>
                    <Input type="number" value={quantity == null ? props.data.kuantitasBuku : quantity} onChange={(e) => {
                        quantityChange(e.target.value)
                    }} onClick={(e) => {
                        quantityChange(e.target.value)
                    }}/>
                </td>
                <td>
                    {subTotal}
                </td>
            </tr>
        </>
    )
}
export default CartList;