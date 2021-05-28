import React, {Fragment} from 'react';
import {BreadcrumbItem} from "reactstrap";

const MyBreadcrumbPart = (path) => (
    <Fragment>
            <BreadcrumbItem>
                {path.currentPath}
            </BreadcrumbItem>
    </Fragment>
)

export default MyBreadcrumbPart;