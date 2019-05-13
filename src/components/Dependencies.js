import React, { Fragment } from 'react';
import Accordion from "./Accordion";
import { Template } from '../Template';

const Dependencies = ({ currentPackage, id, allPackages }) => {
    return (
        <Fragment>
            {currentPackage.depends && currentPackage.depends.length > 0 ?
                <Accordion>
                    {currentPackage.depends.split(",").map( packageName => {
                        let pkg = allPackages.find( item => item.package === packageName.trim().split(" ")[0]) || packageName;
                        return Template(pkg, id);                                          
                    })}
                </Accordion>
                : <span>Not Dependencies</span>
            }
        </Fragment>
    )
}

export default Dependencies;