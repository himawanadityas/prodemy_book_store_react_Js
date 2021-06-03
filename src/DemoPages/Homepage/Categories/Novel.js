import React, {Fragment, useEffect, useState} from 'react';
import axios from "axios";
import AppHeader from '../../../Layout/AppHeader';
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import PageTitle from "../../../Layout/AppMain/PageTitle";
import {Row} from "reactstrap";
import AllBook from "../BookData";
import ProductCard from "../ProductCard";
import AppFooter from "../../../Layout/AppFooter";


const getId = (index) => {
    console.log('>> Get Index >>')
    console.log(index)
}
const Novel = () => {
    const [novel, setNovel] = useState([])

    useEffect(() => {
      axios.get('http://localhost:1212/api/book/page/Novel').then(res => {
          setNovel(res.data)
      })
    })

    return (
        <Fragment>
            <CSSTransitionGroup
                component="div"
                transitionName="TabsAnimation"
                transitionAppear={true}
                transitionAppearTimeout={0}
                transitionEnter={false}
                transitionLeave={false}>
                <AppHeader/>
                <div className="app-main">
                    <div className="app-main__inner">
                        <PageTitle
                            heading="Novel"
                            subheading="The Best Seller Books and All Book Products in this Store"
                            icon="pe-7s-diamond icon-gradient bg-premium-dark"
                            breadcrumbPaths={[]}
                        />
                        <Row>
                            {novel.map((data, index) => (
                                <ProductCard key={index} title={data.judulBuku} subtitle={data.hargaBuku}
                                             image={data.image} handleClick={() => {getId(data.id)}}/>
                            ))}
                        </Row>

                        <AppFooter/>
                    </div>
                </div>
            </CSSTransitionGroup>
        </Fragment>);
}

export default Novel;