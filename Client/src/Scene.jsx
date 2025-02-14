import React, { useRef, useEffect, use } from "react";
import { useFrame } from "@react-three/fiber";
import {
  Environment,
  PerspectiveCamera,
  OrbitControls,
} from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Jinx } from "./Jinx";

gsap.registerPlugin(ScrollTrigger);

const Scene = ({ progress }) => {
  const cameraRef = useRef(null);

  useFrame(() => {
    // console.log(cameraRef.current.position);

    cameraRef.current.lookAt(-0.5, 1.5, 0);
  });

  useEffect(() => {
    const updateCamPos = () => {
      const positions = [
        [1, 2.5, 8],
        [3.6, 4.3, 2.6],
        [-1.9, 4.7, 4.25],
        [3.8, 5, -1.16],
      ];

      if (progress >= 1) {
        gsap.to(cameraRef.current.position, {
          x: 3.8,
          y: 5,
          z: -1.16,
          duration: 0.5,
          ease: "power1.out",
        });
      } else {
        const segmentProgress = 1 / 3;

        const segmentIndex = Math.floor(progress / segmentProgress);

        const percentage = (progress % segmentProgress) / segmentProgress;
        const [startX, startY, startZ] = positions[segmentIndex];
        const [endX, endY, endZ] = positions[segmentIndex + 1];

        const x = startX + (endX - startX) * percentage;
        const y = startY + (endY - startY) * percentage;
        const z = startZ + (endZ - startZ) * percentage;

        gsap.to(cameraRef.current.position, {
          x,
          y,
          z,
          duraion: 0.1,
          ease: "power1.out",
        });
      }
    };
    updateCamPos();
  }, [progress, cameraRef.current]);

  return (
    <>
      {/* <OrbitControls></OrbitControls> */}
      <PerspectiveCamera
        ref={cameraRef}
        fov={45}
        near={0.1}
        far={10000}
        makeDefault
        position={[1, 2.5, 8]}
        // position={[3.6, 4.3, 2.6]}
        // position={[-1.9, 4.7, 4.25]}
        // position={[3.8, 5, -1.16]}
      />
      <Environment preset="city" />
      <Jinx></Jinx>
      {/* <axesHelper args={[500]} /> */}
    </>
  );
};

export default Scene;
