import React from "react";
import { HashRouter as Router } from "react-router-dom";
import Navbar from "../components/Navbar";
import RouterSwitch from "../components/RouterSwitch";

import { DATA } from "../data/data";

export default function App() {
  return (
    <Router>
      <div className="body">
        <Navbar data={DATA} />
        <RouterSwitch data={DATA} />
      </div>
    </Router>
  );
}
