import React, { useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
// import gsap from "gsap";
// import { FirstPersonControls } from "@react-three/drei";

export function Sanfrancisco() {

    const gltf = useLoader(
      GLTFLoader,
      process.env.PUBLIC_URL + "/models/sanfran/scene.gltf"
    );
    
    useEffect(() => {
      gltf.scene.scale.set(0.0025, 0.0025, 0.0025);
      gltf.scene.position.set(0, -0.035, 0);
      gltf.scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.castShadow = true;
          object.receiveShadow = true;
          object.material.envMapIntensity = 20;
        }
      });
    }, [gltf]);


    // const controls = new FirstPersonControls( camera, useLoader.domElement );
    // const camera = useRef<CameraControls | null>(null);
    // controls.movementSpeed = 8;
    // controls.lookSpeed = 0.08;

    // camera.position.set(0, 0, 0);
    // camera.lookAt(0, 0, 0);

    // useEffect(() => {
    //   window.addEventListener("mouseup", function() {
    //     gsap.to(camera.position, {
    //       x : 1.8,
    //       y : 1.5,
    //       z : 5,
    //       duration : 3,
    //     });
    //   });
    // }, [gltf]);

    useFrame(( ) => {
        
    });

    return <primitive object={gltf.scene} />;
}