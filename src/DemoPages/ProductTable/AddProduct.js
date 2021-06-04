import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Form, FormGroup, Input, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {IoIosSettings} from "react-icons/io";

const AddProduct = (props) => {
    const [title, setTitle] = useState("")
    const [year, setYear] = useState("")
    const [author, setAuthor] = useState("")
    const [publisher, setPublisher] = useState("")
    const [category, setCategory] = useState("")
    const [stock, setStock] = useState(0)
    const [price, setPrice] = useState("")
    const [file, setFile] = useState()
    const [modalNonActive, setModalNonActive] = useState(true)

    const onSubmit = () => {

        const formData = new FormData();
        const json = JSON.stringify({
            "judulBuku": title,
            "tahunTerbit": year,
            "namaPengarang": author,
            "namaKategori": category,
            "namaPenerbit": publisher,
            "hargaBuku": price,
            "stokBuku": stock,
        });
        const blobDoc = new Blob([json], {
            type: 'application/json'
        });

        formData.append('file', file)
        formData.append('data', blobDoc)
        const config = {
            headers: {
                'content-type': 'multipart/mixed'
            }
        }
        axios.post("http://localhost:1212/api/book/save", formData, config)
            .then(res => console.log(res.data)).catch()

        props.onChangeToggle(false)

    }

    return (
        <>
            <span className="d-inline-block mb-2 mr-2">
                 <Modal isOpen={props.modal} toggle={props.toggle}>
                        <ModalHeader toggle={props.toggle}><IoIosSettings size={20}/>Edit Product</ModalHeader>
                        <ModalBody>
                            <Form>
                                <FormGroup>
                                    <Input type="text" name="title" id="title"
                                           placeholder="Judul Buku" onChange={(e) => {
                                        setTitle(e.target.value)
                                    }}/>
                                </FormGroup>
                                <FormGroup>
                                    <Input type="text" name="tahun" id="tahun"
                                           placeholder="Tahun Terbit" onChange={(e) => {
                                        setYear(e.target.value)
                                    }}/>
                                </FormGroup>
                                <FormGroup>
                                    <Input type="text" name="namaPengarang" id="pengarang"
                                           placeholder="Pengarang" onChange={(e) => {
                                        setAuthor(e.target.value)
                                    }}/>
                                </FormGroup>
                                <FormGroup>
                                    <Input type="text" name="namaKategori" id="kategori"
                                           placeholder="Kategori" onChange={(e) => {
                                        setCategory(e.target.value)
                                    }}/>
                                </FormGroup>
                                <FormGroup>
                                    <Input type="text" name="penerbit" id="penerbit"
                                           placeholder="Penerbit" onChange={(e) => {
                                        setPublisher(e.target.value)
                                    }}/>
                                </FormGroup>
                                <FormGroup>
                                    <Input type="number" name="stock" id="stock"
                                           placeholder="Stok" onChange={(e) => {
                                        setStock(e.target.value)
                                    }}/>
                                </FormGroup>
                                <FormGroup>
                                    <Input type="text" name="price" id="price"
                                           placeholder="Harga" onChange={(e) => {
                                        setPrice(e.target.value)
                                    }}/>
                                </FormGroup>
                                <FormGroup>
                                    <Input type="file" name="file" id="file" onChange={(e) => {
                                        setFile(e.target.files[0])
                                    }}
                                    />
                                </FormGroup>
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="link" onClick={()=> {props.onChangeToggle(false)}}>Cancel</Button>
                            <Button color="primary" onClick={() => {onSubmit()}}>Save</Button>
                        </ModalFooter>
                    </Modal>
            </span>
        </>
    )

}

export default AddProduct;