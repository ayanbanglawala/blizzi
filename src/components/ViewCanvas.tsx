"use client";

import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const Loader = dynamic(
  () => import("@react-three/drei").then((mod) => mod.Loader),
  { ssr: false },
);

type Props = {};

export default function ViewCanvas({}: Props) {
  return (
    <>
      <Canvas
        style={{
          position: "fixed",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 30,
        }}
        shadows
        dpr={[1, 1.5]}
        gl={{ antialias: true }}
        camera={{
          fov: 30,
        }}
      >
        <Suspense fallback={null}>
          <View.Port />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}

// "use client"
// import { Canvas } from '@react-three/fiber'
// import React from 'react'

// interface Props {

// }

// export const ViewCanvas = (props: Props) => {
//     return (
//         <Canvas style={{position:"fixed",top:0, left:'50%', overflow:'hidden', pointerEvents:'none', zIndex:30, transform:'translateX(-50%)'}} camera={{fov: 30}} shadows dpr={[1,1.5]} gl={{antialias:true}}>
//             <mesh rotation={[0.5, 0.5, 0]} position={[1, 0, 0]}>
//                 <boxGeometry />
//                 <meshStandardMaterial color={'hotpink'} />
//             </mesh>
//             <ambientLight intensity={2} />
//             <spotLight position={[1, 1, 1]} intensity={3} />
//         </Canvas>
//     )
// }
