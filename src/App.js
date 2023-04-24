import "./App.css";
import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Timeline from "./components/Timeline/Timeline";
import Widgets from "./components/Widgets/Widgets";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Timeline />
      <Widgets />
    </div>
  );
}

export default App;
