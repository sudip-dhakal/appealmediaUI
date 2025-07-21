import React, { useState } from "react";

const UserContextProvider = ({ children }) => {
  const [data, setData] = useState(null);
  return (
    <>
      <User.Provider value={{ data, setData }}> {children} </User.Provider>
    </>
  );
};

export default UserContextProvider;
