import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

import {
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Popover,
    Nav, NavLink, Col, Row, NavItem, UncontrolledButtonDropdown, Button
} from 'reactstrap';

import PerfectScrollbar from 'react-perfect-scrollbar';
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
                        <UncontrolledButtonDropdown nav inNavbar>
                            <DropdownToggle nav>
                                <Link to="/home" style={{textDecoration:"none", color:"black"}}>
                                Home
                                </Link>
                            </DropdownToggle>

                        </UncontrolledButtonDropdown>

                    <UncontrolledButtonDropdown nav inNavbar>
                        <DropdownToggle nav>
                            Categories
                            <FontAwesomeIcon className="ml-2 opacity-5" icon={faAngleDown}/>
                        </DropdownToggle>
                        <DropdownMenu className="rm-pointers">
                            <div className="scroll-area-xs" style={{
                                height: '150px'
                            }}>
                                <PerfectScrollbar>
                                    <Link to="/academic">
                                        <DropdownItem>Academic</DropdownItem>
                                    </Link>
                                    <Link to="/family">
                                        <DropdownItem>Family</DropdownItem>
                                    </Link>
                                    <Link to="/comic">
                                        <DropdownItem>Comic</DropdownItem>
                                    </Link>
                                    <Link to="/novel">
                                        <DropdownItem>Novel</DropdownItem>
                                    </Link>

                                </PerfectScrollbar>
                            </div>
                        </DropdownMenu>
                    </UncontrolledButtonDropdown>
                    <UncontrolledButtonDropdown nav inNavbar>
                        <DropdownToggle nav>
                            About Us
                        </DropdownToggle>
                    </UncontrolledButtonDropdown>
                </Nav>
            </Fragment>
        )
    }
}

export default MegaMenu;
