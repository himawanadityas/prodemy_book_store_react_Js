import React, {Fragment} from 'react';
import MegaMenuFooter from './Components/FooterMegaMenu';
import FooterDots from './Components/FooterDots';
import {Col} from 'reactstrap';
import {IoIosHome} from "react-icons/all";
import {IoIosCart} from "react-icons/io";
class AppFooter extends React.Component {
    render() {


        return (
            <Fragment>
                <div className="app-footer">
                    <div className="app-footer__inner">
                        <Col md="6">
                            Copyright © 2021 Prodemy Book Store
                        </Col>


                    {/*<div className="app-footer-left">*/}
                    {/*    /!*<FooterDots/>*!/*/}
                    {/*    /!*<MegaMenuFooter/>*!/*/}
                    {/*    <div>*/}
                    {/*        <p>Copyright Prodemy Book Store</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="app-footer-right">*/}
                    {/*    /!*<MegaMenuFooter/>*!/*/}
                    {/*    <FooterDots/>*/}
                    {/*</div>*/}
                </div>
            </div>
    </Fragment>
    )}
    }

    export default AppFooter;