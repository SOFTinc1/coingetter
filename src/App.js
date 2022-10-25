import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";

import HomePage from "./pages/HomePage/Homepage.component";
import Swap from "./components/Swap/swap-component/swap.component";
import Getter from "./pages/getter/getter.component";


class App extends React.Component {
  render() {
    return (
      <div>
        <AnimatedCursor
          innerSize={12}
          outerSize={30}
          color="0,0,0"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={2}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
            ".nav-item",
            ".onClick",
            ".main",
            ".oover",
          ]}
        />

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/swap" element={<Swap />} />
          <Route exact path="/getter" element={<Getter />} />
        </Routes>
      </div>
    );
  }
}

export default App;
