import React from 'react';
import {Input} from "reactstrap";

const CartList = (props) => {
    return (
        <>
            <tr>
                <td>
                    <Input type="checkbox" onChange={props.checked} id={props.id}/>
                </td>
                <td>
                    {props.title}
                </td>
                <td>
                    {props.subtitle}
                </td>
            </tr>
        </>
    )
}
export default CartList;