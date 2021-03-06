import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

import {
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Popover,
    Nav, NavLink, Col, Row, NavItem, UncontrolledButtonDropdown, Button
} from 'reactstrap';

import PerfectScrollbar from 'react-perfect-scrollbar';

import bg2 from '../../../assets/utils/images/dropdown-header/abstract2.jpg';
import bg3 from '../../../assets/utils/images/dropdown-header/abstract3.jpg';

import {
    faAngleDown,

} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class MegaMenu extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
            popoverOpen: false,
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
            popoverOpen: !this.state.popoverOpen

        });
    }

    state = {};

    render() {
        return (
            <Fragment>
                <Nav className="header-megamenu">
                    {/*<NavItem>*/}
                    {/*    <NavLink href="/novel" onClick={this.toggle} id="PopoverMegaMenu">*/}
                    {/*        <i className="nav-link-icon pe-7s-gift"> </i>*/}
                    {/*        Mega Menu*/}
                    {/*        <FontAwesomeIcon className="ml-2 opacity-5" icon={faAngleDown}/>*/}
                    {/*    </NavLink>*/}
                    {/*</NavItem>*/}
                    {/*<Popover className="rm-max-width" placement="bottom-start" fade={false} trigger="legacy" isOpen={this.state.popoverOpen} target="PopoverMegaMenu"*/}
                    {/*         toggle={this.toggle}>*/}
                    {/*    <div className="dropdown-mega-menu">*/}
                    {/*        <div className="grid-menu grid-menu-3col">*/}
                    {/*            <Row className="no-gutters">*/}
                    {/*                <Col xl="4" sm="6">*/}
                    {/*                    <Nav vertical>*/}
                    {/*                        <NavItem className="nav-item-header">*/}
                    {/*                            Overview*/}
                    {/*                        </NavItem>*/}
                    {/*                        <NavItem>*/}
                    {/*                            <NavLink href="#">*/}
                    {/*                                <i className="nav-link-icon lnr-inbox"> </i>*/}
                    {/*                                <span>Contacts</span>*/}
                    {/*                            </NavLink>*/}
                    {/*                        </NavItem>*/}
                    {/*                        <NavItem>*/}
                    {/*                            <NavLink href="#">*/}
                    {/*                                <i className="nav-link-icon lnr-book"> </i>*/}
                    {/*                                <span>Incidents</span>*/}
                    {/*                                <div className="ml-auto badge badge-pill badge-danger">5</div>*/}
                    {/*                            </NavLink>*/}
                    {/*                        </NavItem>*/}
                    {/*                        <NavItem>*/}
                    {/*                            <NavLink href="#">*/}
                    {/*                                <i className="nav-link-icon lnr-picture"> </i>*/}
                    {/*                                <span>Companies</span>*/}
                    {/*                            </NavLink>*/}
                    {/*                        </NavItem>*/}
                    {/*                        <NavItem>*/}
                    {/*                            <NavLink disabled href="#">*/}
                    {/*                                <i className="nav-link-icon lnr-file-empty"> </i>*/}
                    {/*                                <span>Dashboards</span>*/}
                    {/*                            </NavLink>*/}
                    {/*                        </NavItem>*/}
                    {/*                    </Nav>*/}
                    {/*                </Col>*/}
                    {/*                <Col xl="4" sm="6">*/}
                    {/*                    <Nav vertical>*/}
                    {/*                        <NavItem className="nav-item-header">*/}
                    {/*                            Favourites*/}
                    {/*                        </NavItem>*/}
                    {/*                        <NavItem>*/}
                    {/*                            <NavLink href="#">Reports Conversions</NavLink>*/}
                    {/*                        </NavItem>*/}
                    {/*                        <NavItem>*/}
                    {/*                            <NavLink href="#">*/}
                    {/*                                Quick Start*/}
                    {/*                                <div className="ml-auto badge badge-success">New</div>*/}
                    {/*                            </NavLink>*/}
                    {/*                        </NavItem>*/}
                    {/*                        <NavItem>*/}
                    {/*                            <NavLink href="#">*/}
                    {/*                                Users &amp; Groups*/}
                    {/*                            </NavLink>*/}
                    {/*                        </NavItem>*/}
                    {/*                        <NavItem>*/}
                    {/*                            <NavLink href="#">*/}
                    {/*                                Proprieties*/}
                    {/*                            </NavLink>*/}
                    {/*                        </NavItem>*/}
                    {/*                    </Nav>*/}
                    {/*                </Col>*/}
                    {/*                <Col xl="4" sm="6">*/}
                    {/*                    <Nav vertical>*/}
                    {/*                        <NavItem className="nav-item-header">*/}
                    {/*                            Sales &amp; Marketing*/}
                    {/*                        </NavItem>*/}
                    {/*                        <NavItem>*/}
                    {/*                            <NavLink href="#">*/}
                    {/*                                Queues*/}
                    {/*                            </NavLink>*/}
                    {/*                        </NavItem>*/}
                    {/*                        <NavItem>*/}
                    {/*                            <NavLink href="#">Resource Groups</NavLink>*/}
                    {/*                        </NavItem>*/}
                    {/*                        <NavItem>*/}
                    {/*                            <NavLink href="#">*/}
                    {/*                                Goal Metrics*/}
                    {/*                                <div className="ml-auto badge badge-warning">3</div>*/}
                    {/*                            </NavLink>*/}
                    {/*                        </NavItem>*/}
                    {/*                        <NavItem>*/}
                    {/*                            <NavLink href="#">*/}
                    {/*                                Campaigns*/}
                    {/*                            </NavLink>*/}
                    {/*                        </NavItem>*/}
                    {/*                    </Nav>*/}
                    {/*                </Col>*/}
                    {/*            </Row>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</Popover>*/}
                    <UncontrolledButtonDropdown nav inNavbar>
                        <DropdownToggle nav>
                            Home
                        </DropdownToggle>
                    </UncontrolledButtonDropdown>
                    <UncontrolledButtonDropdown nav inNavbar>
                        <DropdownToggle nav>
                            {/*<div className="badge badge-pill badge-danger ml-0 mr-2">4</div>*/}
                            {/*<IoiosLi*/}
                            Categories
                            <FontAwesomeIcon className="ml-2 opacity-5" icon={faAngleDown}/>
                        </DropdownToggle>
                        <DropdownMenu className="rm-pointers">
                            <div className="dropdown-menu-header">
                                <div className="dropdown-menu-header-inner bg-secondary">
                                    <div className="menu-header-image opacity-5"
                                         style={{
                                             backgroundImage: 'url(' + bg2 + ')'
                                         }}
                                    ></div>
                                    <div className="menu-header-content">
                                        <h5 className="menu-header-title">Overview</h5>
                                        <h6 className="menu-header-subtitle">Dropdown menus for everyone</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="scroll-area-xs" style={{
                                height: '150px'
                            }}>
                                <PerfectScrollbar>
                                    <DropdownItem header>Key Figures</DropdownItem>
                                    <DropdownItem>Academic</DropdownItem>
                                    <DropdownItem>Family</DropdownItem>
                                    <DropdownItem>Comic</DropdownItem>
                                    <Link to="/novel">
                                        <DropdownItem>Novel</DropdownItem>
                                    </Link>
                                    {/*<DropdownItem>Novel</DropdownItem>*/}

                                </PerfectScrollbar>
                            </div>
                            <Nav vertical>
                                <NavItem className="nav-item-divider"/>
                                <NavItem className="nav-item-btn">
                                    <Button size="sm" className="btn-wide btn-shadow"
                                            color="danger">
                                        Cancel
                                    </Button>
                                </NavItem>
                            </Nav>
                        </DropdownMenu>
                    </UncontrolledButtonDropdown>
                    <UncontrolledButtonDropdown nav inNavbar>
                        <DropdownToggle nav >
                            About Us
                        </DropdownToggle>
                    </UncontrolledButtonDropdown>
                </Nav>
            </Fragment>
        )
    }
}

export default MegaMenu;
