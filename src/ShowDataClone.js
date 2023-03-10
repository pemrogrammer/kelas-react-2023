import React, { useState, useEffect, useContext } from "react";

import { DefaultContext } from "./App";

const ShowDataClone = () => {
  const defaultContext = useContext(DefaultContext);

  return (
    <div>
      <h1>show data clone</h1>
    </div>
  );
};

export default ShowDataClone;
