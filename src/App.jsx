import { useEffect } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

function App() {
  useEffect(() => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.set(40, 20, 40)
    camera.lookAt(0, 0, 0)

    const canvas = document.getElementById('bg')
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    ambientLight.castShadow = true
    scene.add(ambientLight)

    const spotLight = new THREE.SpotLight(0xffffff, 1)
    spotLight.castShadow = true
    spotLight.position.set(0,64,32)
    scene.add(spotLight)

    const loader = new GLTFLoader()
    
    loader.load(
      "/models/MountainIsland.glb",

      (gltf) => {
        const model = gltf.scene

        model.scale.set(0.4,0.4,0.4)
        model.position.set(0,0,0)

        scene.add(model)    
      },

      undefined,

      (error) => {
        console.error("Error loading model:", error)
      }
    )

    const animate = () => {
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    }
    animate()

  }, [])

  return (
      <div>
        <canvas id="bg" className='position-fixed top-0 left-0'> 
        </canvas>
      </div>
  )
      
}

export default App
