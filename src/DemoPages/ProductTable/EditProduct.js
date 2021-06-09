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
    const [title, setTitle] = useState(null)
    const [year, setYear] = useState(null)
    const [author, setAuthor] = useState(null)
    const [publisher, setPublisher] = useState(null)
    const [category, setCategory] = useState(null)
    const [stock, setStock] = useState(null)
    const [price, setPrice] = useState(null)
    const [file, setFile] = useState(null)

    const getAllData = () => {
        axios.get('http://localhost:1212/api/book').then(res => {props.setProductData(res.data)}).catch()
    }

    const onSubmit = () => {

        const formData = new FormData();
        const json = JSON.stringify({
            "id": props.data.id,
            "judulBuku": title == null ? props.data.judulBuku : title,
            "tahunTerbit": year == null ? props.data.tahunTerbit : year,
            "namaPengarang": author == null ? props.data.namaPengarang : author,
            "namaKategori": category == null ? props.data.namaKategori : category,
            "namaPenerbit": publisher == null ? props.data.namaPenerbit : publisher,
            "hargaBuku": price == null ? props.data.hargaBuku : price,
            "stokBuku": stock == null ? props.data.stokBuku : stock,
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
            .then(getAllData).catch()

        // props.onChangeToggle()
        props.toggle(false)

    }

    return (
        <>
            <span className="d-inline-block mb-2 mr-2">
                 <Modal isOpen={props.modal} toggle={props.toggle} className={props.className}>
                        <ModalHeader toggle={props.toggle}><IoIosSettings size={20}/>Edit Product</ModalHeader>
                        <ModalBody>
                            <Form>
                                <FormGroup>
                                    <Label>Judul : {props.data.judulBuku}</Label>
                                    <Input type="text" name="title" id="title"
                                           placeholder="Judul Buku" onChange={(e) => {
                                        setTitle(e.target.value)
                                    }}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Tahun Terbit : {props.data.tahunTerbit}</Label>
                                    <Input type="text" name="tahun" id="tahun"
                                           placeholder="Tahun Terbit" onChange={(e) => {
                                        setYear(e.target.value)
                                    }}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Pengarang : {props.data.namaPengarang}</Label>
                                    <Input type="text" name="namaPengarang" id="pengarang"
                                           placeholder="Pengarang" onChange={(e) => {
                                        setAuthor(e.target.value)
                                    }}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Kategori : {props.data.namaKategori}</Label>
                                    <Input type="text" name="namaKategori" id="kategori"
                                           placeholder="Kategori" onChange={(e) => {
                                        setCategory(e.target.value)
                                    }}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Penerbit : {props.data.namaPenerbit}</Label>
                                    <Input type="text" name="penerbit" id="penerbit"
                                           placeholder="Penerbit" onChange={(e) => {
                                        setPublisher(e.target.value)
                                    }}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Stok : {props.data.stokBuku}</Label>
                                    <Input type="number" name="stock" id="stock"
                                           placeholder="Stok" min={1} onChange={(e) => {
                                        setStock(e.target.value)
                                    }}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Harga : {props.data.hargaBuku}</Label>
                                    <Input type="text" name="price" id="price"
                                           placeholder="Harga" onChange={(e) => {
                                        setPrice(e.target.value)
                                    }}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Judul : {props.data.judulBuku}</Label>
                                    <Input type="file" name="file" id="file" onChange={(e) => {
                                        setFile(e.target.files[0])
                                    }}
                                    />
                                </FormGroup>
                            </Form>
                            <img src={"data:image/*;base64," + props.file} height={250} width={150}/>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="warning" onClick={props.toggle}>Cancel</Button>
                            <Button color="primary" onClick={() => {
                                onSubmit()
                            }}>Save</Button>
                        </ModalFooter>
                    </Modal>
            </span>
        </>
    )
}

export default EditProduct;