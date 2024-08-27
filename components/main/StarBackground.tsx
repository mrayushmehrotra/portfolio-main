"use client";

import React, { useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StarBackground = (props: any) => {
  const ref = useRef<any>();
  const mouse = useRef({ x: 0, y: 0 });

  // Generate random star positions
  const [sphere] = React.useState(() =>
    random.inSphere(new Float32Array(8000), { radius: 1.2 }),
  );

  // Mouse move event listener
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // UseFrame to update the star rotation based on mouse movement
  useFrame(() => {
    if (ref.current) {
      // Slow constant rotation
      ref.current.rotation.y += 0.001;
      ref.current.rotation.x += 0.001;

      // Adjust rotation based on mouse movement
      ref.current.rotation.y += mouse.current.x * 0.011;
      ref.current.rotation.x += mouse.current.y * 0.011;
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
      {/* do something after then the user could not touch the canvas by mouse or touch */}
      <ambientLight intensity={0.5} />

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
