import "./App.css";
import * as THREE from "three";
import { useEffect } from "react";
import CubeCreator from "./ThreeJS/CubeCreator.jsx";

function App() {
  useEffect(() => {
    // const shapeSelector = new THREE.BoxGeometry(16, 16, 16);
    const shapeSelector = new THREE.TorusGeometry(15, 3, 16, 100);
    CubeCreator("myThreeJsCanvas", shapeSelector);
  }, []);

  return (
    <div className="App">
      <canvas id="myThreeJsCanvas" />
    </div>
  );
}

export default App;
