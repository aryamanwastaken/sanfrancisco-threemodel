import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Bloom, ChromaticAberration, DepthOfField, EffectComposer } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';

import "./style.css";
import { Sanfrancisco } from './Sanfrancisco';
import { Ground } from './Ground';
import Overlay from './Overlay';

function Portfolio(){
    
  return (
    <>
        <OrbitControls 
          maxPolarAngle={1.45} 
        />

        <PerspectiveCamera makeDefault fov={50} position={[0, 1.5 ,5]}/>

        <color args = {[0, 0, 0]} attach="background"/>

        <Sanfrancisco />

        <ambientLight intensity={0.05} />

        <spotLight 
          color={[0.9, 0.1, 0.4]}  // red-pink light 
          intensity={1.5}
          angle={0.6}
          penumbra={0.5}
          position={[8, 5, -5]}
          castShadow
          shadow-bias={-0.0001}
        />

        <spotLight
          color={[0.14, 0.5, 1]}  // color for the light blue 
          intensity={4}       // intensity of the light
          angle={0.6}     // angle of the light
          penumbra={0.5}   
          position={[-5, 5, 1]}  // position for the light blue
          castShadow
          shadow-bias={-0.0001}
        />

        <spotLight
          color={[1, 0.8, 0.6]}  // white light
          intensity={1.5}
          angle={0.6}
          penumbra={0.5}
          position={[-15, 5, -5]}
          castShadow
          shadow-bias={-0.0001}
        />

        <spotLight
          color={[1, 0.8, 0.6]}  // white light 2
          intensity={1.5}
          angle={0.6}
          penumbra={0.5}
          position={[15, 5, 10]}
          castShadow
          shadow-bias={-0.0001}
        />

        <Ground />

        <EffectComposer>
          <DepthOfField focusDistance={0.0035} focalLength={0.01} bokehScale={3} height={480} />
          <Bloom 
            blendFunction={BlendFunction.ADD}
            intensity={0.75}    // bloom intensity
            width={300}     // width of the bloom 
            height={300}     // height of the bloom
            kernelSize={5}     // blur kernel size
            luminanceThreshold={0.2}   // increase this to mask out darker elements in the scene
            luminanceSmoothing={0.025} // smoothness of the luminance threshold
          />
          <ChromaticAberration
            blendFunction={BlendFunction.NORMAL}  //blend mode
            offset={(0.0005, 0.00012)}  // color offset
          />
        </EffectComposer>
    </>
  );
}

export default function App() {

  const overlay = useRef()
  const caption = useRef()
  const scroll = useRef(0)

  return (
    <>  
      <Canvas shadows eventSource={document.getElementById("root")}>
        <Suspense fallback={null}>
          <Portfolio scroll={scroll} />
        </Suspense>
      </Canvas>
      <Overlay ref={overlay} caption={caption} scroll={scroll}/>
    </>
  );
}
