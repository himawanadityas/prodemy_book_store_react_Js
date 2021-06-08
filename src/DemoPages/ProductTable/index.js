import React, {Fragment, useEffect, useState} from 'react';
import ReactTable from "react-table";
import axios from "axios";
import {
    Row, Col,
    Card, CardBody,
    UncontrolledButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle, Button
} from 'reactstrap';
import avatar2 from "../../assets/utils/images/avatars/2.jpg";

// import {GetData} from "./DataProductTable/dataData"

import SearchBox from "../../Layout/AppHeader/Components/SearchBox";
import PageTitle from "../../Layout/AppMain/PageTitle";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import Header from "../../Layout/AppHeader";
import EditProduct from "./EditProduct";
import AddProduct from "./AddProduct";

const ProductTable = () => {
    const [productData, setProductData] = useState([])
    const [modalEdit, setModalEdit] = useState(false)
    const [modalAdd, setModalAdd] = useState(false)
    const [del, setDel] = useState(null)
    const [dataa, setDataa] = useState({})
    const [file, setFile] = useState("")

    const getAllData = () => {
        axios.get("http://localhost:1212/api/book")
            .then(res => {
                setProductData(res.data)
            }).catch();
    }


    useEffect(() => {
        axios.get("http://localhost:1212/api/book")
            .then(res => {
                setProductData(res.data)
                console.log(res.data)
            }).catch();
    },[])


    const toggleAdd = () => {
        setModalAdd(!modalAdd)
    }

    const toggleEdit = (val) => {
        setModalEdit(!modalEdit)
        console.log('toggle edit oke', val)
        axios.get('http://localhost:1212/api/book/' + val).then(res => {
            setDataa(res.data)
        })
        axios.get("http://localhost:1212/api/book/getImage/" + val).then(res => {
            setFile(res.data)
        }).catch()
    }

    const deleteData = (id) => {
        console.log("delete", id)
        axios.delete('http://localhost:1212/api/book/' + id).then(getAllData).catch(err => console.log(err))
    }

    const onChangeToggleAdd = () => {
        setModalAdd(!modalAdd)
            // axios.get("http://localhost:1212/api/book")
            //     .then(res => {
            //         let product = [...productData]
            //         product.push(res.data)
            //         console.log(product)
            //     }).catch();

    }
    const onChangeToggleEdit = () => {
        setModalEdit(!modalEdit)
    }

    return (
        <Fragment>
            <PageTitle
                heading="Product Table"
                subheading="Table for update the product"
                icon="pe-7s-drawer icon-gradient bg-happy-itmeo"
                breadcrumbPaths={['Home', 'Product Table']}
            />
            <CSSTransitionGroup
                component="div"
                transitionName="TabsAnimation"
                transitionAppear={true}
                transitionAppearTimeout={1000}
                transitionEnter={false}
                transitionLeave={false}>
                <Header/>

                <Card className="main-card m-5">
                    <div className="mb-3">
                        <Button outline className="mb-2 mr-2 btn-pill" color="primary" onClick={(e) => {
                            toggleAdd()
                        }}>Add</Button>
                        <CardBody>
                            <ReactTable
                                data={productData}
                                filterable
                                columns={[{
                                    columns: [
                                        // {
                                        //     Header: '1',
                                        //     accessor: 'gambar',
                                        //     Cell: row => (
                                        //         <div>
                                        //             <div className="widget-content p-0">
                                        //                 <div className="widget-content-wrapper">
                                        //                     <div className="widget-content-left mr-3">
                                        //                         <div className="widget-content-left">
                                        //                             <img width={52}
                                        //                                  src={"data:image/*;base64"}
                                        //                             />
                                        //                         </div>
                                        //                     </div>
                                        //                 </div>
                                        //             </div>
                                        //         </div>
                                        //     )
                                        // },
                                        {
                                            Header: 'Book',
                                            accessor: 'judulBuku'
                                        },
                                        {
                                            Header: 'Stock',
                                            accessor: 'stokBuku'
                                        },
                                        {
                                            Header: 'Price',
                                            accessor: 'hargaBuku'
                                        },
                                    ]
                                },
                                    {
                                        columns: [

                                            {
                                                Header: 'Actions',
                                                accessor: 'actions',
                                                filterable: false,
                                                Cell: row => (
                                                    <div className="d-block w-100 text-center">
                                                        <Button outline className="mb-2 mr-2 btn-pill" color="primary"
                                                                onClick={(e) => {
                                                                    toggleEdit(row.original.id)
                                                                }}>Edit</Button>
                                                        <Button outline className="mb-2 mr-2 btn-pill" color="danger"
                                                                onClick={(e) => {
                                                                    deleteData(row.original.id)
                                                                }}>Delete</Button>
                                                    </div>
                                                )
                                            }
                                        ]
                                    }]}
                                defaultPageSize={5}
                                className="-striped -highlight"
                            />
                        </CardBody>
                    </div>
                </Card>
                <EditProduct toggle={() => {
                    toggleEdit()
                }} modal={modalEdit} data={dataa} file={file} onChangeToggle={onChangeToggleEdit}/>
                <AddProduct toggle={() => {
                    toggleAdd()
                }} modal={modalAdd} onChangeToggle={onChangeToggleAdd}/>
            </CSSTransitionGroup>
        </Fragment>
    )

}

export default ProductTable;