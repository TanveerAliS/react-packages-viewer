import React from 'react';
import data from "./status.real.json";
import Dependencies from './components/Dependencies';
import ReverseDependencies from './components/ReverseDependencies'
import { Section } from "./components/Accordion";

const allPackages = Object.entries(data).map(item => item[1]).sort((a, b) => a.package.localeCompare(b.package));

export const Template = (currentPackage, id) => {
    const isPkgPresent = typeof currentPackage === 'object';
    let reverseDependancyList = isPkgPresent && allPackages.filter(newItem => newItem.depends && newItem.depends.includes(currentPackage.package.trim()));

    let pkgTemplate = isPkgPresent ? 
            <Section isDisabled={false} key={`${currentPackage.package}-${id}`} title={currentPackage.package}>
                <p>{currentPackage.description}</p>
                <h2>Dependencies</h2>
                <Dependencies currentPackage={currentPackage} id={id} allPackages={allPackages} />
                <h2>Reverse Dependencies</h2>
                <ReverseDependencies reverseDependancyList={reverseDependancyList} id={id} />
            </Section>
            : <Section isDisabled={true} key={`${currentPackage}-${id}`} title={`${currentPackage} (Not Installed)`} />
    return pkgTemplate;
};

export const NodeTree = allPackages.map((currentPackage, id) => Template(currentPackage, id));
