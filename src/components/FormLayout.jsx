import React from "react";
import { useState, useEffect } from "react";
import Form from "./Form";
import Results from "./Results";

function FormLayout() {
  const [data, setData] = useState([]);

  return (
    <>
    <Form setData={setData} />
    <Results data={data} />
    </>
  )
}

export default FormLayout;
