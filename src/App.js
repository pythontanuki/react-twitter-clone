import "./App.css";
import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Timeline from "./components/Timeline/Timeline";

function App() {
  return (
    <div className="app">
      <Sidebar />
      {/* <Post /> */}
      <Timeline />
      {/* <Widgets /> */}
    </div>
  );
}

export default App;
