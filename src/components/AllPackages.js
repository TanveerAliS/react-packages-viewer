import React from "react";
import Accordion from "./Accordion";
import { allPackages } from '../Utils';
import Template from '../Template';

const AllPackages = () => {
  return (
    <Accordion>
      {allPackages.map((currentPackage, id) => Template(currentPackage, id))}
    </Accordion>
  );
}

export default AllPackages;