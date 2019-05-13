import React, { Fragment } from 'react';
import Accordion from "./Accordion";
import { Template } from '../Template';

const ReverseDependencies = ({ reverseDependancyList, id }) => {
    return (
        <Fragment>
            {reverseDependancyList.length > 0 ?
                <Accordion>{reverseDependancyList.map((currentPackage, id) => Template(currentPackage, id))}</Accordion>
                : <span>Not Dependencies</span>
            }
        </Fragment>
    )
};

export default ReverseDependencies;