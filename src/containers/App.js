import React from "react";
import { HashRouter as Router } from "react-router-dom";
import Navbar from "../components/Navbar";
import RouterSwitch from "../components/RouterSwitch";

import { DATA } from "../static/data/data";

export default function App() {
  if (!DATA) return <h1>Earthquake data could not be loaded</h1>;
  const siteData = DATA.site;
  const profileData = DATA.profile;
  return (
    <Router>
      <div className="body">
        <Navbar data={{ siteData, profileData }} />
        <RouterSwitch data={DATA} />
      </div>
    </Router>
  );
}
