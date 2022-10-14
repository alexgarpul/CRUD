import React, { useState } from 'react';
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDb = [
  {
    id: 1,
    name: "seiya",
    constellation: "pegaso",
  },
  {
    id: 2,
    name: "shiryu",
    constellation: "dragón",
  },
  {
    id: 3,
    name: "hyoga",
    constellation: "cisne",
  },
  {
    id: 4,
    name: "shun",
    constellation: "andromeda",
  },
  {
    id: 5,
    name: "ikki",
    constellation: "fenix",
  },
];

const CrudApp = () => {
   const {db, setDb} =useState(initialDb);
  return <div>
    <h2>CRUD App</h2>
    <CrudForm/>
    <CrudTable data={db} />
  </div>;
};

export default CrudApp;
