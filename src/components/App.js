import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const search = async () => {
    const data = await axios.get(
      "https://opentdb.com/api.php?amount=1&type=multiple"
    );
    
  };
  console.log(search)
  return <div>APP</div>;
};

export default App;
