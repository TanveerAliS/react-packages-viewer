import React, { Fragment } from 'react';
import Accordion from "./Accordion";
import Template from '../Template';
import { pkgDependencies, reversePkgDependencies } from '../Utils';

const Dependencies = ({ currentPackage, id, isReverse }) => {

    let pkgCount = isReverse ? reversePkgDependencies(currentPackage).length : currentPackage.depends && currentPackage.depends.length;
    let pkgs = isReverse ? reversePkgDependencies(currentPackage) : pkgDependencies(currentPackage.depends)
    return (
        <Fragment>
            {pkgCount > 0 ?
                <Accordion>
                    {pkgs.map(pkg => {
                        return Template(pkg, id)
                    })}
                </Accordion>
                : <span>Not Dependencies</span>
            }
        </Fragment>
    )
}

export default Dependencies;