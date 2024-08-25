"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Points,
  PointMaterial,
  Preload,
  OrbitControls,
} from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
const StarBackground = (props: any) => {
  const ref: any = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(8000), { radius: 1.2 }),
  );
  var moveX: any;
  useFrame((state, delta) => {
    moveX = ref.current.rotation.x -= delta / 2;
    const moveY = (ref.current.rotation.y -= delta / 2);
  });

  useGSAP(() => {
    gsap.set(moveX, {
      filter: "blur(10px)",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        scrub: true,
      },
    });
  });

  return (
    <group rotation={[0, 0, Math.PI / 8]}>
      <OrbitControls />
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="$fff"
          size={0.004}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 z-[20]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;
