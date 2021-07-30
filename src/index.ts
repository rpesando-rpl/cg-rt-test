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

let init = () => {};

let animate = () => {};

let rendere = () => {};

init();
animate();
