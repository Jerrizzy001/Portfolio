import { useEffect, useRef } from "react";

const frameMs = 1000 / 24;
const maxDevicePixelRatio = 1.25;

export default function SignalField({ className = "", density = "normal", fill = true }) {
  const rootRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    const canvas = canvasRef.current;
    if (!root || !canvas) return undefined;

    const context = canvas.getContext("2d");
    if (!context) return undefined;

    const motionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointerMedia = window.matchMedia("(hover: hover) and (pointer: fine)");
    const canvasMedia = window.matchMedia("(min-width: 768px)");
    if (motionMedia.matches || !pointerMedia.matches || !canvasMedia.matches) {
      canvas.hidden = true;
      return undefined;
    }

    const pointer = { x: 0, y: 0, active: false };
    let idleHandle = 0;
    let idleFallback = 0;
    let boundsFrame = 0;
    const state = {
      animate: !motionMedia.matches && pointerMedia.matches,
      animationFrame: 0,
      bounds: { left: 0, top: 0, width: 0, height: 0 },
      dpr: 1,
      finePointer: pointerMedia.matches,
      height: 0,
      lastFrame: 0,
      points: [],
      reduceMotion: motionMedia.matches,
      running: false,
      visible: true,
      width: 0,
    };

    const getPalette = () => {
      const isDark = document.documentElement.classList.contains("dark");

      return isDark
        ? {
            accent: "20, 184, 166",
            ink: "148, 163, 184",
            pulse: "56, 189, 248",
          }
        : {
            accent: "2, 132, 199",
            ink: "15, 23, 42",
            pulse: "13, 148, 136",
          };
    };

    const syncBounds = () => {
      const rect = root.getBoundingClientRect();
      state.bounds = {
        left: rect.left,
        top: rect.top,
        width: rect.width,
        height: rect.height,
      };
      return rect;
    };

    const buildPoints = () => {
      const rect = syncBounds();
      state.width = Math.max(1, Math.round(rect.width));
      state.height = Math.max(1, Math.round(rect.height));
      state.dpr = Math.min(window.devicePixelRatio || 1, maxDevicePixelRatio);

      canvas.width = Math.round(state.width * state.dpr);
      canvas.height = Math.round(state.height * state.dpr);
      canvas.style.width = `${state.width}px`;
      canvas.style.height = `${state.height}px`;
      context.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);

      const compact = state.width < 640;
      const spacing = density === "dense" ? (compact ? 44 : 34) : compact ? 56 : 42;
      const columns = Math.ceil(state.width / spacing) + 2;
      const rows = Math.ceil(state.height / spacing) + 2;
      const points = [];

      for (let row = 0; row < rows; row += 1) {
        for (let column = 0; column < columns; column += 1) {
          points.push({
            belowIndex: row + 1 < rows ? (row + 1) * columns + column : -1,
            column,
            phase: (column * 0.41 + row * 0.73) % Math.PI,
            rightIndex: column + 1 < columns ? row * columns + column + 1 : -1,
            row,
            x: column * spacing - spacing,
            y: row * spacing - spacing,
          });
        }
      }

      state.points = points;
      pointer.x = state.width * 0.62;
      pointer.y = state.height * 0.42;
    };

    const draw = (time = 0) => {
      const palette = getPalette();
      const ctx = context;
      const animated = state.animate;
      const t = animated ? time * 0.001 : 0;

      ctx.clearRect(0, 0, state.width, state.height);
      ctx.lineCap = "round";

      const range = Math.min(state.width, state.height) * (pointer.active ? 0.42 : 0.26);
      const fallbackX = state.width * (0.5 + Math.sin(t * 0.28) * 0.12);
      const fallbackY = state.height * (0.48 + Math.cos(t * 0.21) * 0.1);
      const targetX = pointer.active ? pointer.x : fallbackX;
      const targetY = pointer.active ? pointer.y : fallbackY;
      const drawConnection = (point, neighbor) => {
        if (!neighbor) return;

        const midX = (point.drawX + neighbor.drawX) / 2;
        const midY = (point.drawY + neighbor.drawY) / 2;
        const dx = midX - targetX;
        const dy = midY - targetY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.max(0, 1 - distance / (range * 1.1));
        const alpha = 0.035 + influence * 0.16;

        ctx.beginPath();
        ctx.strokeStyle = `rgba(${influence > 0.22 ? palette.pulse : palette.ink}, ${alpha})`;
        ctx.lineWidth = 1 + influence * 0.75;
        ctx.moveTo(point.drawX, point.drawY);
        ctx.lineTo(neighbor.drawX, neighbor.drawY);
        ctx.stroke();
      };

      for (let index = 0; index < state.points.length; index += 1) {
        const point = state.points[index];
        const offset = animated ? Math.sin(t * 0.85 + point.phase) * 2.4 : 0;
        const x = point.x + offset;
        const y = point.y + Math.cos(t * 0.7 + point.phase) * (animated ? 1.6 : 0);
        const dx = x - targetX;
        const dy = y - targetY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.max(0, 1 - distance / range);
        const dotAlpha = 0.12 + influence * 0.42;

        point.drawX = x + (dx / Math.max(distance, 1)) * influence * 10;
        point.drawY = y + (dy / Math.max(distance, 1)) * influence * 10;

        ctx.beginPath();
        ctx.fillStyle = `rgba(${influence > 0.18 ? palette.accent : palette.ink}, ${dotAlpha})`;
        ctx.arc(point.drawX, point.drawY, 1.15 + influence * 1.8, 0, Math.PI * 2);
        ctx.fill();
      }

      for (let index = 0; index < state.points.length; index += 1) {
        const point = state.points[index];
        const right = point.rightIndex >= 0 ? state.points[point.rightIndex] : null;
        const below = point.belowIndex >= 0 ? state.points[point.belowIndex] : null;

        drawConnection(point, right);
        drawConnection(point, below);
      }

      const radius = Math.max(90, Math.min(state.width, state.height) * 0.22);
      const gradient = ctx.createRadialGradient(targetX, targetY, 0, targetX, targetY, radius);
      gradient.addColorStop(0, `rgba(${palette.pulse}, ${pointer.active ? 0.16 : 0.08})`);
      gradient.addColorStop(1, `rgba(${palette.pulse}, 0)`);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, state.width, state.height);
    };

    const tick = (time) => {
      if (!state.running) return;

      if (time - state.lastFrame >= frameMs) {
        state.lastFrame = time;
        draw(time);
      }

      state.animationFrame = window.requestAnimationFrame(tick);
    };

    const start = () => {
      if (state.running || !state.animate || !state.visible || document.hidden) return;

      state.running = true;
      state.lastFrame = 0;
      state.animationFrame = window.requestAnimationFrame(tick);
    };

    const cancelQueuedStart = () => {
      if (idleHandle && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleHandle);
      }
      if (idleFallback) {
        window.clearTimeout(idleFallback);
      }
      idleHandle = 0;
      idleFallback = 0;
    };

    const queueStart = () => {
      if (state.running || idleHandle || idleFallback || !state.animate || !state.visible || document.hidden) {
        return;
      }

      if ("requestIdleCallback" in window) {
        idleHandle = window.requestIdleCallback(
          () => {
            idleHandle = 0;
            start();
          },
          { timeout: 900 }
        );
      } else {
        idleFallback = window.setTimeout(() => {
          idleFallback = 0;
          start();
        }, 250);
      }
    };

    const stop = () => {
      cancelQueuedStart();
      state.running = false;
      if (state.animationFrame) {
        window.cancelAnimationFrame(state.animationFrame);
      }
      state.animationFrame = 0;
    };

    const queueBoundsSync = () => {
      if (boundsFrame) return;

      boundsFrame = window.requestAnimationFrame(() => {
        boundsFrame = 0;
        syncBounds();
      });
    };

    const syncMotion = () => {
      state.reduceMotion = motionMedia.matches;
      state.finePointer = pointerMedia.matches;
      state.animate = !state.reduceMotion && state.finePointer;
      if (!state.animate) {
        stop();
        draw(0);
      } else {
        queueStart();
      }
    };

    const onPointerMove = (event) => {
      if (!state.finePointer) return;

      pointer.x = event.clientX - state.bounds.left;
      pointer.y = event.clientY - state.bounds.top;
      pointer.active =
        pointer.x >= 0 &&
        pointer.y >= 0 &&
        pointer.x <= state.bounds.width &&
        pointer.y <= state.bounds.height;
    };

    const onVisibility = () => {
      if (document.hidden) {
        stop();
      } else {
        queueStart();
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      buildPoints();
      draw(0);
    });

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        state.visible = Boolean(entry?.isIntersecting);
        if (state.visible) {
          queueStart();
        } else {
          stop();
        }
      },
      { threshold: 0.05 }
    );

    buildPoints();
    draw(0);
    resizeObserver.observe(root);
    intersectionObserver.observe(root);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", queueBoundsSync, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    motionMedia.addEventListener("change", syncMotion);
    pointerMedia.addEventListener("change", syncMotion);
    queueStart();

    return () => {
      stop();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      if (boundsFrame) {
        window.cancelAnimationFrame(boundsFrame);
      }
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", queueBoundsSync);
      document.removeEventListener("visibilitychange", onVisibility);
      motionMedia.removeEventListener("change", syncMotion);
      pointerMedia.removeEventListener("change", syncMotion);
    };
  }, [density]);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className={`signal-field pointer-events-none absolute overflow-hidden ${fill ? "inset-0" : ""} ${className}`}
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="signal-field__static absolute inset-0" />
    </div>
  );
}
