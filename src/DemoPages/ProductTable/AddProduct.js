import React, {useState} from 'react';
import axios from "axios";
import {Button, Form, FormGroup, Input, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {IoIosSettings} from "react-icons/io";

const url = 'http://localhost:1212/';

const AddProduct = (props) => {
    const [title, setTitle] = useState("")


    const addData = {
        judulBuku: title,

    }

    const saveProduct = () => {
        const addData = {
            judulBuku: title
        }

        axios.post(url, addData).then(res => {console.log(res.data)})
    }

    return (
        <>
            <span className="d-inline-block mb-2 mr-2">
                 <Modal isOpen={props.modal} toggle={props.toggle} className={props.className}>
                        <ModalHeader toggle={props.toggle}><IoIosSettings size={20}/>Edit Product</ModalHeader>
                        <ModalBody>
                            <Form>
                                            <FormGroup>

                                                <Input type="text" name="title" id="title"
                                                       placeholder="Judul Buku"/>
                                            </FormGroup>
                                            <FormGroup>

                                                <Input type="text" name="email" id="email"
                                                       placeholder="Harga"/>
                                            </FormGroup>
                                        </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="link" onClick={props.toggle}>Cancel</Button>
                            <Button color="primary" onClick={props.toggle}>Save</Button>
                        </ModalFooter>
                    </Modal>
            </span>
        </>
    )

}

export default AddProduct;