import React from 'react';
import Dependencies from './components/Dependencies';
import { Section } from "./components/Accordion";

const Template = (currentPackage, id) => {
    const isPkgPresent = typeof currentPackage === 'object';
    let pkgTemplate = isPkgPresent ? 
            <Section isDisabled={false} key={`${currentPackage.package}-${id}`} title={currentPackage.package}>
                <p>{currentPackage.description}</p>
                <h2>Dependencies</h2>
                <Dependencies currentPackage={currentPackage} id={id} isReverse={false}/>
                <h2>Reverse Dependencies</h2>
                <Dependencies currentPackage={currentPackage} id={id} isReverse/>
            </Section>
            : <Section isDisabled={true} key={`${currentPackage}-${id}`} title={`${currentPackage} (Not Installed)`} />
    return pkgTemplate;
};

export default Template;
