import React, { useState, useEffect } from "react";
import ShowData from "./ShowData";
import ShowDataClone from "./ShowDataClone";

export const DefaultContext = React.createContext('default');

function App() {


  // useEffect(() => {
  //   setShowCount(count);
  // }, [count]);


  return (
    <DefaultContext.Provider value="coba state">
      <ShowData name="haidi" />
      <ShowDataClone />
    </DefaultContext.Provider>
  );
}

export default App;
