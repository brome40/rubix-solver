import './App.css';
import Cube from './components/Cube';

//Original Three.js boilerplate:
// import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh } from 'three';

// const aspectRatio = window.innerWidth / window.innerHeight;
// const scene = new Scene();
// const camera = new PerspectiveCamera( 75, aspectRatio, 0.1, 1000 );
// const renderer = new WebGLRenderer();
// renderer.setSize( window.innerWidth / 2, window.innerHeight / 2 );

// document.body.appendChild( renderer.domElement );

// const geometry = new BoxGeometry(3,3,3);
// const material = new MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new Mesh( geometry, material);
// scene.add( cube );

// camera.position.z = 5;

// function animate() {
// 	requestAnimationFrame( animate );
//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;
// 	renderer.render( scene, camera );
// }
// animate();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rubik's Cube Project</h1>
        <p>Step 1: Basic 3D Shapes using React Three Fiber -DONE</p>
        <p>Step 2: Add Face Colors -DONE</p>
        <Cube />
      </header>
    </div>
  );
}

export default App;
