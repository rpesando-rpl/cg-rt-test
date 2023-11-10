import {
  AmbientLight,
  Color,
  DirectionalLight,
  Mesh,
  PerspectiveCamera,
  RawShaderMaterial,
  Scene,
  WebGLRenderer
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Tweakpane from "tweakpane";
import Stats from "stats.js";

import vertSrc from "./shaders/simple.vert.glsl";
import fragSrc from "./shaders/simple.frag.glsl";

const container = document.getElementById("el");
let camera, scene, renderer, stats;

let init = () => {
  console.debug("Init Demo!");
};

let animate = () => {
  console.debug("This is animate callback!");
};

let render = () => {
  console.debug("This is a debug callback")
};

window.addEventListener("load", () => {
  init();
  animate();
})
