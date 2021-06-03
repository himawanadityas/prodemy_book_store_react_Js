import React, {useEffect, useState} from "react";
import axios from "axios";
import {
    Button,
    CustomInput, Form,
    FormGroup,
    Input,
    Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Table
} from "reactstrap";
import {IoIosCart, IoIosSettings} from "react-icons/io";


const EditProduct = (props) => {
    const [data, setData] = useState({})
    const [judul, setJudul] = useState('')
    const [price, setPrice] = useState('')
    const [stock, setStock] = useState(0)

    useEffect(() => {
        axios.get('http://localhost:1212/api/book/'+props.id).then(res=>{
            setData(res.data)
        }).catch()
    })

    const save = () => {
        const postData = {
            judulBuku: data.judulBuku,
            hargaBuku: data.hargaBuku,
            kuantitasBuku: data.kuantitasBuku
        }
        axios.post('http://localhost:1212/api/book', postData).then(res => {}).catch()
    }

    return (
        <>
            <span className="d-inline-block mb-2 mr-2">
                 <Modal isOpen={props.modal} toggle={props.toggle} className={props.className}>
                        <ModalHeader toggle={props.toggle}><IoIosSettings size={20}/>Edit Product</ModalHeader>
                        <ModalBody>
                            <Form>
                                <FormGroup>
                                    <Input type="text" name="judul" id="judul"
                                           placeholder="Judul Buku" value={data.judulBuku}/>
                                </FormGroup>

                                <FormGroup>
                                    <Input type="text" name="harga" id="harga"
                                           placeholder="Harga Buku" value={data.hargaBuku}/>
                                </FormGroup>
                                <FormGroup>
                                    <Input type="number" name="stok" id="stok"
                                           placeholder="Harga" value={data.stokBuku}/>
                                </FormGroup>

                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="link" onClick={props.toggle}>Cancel</Button>
                            <Button color="primary" onClick={()=>{save()}}>Save</Button>
                        </ModalFooter>
                    </Modal>
            </span>
        </>
    )
}

export default EditProduct;