"use client"
import { Float } from "@react-three/drei";
import React, { forwardRef, ReactNode } from "react";
import { SodaCan, SodaCanProps } from "./SodaCan";
import { Group } from "three";

interface FloatingProps {
    flavour?: SodaCanProps["flavor"],
    floatSpeed?: number,
    rotationIntensity?: number,
    floatIntensity?: number,
    floatingRange?: [number, number],
    children?: ReactNode;
}

const FloatingCan = forwardRef<Group, FloatingProps>(({
    flavour = "blackCherry",
    floatSpeed =1.5,
    rotationIntensity=1,
    floatIntensity=1,
    floatingRange=[-0.1,0.1],
    children,
    ...props
}, ref) => {
  return (
    <group ref={ref} {...props}>
      <Float
        speed={floatSpeed}
        rotationIntensity={rotationIntensity}
        floatIntensity={floatIntensity}
        floatingRange={floatingRange}
      >
        {children}
        <SodaCan flavor={flavour} />
      </Float>
    </group>
  );
});
FloatingCan.displayName = "FloatingCan";
export default FloatingCan;
