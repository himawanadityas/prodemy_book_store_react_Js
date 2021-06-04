import React, {Fragment, lazy} from 'react';

import cx from 'classnames';
import {Link, Route} from "react-router-dom";
import {Button} from 'reactstrap'

class SearchBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeSearch: false,
            searchKeyword: ""
        };
    }


    render() {
        return (
            <Fragment>
                <div className={cx("search-wrapper", {
                    'active': this.state.activeSearch
                })}>
                    <div className="input-holder">
                        <input type="text" className="search-input" placeholder="Search Books"/>
                        <button onClick={() => this.setState({activeSearch: !this.state.activeSearch})}
                                className="search-icon"><span/></button>
                            <button className="search-icon">
                                <span/>
                            </button>
                    </div>
                    <button onClick={() => this.setState({activeSearch: !this.state.activeSearch})} className="close"/>
                </div>
                
            </Fragment>
        )
    }
}

export default SearchBox;