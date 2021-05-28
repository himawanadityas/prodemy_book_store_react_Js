import React, {Fragment} from 'react';
import {Breadcrumb} from "reactstrap";
import MyBreadcrumbPart from "./MyBreadcrumbPart";

const MyBreadcrumb = (props) => {
    const paths = props.paths;

    return (<Fragment>
        <Breadcrumb>
            {paths.map((path, index) => (
                <MyBreadcrumbPart key={index} currentPath={path}/>
            ))}
        </Breadcrumb>
    </Fragment>);
};

export default MyBreadcrumb;