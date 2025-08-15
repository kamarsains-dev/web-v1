"use client";
import { useEffect, useRef, useState } from "react";

type NodeLayout = {
  id: number;
  xOffset: number; // offset horizontal relatif dari tengah
  y: number; // posisi vertikal dalam px
  title: string;
};

export default function TestingPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });

  // parameter untuk pola zig-zag ala Brilliant
  const cycleLength = 5; // jumlah step sebelum balik ke kiri lagi
  const baseOffset = -105; // posisi awal relatif dari tengah (px)
  const stepOffset = 105; // jarak horizontal antar langkah
  const verticalGap = 150; // jarak vertikal antar node (px)

  // Generate 20 node dummy
  const nodes: NodeLayout[] = Array.from({ length: 50 }, (_, i) => {
    const cycleIndex = i % cycleLength;
    let indentationLevel = 0;

    if (cycleIndex <= 2) {
      indentationLevel = cycleIndex;
    } else if (cycleIndex <= 3) {
      indentationLevel = 4 - cycleIndex;
    } else {
      indentationLevel = cycleIndex - cycleLength;
    }

    const xOffset = baseOffset + indentationLevel * stepOffset;

    return {
      id: i + 1,
      xOffset,
      y: i * verticalGap,
      title: `Node ${i + 1}`,
    };
  });

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
      className="relative w-full h-screen bg-white overflow-y-scroll"
    >
      {size.w > 0 &&
        nodes.map((n) => {
          const left = size.w / 2 + n.xOffset;
          return (
            <div
              key={n.id}
              className="absolute bg-white border-2 border-black rounded-full w-10 h-10 flex items-center justify-center"
              style={{
                left,
                top: n.y,
                transform: "translate(-50%, 0)",
              }}
            >
              {n.id}
            </div>
          );
        })}
    </div>
  );
}
