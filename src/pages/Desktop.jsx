import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { useEffect,useState } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { ArrowDown,User,SearchAlert,Brush,ShieldCheck,FileCodeCorner,BookText,Phone } from "lucide-react"
import {Profile,AboutMe,Skills,Certifications,Projects,Publications,Contact} from "@/sections/desktop"

import "../styles/Desktop.css"

import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

function Desktop() {
  const [section, setSection] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  const peaks = [
      {
        position: new THREE.Vector3(8.50759712108036,2.894808043021919,5.2884110999476945),
        lookAt: new THREE.Vector3(0,0,0),
        buttons:[]
      },
      {
        position: new THREE.Vector3(3.301610505881807, 3.532044894502247, -0.5585040995770612),
        lookAt: new THREE.Vector3(1.6153247805806974, 2.669515574215985, -1.7507656806188745),
        buttons: [
          {
            position: new THREE.Vector3(0.9881191768347881,3.103148772120465,-1.8815077650838121),
            icon: User,
            label: "Profile",
            side: "left",
            content:Profile,
          }

        ]
      },
      {
        position: new THREE.Vector3(0.590907554921686, 2.8031335377446154, 0.5384951524863258),
        lookAt: new THREE.Vector3(0.1490212719777072, 2.614421311313003, 0.09557323600342259),
        buttons: [
          {
            position: new THREE.Vector3(-1.1695185831153259,2.3662284620799747,-1.4452316842638628),
            icon:SearchAlert,
            label: "About Me",
            side: "right",
            content: AboutMe,
          },
          {
            position: new THREE.Vector3(-1.7414442713365392,2.2341654139303606,-0.9423301740826041),
            icon: Brush,
            label: "Skills",
            side: "left",
            content: Skills
          }
        ]
      },
      {
        position: new THREE.Vector3(-0.13602002240173278, 2.3868487279437747, 1.1148768820596275),
        lookAt: new THREE.Vector3(-0.4141259330716362, 2.3194516424284886, 1.015996020548747),
        buttons: [
          {
            position: new THREE.Vector3(-1.9975363025024653,1.9087208631109156,0.5786891850501674),
            icon:ShieldCheck,
            label: "Certifications",
            side: "left",
            content: Certifications
          }
        ]
      },
      {
        position: new THREE.Vector3(2.654363756284571, 1.7279814717105422, 4.06076938440059),
        lookAt: new THREE.Vector3(1.8724900747665771, 1.508278159475541, 4.144259458666039),
        buttons: [
          {
            position: new THREE.Vector3(-0.021873740755842218,1.1621931519107591,4.509676831481607),
            icon:FileCodeCorner,
            label: "Projects",
            side: "right",
            content: Projects
          },
          {
            position: new THREE.Vector3(0.5352671589719381,1.114230146263203,4.958878532491862),
            icon: BookText,
            label: "Publications",
            side: "left",
            content: Publications
          }

        ]
      },
      {
        position: new THREE.Vector3(4.484548612234234, 0.9309531300749136, 4.88898559748996),
        lookAt: new THREE.Vector3(2.6572158695602526, 0.6965562624802447, 5.105644077460648),
        buttons: [
          {
            position: new THREE.Vector3(1.5011199803948818,0.9396154812872602,5.557922066764222),
            icon: Phone,
            label: "Contact",
            side: "left",
            content: Contact
          }
        ]
      },
      {
        position: new THREE.Vector3( 4.676122350750727,1.0244700306914427,4.908005859511758),
        lookAt: new THREE.Vector3(2.530681780533567,0.6633869166478503,4.862518169010128),
        content: (
          <div>
          </div>
        ),
        buttons: []
      },
    ]

  useEffect(() => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );

    const canvas = document.getElementById('bg')
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)

    window.addEventListener("resize", () => {

      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()

      renderer.setSize(window.innerWidth, window.innerHeight)

    })

    const hemi = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6)
    scene.add(hemi)

    const shadowLight = new THREE.DirectionalLight(0xffffff, 1)
    shadowLight.position.set(10, 20, 10)

    shadowLight.castShadow = true

    shadowLight.shadow.mapSize.width = 2048
    shadowLight.shadow.mapSize.height = 2048

    shadowLight.shadow.camera.left = -200
    shadowLight.shadow.camera.right = 200
    shadowLight.shadow.camera.top = 200
    shadowLight.shadow.camera.bottom = -200

    scene.add(shadowLight)

    const loader = new GLTFLoader()
    
    loader.load(
      "/models/low-poly-mountain.glb",

      (gltf) => {
        const model = gltf.scene

        model.scale.set(20,25,20)
        model.position.set(0,0,0)
        model.rotation.y = Math.PI / 1.4


        model.traverse((child) => {
          if (child.isMesh) {
            child.material = new THREE.MeshStandardMaterial({
              color: 0xffffff,
              roughness: 1,
              metalness: 0
            })
            child.castShadow = true
            child.receiveShadow = true
          }
        })

        scene.add(model)    
      },

      undefined,

      (error) => {
        console.error("Error loading model:", error)
      }
    )

    scene.background = new THREE.Color(0xdedede)

    // const controls = new OrbitControls(camera, renderer.domElement)
    // controls.enableDamping = true
    // controls.target.set(0, 0, 0)
    // controls.update()
    
    let scrollY = 0
    let smoothScroll = 0

    window.addEventListener ("scroll", () => {
      scrollY = window.scrollY
    })

    const currentLookAt = new THREE.Vector3()

    let lastSection = -1

    //raycaster

    // const raycaster = new THREE.Raycaster()
    // const mouse = new THREE.Vector2()

    // window.addEventListener("click", (event) => {

    //   mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    //   mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

    //   raycaster.setFromCamera(mouse, camera)

    //   const intersects = raycaster.intersectObjects(scene.children, true)

    //   if (intersects.length > 0) {
    //     console.log(intersects[0].point)
    //   }

    // })

    const animate = () => {

      window.requestAnimationFrame(animate);

      smoothScroll += (scrollY - smoothScroll) * 0.1

      const scrollMax = document.body.scrollHeight - window.innerHeight
      const scrollProgress = Math.min(1, Math.max(0, smoothScroll / scrollMax))

      const total = peaks.length - 1
      const index = scrollProgress * total

      const current = Math.floor(index)
      const next = Math.min(current + 1, peaks.length - 1)

      const progress = index - current

      camera.position.lerpVectors(
        peaks[current].position,
        peaks[next].position,
        progress
      )

      currentLookAt.lerpVectors(
        peaks[current].lookAt,
        peaks[next].lookAt,
        progress
      )

      camera.lookAt(currentLookAt)

      if (current !== lastSection) {
        lastSection = current
        setSection(current)

      }
      setScrolled(scrollProgress > 0.02)

      const activeButtons = peaks[current].buttons

      activeButtons.forEach((btn, i) => {

        const vector = btn.position.clone()
        vector.project(camera)

        const x = (vector.x * 0.5 + 0.5) * window.innerWidth
        const y = (-vector.y * 0.5 + 0.5) * window.innerHeight

        const el = document.getElementById(`btn-${i}`)
        if (!el) return

        el.style.transform =
          `translate(-50%, -50%) translate(${x}px, ${y}px)`
      })

      renderer.render(scene, camera);
      // controls.update()
      // console.log("Camera Position:", camera.position);
      // console.log("Camera LookAt:", controls.target);
    }
    animate()

  }, [])

  return (
      <div className='relative h-[600vh]'>
        <div className='fixed top-3 left-6 z-10'>
          <p className='text-foreground font-medium text-xl'>martin bondoc</p>
        </div>

        <canvas id="bg" className='fixed top-0 left-0 z-0'/> 

        <section className="fixed flex flex-row bottom-6 left-6 z-10">
          <div className={`transition-all duration-100 ${
              !scrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className='text-xl font-medium text-foreground tracking-tight'>bundok</p>
            <p className='text-xs text-foreground/50 italic'>Filipino word that translates to "mountain" in english</p>
            <p className='text-xs text-foreground/70 leading-relaxed'>L: a large natural elevation of the earth’s surface rising abruptly from the surrounding land.<br>
            </br>F: a person whose strength, resilience, or character stands firm and rises above others.
            </p>
          </div>
        </section>
        <ArrowDown className={`fixed bottom-10 left-1/2 w-6 h-6 text-foreground transition-all duration-100 ${
              !scrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        />
        {peaks[section].buttons.map((btn, i) => (
          <div key={i} id={`btn-${i}`} className="fixed top-0 left-0 z-20">
            <Popover>
              <PopoverTrigger asChild>
                <Button title={btn.label} className = "w-10 h-10 bg-transparent ring-1 ring-foreground rounded-full shadow hover:h-12 hover:w-12 hover:backdrop-blur-sm data-[state=open]:h-15 data-[state=open]:w-15  data-[state=open]:backdrop-blur-sm  transition-all duration-200">
                  <btn.icon className="h-5! w-5! text-foreground"/>
                </Button>
              </PopoverTrigger>
              <PopoverContent side={btn.side} sideOffset={20} className="group h-auto w-auto bg-transparent p-0 ring-0 shadow-none gap-0 overflow-visible">
                <div className='border border-foreground/50 rounded-none animate-[border-draw_1.0s_ease-out_forwards]'>
                  <div className='opacity-0 backdrop-blur-sm animate-[content-fade_0.50s_ease-out_0.75s_forwards]'>
                     <div className="opacity-0 animate-[content-fade_0.5s_ease-out_1.0s_forwards]">
                      <btn.content/>
                    </div>
                  </div>
                </div>
                <p className='text-xs text-foreground/75 font-light pt-0.5'>{btn.label}</p>
              </PopoverContent>
            </Popover>
          </div>
        ))}
      </div>
  )     
}
export default Desktop
