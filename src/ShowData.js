import React, { useState, useEffect, useContext } from "react";

import { DefaultContext } from "./App";

const ShowData = props => {
  const [showCount, setShowCount] = useState(0);
  const [count, setCount] = useState(0);
  const defaultContext = useContext(DefaultContext);

  console.info(props);

  return (
    <div style={{ marginLeft: "10px" }}>
      <h3>tampilan ini dari file "ShowData.js"</h3>
      <br />
      <h1>Total = {showCount}</h1>
      <br />
      <h3>ini dari context</h3>
      <br />
      <h4>
        {defaultContext}
      </h4>
      <br />
      <button onClick={() => setCount(count + 1)}>Tambah</button>
    </div>
  );
};

export default ShowData;
