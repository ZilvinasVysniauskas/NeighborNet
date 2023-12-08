import {Route, Routes} from "react-router-dom"
import React from "react"
import HomeComponent from "./feed/components/HomeComponent"


export function App() {
  return (
    <Routes>
      <Route path="" element={<HomeComponent />}></Route>
    </Routes>
  );
}

export default App;
