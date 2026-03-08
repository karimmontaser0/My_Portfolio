import { useEffect, useRef } from "react";

const ParticleGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let mouse = { x: -1000, y: -1000 };

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    canvas.addEventListener("mousemove", handleMouse);

    const cols = 30;
    const rows = 20;
    let time = 0;

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const spacingX = w / cols;
      const spacingY = h / rows;
      const maxDist = 150;

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = i * spacingX;
          const y = j * spacingY;

          // Subtle wave
          const wave = Math.sin(time * 0.8 + i * 0.3 + j * 0.2) * 0.3 + 0.7;

          // Mouse proximity
          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const proximity = Math.max(0, 1 - dist / maxDist);

          const baseAlpha = 0.08 * wave;
          const alpha = baseAlpha + proximity * 0.35;
          const radius = 1 + proximity * 2.5;

          // Dot
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(190, 100%, 50%, ${alpha})`;
          ctx.fill();

          // Connecting lines to neighbors when mouse is near
          if (proximity > 0.05) {
            const neighbors = [
              [i + 1, j],
              [i, j + 1],
              [i + 1, j + 1],
            ];
            for (const [ni, nj] of neighbors) {
              if (ni <= cols && nj <= rows) {
                const nx = ni * spacingX;
                const ny = nj * spacingY;
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(nx, ny);
                ctx.strokeStyle = `hsla(190, 100%, 50%, ${proximity * 0.15})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
              }
            }
          }
        }
      }

      time += 0.016;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ opacity: 0.9 }}
    />
  );
};

export default ParticleGrid;
