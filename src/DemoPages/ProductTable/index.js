import React, {Fragment, useState} from 'react';
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

class ProductTable extends React.Component {
    constructor() {
        super();
        this.state = {
            productData: []
        };
    }

    componentDidMount() {
        axios.get("http://localhost:1212/api/book")
            .then(res => {this.setState({productData:res.data})}).catch();
    }
    // componentDidMount(){
    //     axios.get("http://localhost:1212/api/book")
    //         .then(res => {this.setState({productData:res.data})}).catch();
    // }

    render() {
        const {productData} = this.state;
        console.log(productData)
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
                            <CardBody>
                                <ReactTable
                                    data={productData}
                                    filterable
                                    columns={[{
                                        columns: [
                                            // {
                                            //     filterable: true,
                                            //     Header: 'Book',
                                            //     accessor: 'gambar',
                                            //     // Cell: row => (
                                            //     //     <div>
                                            //     //         <div className="widget-content p-0">
                                            //     //             <div className="widget-content-wrapper">
                                            //     //                 <div className="widget-content-left mr-3">
                                            //     //                     <div className="widget-content-left">
                                            //     //                         <img width={52}
                                            //     //                              src='gambar'
                                            //     //                         />
                                            //     //                     </div>
                                            //     //                 </div>
                                            //     //             </div>
                                            //     //         </div>
                                            //     //     </div>
                                            //     // )
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
                                                            <Button outline className="mb-2 mr-2 btn-pill" color="primary">Edit</Button>
                                                            <Button outline className="mb-2 mr-2 btn-pill" color="danger">Delete</Button>
                                                        </div>
                                                    )
                                                }
                                            ]
                                        }]}
                                    defaultPageSize={10}
                                    className="-striped -highlight"
                                />
                            </CardBody>
                        </div>
                    </Card>
                </CSSTransitionGroup>
            </Fragment>
        )
    }
}

export default ProductTable;