"use client";

import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

useGLTF.preload("/Soda-can.gltf");

const flavorTextures = {
  lemonLime: "/labels/lemon-lime.png",
  grape: "/labels/grape.png",
  blackCherry: "/labels/black-cherry.png",
  strawberryLemonade: "/labels/strawberry-lemonade.png",
  watermelon: "/labels/watermelon.png",
};

const metalMaterial = new THREE.MeshStandardMaterial({
  roughness: 0.3,
  metalness: 1,
  color: "#bbbbbb",
});

export type SodaCanProps = {
  flavor?: keyof typeof flavorTextures;
  scale?: number;
};

export function SodaCan({
  flavor = "blackCherry",
  scale = 2,
  ...props
}: SodaCanProps) {
  const { nodes } = useGLTF("/Soda-can.gltf");

  const labels = useTexture(flavorTextures);
  
  // Fixes upside down labels
  labels.strawberryLemonade.flipY = false;
  labels.blackCherry.flipY = false;
  labels.watermelon.flipY = false;
  labels.grape.flipY = false;
  labels.lemonLime.flipY = false;

  const label = labels[flavor];

  return (
    <group {...props} dispose={null} scale={scale} rotation={[0, -Math.PI, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.cylinder as THREE.Mesh).geometry}
        material={metalMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.cylinder_1 as THREE.Mesh).geometry}
      >
        <meshStandardMaterial roughness={0.15} metalness={0.6} map={label} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Tab as THREE.Mesh).geometry}
        material={metalMaterial}
      />
    </group>
  );
}















// "use client";

// import { useGLTF, useTexture } from "@react-three/drei";
// import * as THREE from "three";
// import { MeshStandardMaterial } from "three";

// useGLTF.preload("/0.gltf");

// const flavorTextures = {
//     lemonLime: "/textures/image_1.png",
//   grape: "/textures/image_1.png",
//   blackCherry: "/textures/image_1.png",
//   strawberryLemonade: "/textures/image_1.png",
//   watermelon: "/textures/image_1.png",
// };

// export type SodaCanProps = {
//   flavor?: keyof typeof flavorTextures;
//   scale?: number;
// };

// export function SodaCan({
//   flavor = "blackCherry",
//   scale = 1,
//   ...props
// }: SodaCanProps) {
//   const { nodes } = useGLTF("/0.gltf") as any;

//   const labels = useTexture(flavorTextures);

//   // Ensure textures are correctly oriented
//   Object.values(labels).forEach((texture) => {
//     texture.flipY = false;
//   });

//   const label = labels[flavor];

//   // Apply label to the existing mesh
//   const material = new MeshStandardMaterial({
//     map: label,
//     metalness: 0.6,
//     roughness: 0.2,
//   });

//   return (
//     <group {...props} dispose={null} scale={scale} rotation={[0, -Math.PI, 0]}>
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.tmpqzoexq0tobj.geometry}
//         material={material}
//       />
//     </group>
//   );
// }
