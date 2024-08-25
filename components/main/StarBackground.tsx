"use client";

import React, { useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, OrbitControls } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StarBackground = (props: any) => {
  const ref = useRef<any>();

  // Generate random star positions
  const [sphere] = React.useState(() =>
    random.inSphere(new Float32Array(8000), { radius: 1.2 }),
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.15; // Slow continuous rotation
      ref.current.rotation.y += delta * 0.15; // Slow continuous rotation
    }
  });

  useEffect(() => {
    if (ref.current) {
      // Initialize GSAP ScrollTrigger to control rotation
      gsap.to(ref.current.rotation, {
        x: Math.PI * 2,
        y: Math.PI * 2,
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
    }

    return () => {
      // Clean up ScrollTrigger on component unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <group rotation={[0, 0, Math.PI / 8]}>
      <OrbitControls enableZoom={false} />
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#fff" // Correct color syntax
          size={0.005} // Ensure size remains constant
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
