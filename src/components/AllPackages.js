import React from "react";
import Accordion from "./Accordion";
import { NodeTree } from '../Template';

const AllPackages = () => {
  return (
    <Accordion>{NodeTree}</Accordion>
  );
}

export default AllPackages;