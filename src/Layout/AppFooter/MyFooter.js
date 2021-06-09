import React from "react";
import Footer from "../../DemoPages/Components/GuidedTours/Examples/Footer";
import {CardFooter} from "reactstrap"
import {MDBFooter, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import logo from "../../assets/utils/images/Webp.net-resizeimage.png"

const MyFooter = () => {
    return (
        <>
            {/*<MDBFooter color="black" className="font-small" style={{marginLeft:0, marginRight:0}}>*/}
            {/*    <MDBContainer className="text-center text-md-left">*/}
            {/*        <MDBRow>*/}
            {/*            <MDBCol md="4">*/}
            {/*                <img src={logo}/>*/}
            {/*            </MDBCol>*/}
            {/*            <hr className="w-100 clearfix d-md-none"/>*/}
            {/*            <MDBCol md="4">*/}
            {/*                <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>*/}
            {/*                <p>*/}
            {/*                    <a href="#!">MDBootstrap</a>*/}
            {/*                </p>*/}
            {/*                <p>*/}
            {/*                    <a href="#!">MDWordPress</a>*/}
            {/*                </p>*/}
            {/*                <p>*/}
            {/*                    <a href="#!">BrandFlow</a>*/}
            {/*                </p>*/}
            {/*                <p>*/}
            {/*                    <a href="#!">Bootstrap Angular</a>*/}
            {/*                </p>*/}
            {/*            </MDBCol>*/}
            {/*            <hr className="w-100 clearfix d-md-none"/>*/}
            {/*            <MDBCol md="3">*/}
            {/*                <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>*/}
            {/*                <p>*/}
            {/*                    <a href="#!">MDBootstrap</a>*/}
            {/*                </p>*/}
            {/*                <p>*/}
            {/*                    <a href="#!">MDWordPress</a>*/}
            {/*                </p>*/}
            {/*                <p>*/}
            {/*                    <a href="#!">BrandFlow</a>*/}
            {/*                </p>*/}
            {/*                <p>*/}
            {/*                    <a href="#!">Bootstrap Angular</a>*/}
            {/*                </p>*/}
            {/*            </MDBCol>*/}
            {/*            <hr className="w-100 clearfix d-md-none"/>*/}

            {/*        </MDBRow>*/}
            {/*        /!*<hr/>*!/*/}
            {/*        /!*<MDBRow className="d-flex align-items-center">*!/*/}
            {/*        /!*    <MDBCol md="8" lg="8">*!/*/}
            {/*        /!*        <p className="text-center text-md-left grey-text">*!/*/}
            {/*        /!*            &copy; {new Date().getFullYear()} Copyright:{" "}*!/*/}
            {/*        /!*            <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>*!/*/}
            {/*        /!*        </p>*!/*/}
            {/*        /!*    </MDBCol>*!/*/}
            {/*        /!*    <MDBCol md="4" lg="4" className="ml-lg-0">*!/*/}
            {/*        /!*        <div className="text-center text-md-right">*!/*/}
            {/*        /!*            <ul className="list-unstyled list-inline">*!/*/}
            {/*        /!*                <li className="list-inline-item">*!/*/}
            {/*        /!*                    <a className="btn-floating btn-sm rgba-white-slight mx-1">*!/*/}
            {/*        /!*                        <i className="fab fa-facebook-f"/>*!/*/}
            {/*        /!*                    </a>*!/*/}
            {/*        /!*                </li>*!/*/}
            {/*        /!*                <li className="list-inline-item">*!/*/}
            {/*        /!*                    <a className="btn-floating btn-sm rgba-white-slight mx-1">*!/*/}
            {/*        /!*                        <i className="fab fa-twitter"/>*!/*/}
            {/*        /!*                    </a>*!/*/}
            {/*        /!*                </li>*!/*/}
            {/*        /!*                <li className="list-inline-item">*!/*/}
            {/*        /!*                    <a className="btn-floating btn-sm rgba-white-slight mx-1">*!/*/}
            {/*        /!*                        <i className="fab fa-google-plus"/>*!/*/}
            {/*        /!*                    </a>*!/*/}
            {/*        /!*                </li>*!/*/}
            {/*        /!*                <li className="list-inline-item">*!/*/}
            {/*        /!*                    <a className="btn-floating btn-sm rgba-white-slight mx-1">*!/*/}
            {/*        /!*                        <i className="fab fa-linkedin-in"/>*!/*/}
            {/*        /!*                    </a>*!/*/}
            {/*        /!*                </li>*!/*/}
            {/*        /!*            </ul>*!/*/}
            {/*        /!*        </div>*!/*/}
            {/*        /!*    </MDBCol>*!/*/}
            {/*        /!*</MDBRow>*!/*/}
            {/*    </MDBContainer>*/}
            {/*</MDBFooter>*/}


            <MDBFooter color="blue" className="font-small pt-4 mt-4">
                <MDBContainer fluid className="text-center text-md-left">
                    <MDBRow>
                        <MDBCol md="6">
                            <h5 className="title">Footer Content</h5>
                            <p>
                                Here you can use rows and columns here to organize your footer
                                content.
                            </p>
                        </MDBCol>
                        <MDBCol md="6">
                            <h5 className="title">Links</h5>
                            <ul>
                                <li className="list-unstyled">
                                    <a href="#!">Link 1</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Link 2</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Link 3</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Link 4</a>
                                </li>
                            </ul>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
                    </MDBContainer>
                </div>
            </MDBFooter>
        </>
    )
}

export default MyFooter;