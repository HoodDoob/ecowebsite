import React from "react";
import { useState, useEffect } from "react";
import Form from "./Form";

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
