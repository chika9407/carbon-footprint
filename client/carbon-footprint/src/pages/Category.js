import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Category() {
  let { category } = useParams();
  return (
    <div>
      <h3>Here's the {category}</h3>
    </div>
  );
}
