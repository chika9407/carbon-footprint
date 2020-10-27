import React, { useState } from "react";

export default function Results() {
    const [results, setResults] = useState([]);


    const fetchAPIresults = () => {
        const APIkey = "";
        const APIcall = "";
        const response = await fetch("");
        const json = await response.json();

    }
  return <div></div>;
}
