import React, {Fragment, lazy} from 'react';

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
                {/*<div className={cx("search-wrapper", {*/}
                {/*   'active': this.state.activeSearch*/}
                {/*})}>*/}
                <div className="search-wrapper active">
                    <div className="input-holder">
                        <input type="text" className="search-input" placeholder="Search Books"/>
                        <button onClick={() => this.setState({activeSearch: !this.state.activeSearch})}
                                className="search-icon"><span/></button>
                    </div>
                </div>
                
            </Fragment>
        )
    }
}

export default SearchBox;