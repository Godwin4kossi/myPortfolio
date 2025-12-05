import { useState, useEffect } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      className="pointer-events-none fixed w-6 h-6 bg-black border rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
      style={{ left: position.x, top: position.y }}
    />
  );
};

export default CustomCursor;
