// components/MapWithOverlay.tsx
"use client";
import { useEffect, useRef, useState } from "react";

type NodeLayout = {
  id: number;
  x: number;
  y: number;
  title: string;
  locked?: boolean;
  current?: boolean;
  isPremium?: boolean;
  userThunders?: number;
};

export default function MapWithOverlay({
  nodes = [] as NodeLayout[],
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const update = () => {
      if (!containerRef.current) return;
      const r = containerRef.current.getBoundingClientRect();
      setSize({ w: r.width, h: r.height });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: 520,
        backgroundColor: "#222", // Biar keliatan
      }}
    >
      {/* Titik / lingkaran sesuai koordinat */}
      <div style={{ position: "absolute", inset: 0 }}>
        {size.w > 0 &&
          nodes.map((n) => {
            const left = n.x * size.w;
            const top = n.y * size.h;
            return (
              <div
                key={n.id}
                style={{
                  position: "absolute",
                  left,
                  top,
                  transform: "translate(-50%, -50%)",
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  backgroundColor: "white",
                  border: "2px solid black",
                }}
                title={n.title} // tooltip sederhana
              />
            );
          })}
      </div>
    </div>
  );
}
