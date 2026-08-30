"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface TargetCursorProps {
  spinDuration?: number;
  hideDefaultCursor?: boolean;
  parallaxOn?: boolean;
  hoverDuration?: number;
  cursorColor?: string;
  cursorColorOnTarget?: string;
}

export default function TargetCursor({
  spinDuration = 2,
  hideDefaultCursor = true,
  parallaxOn = true,
  hoverDuration = 0.2,
  cursorColor = "#ffffff",
  cursorColorOnTarget = "#B497CF",
}: TargetCursorProps) {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor) return;

    const corners = Array.from(
      cursor.querySelectorAll<HTMLElement>(
        ".target-cursor-corner"
      )
    );

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".cursor-target"
      )
    );

    const mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    const position = {
      x: mouse.x,
      y: mouse.y,
    };

    let animationFrame: number;

    const moveCursor = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const animate = () => {
      position.x += (mouse.x - position.x) * 0.15;
      position.y += (mouse.y - position.y) * 0.15;

      gsap.set(cursor, {
        x: position.x,
        y: position.y,
      });

      animationFrame = requestAnimationFrame(animate);
    };

    const targetMove = (event: Event) => {
      const mouseEvent = event as MouseEvent;
      const target = event.currentTarget as HTMLElement;

      const rect = target.getBoundingClientRect();

      const x =
        ((mouseEvent.clientX - rect.left) / rect.width - 0.5) * 10;

      const y =
        ((mouseEvent.clientY - rect.top) / rect.height - 0.5) * 10;

      gsap.to(target, {
        x,
        y,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const targetEnter = (event: Event) => {
      const target = event.currentTarget as HTMLElement;

      gsap.to(cursor, {
        scale: 1.5,
        duration: hoverDuration,
        ease: "power2.out",
      });

      gsap.to(corners, {
        scale: 1.3,
        duration: hoverDuration,
        ease: "power2.out",
      });

      target.style.setProperty(
        "--target-cursor-color",
        cursorColorOnTarget
      );

      if (parallaxOn) {
        target.addEventListener("mousemove", targetMove);
      }
    };

    const targetLeave = (event: Event) => {
      const target = event.currentTarget as HTMLElement;

      gsap.to(cursor, {
        scale: 1,
        duration: hoverDuration,
        ease: "power2.out",
      });

      gsap.to(corners, {
        scale: 1,
        duration: hoverDuration,
        ease: "power2.out",
      });

      target.style.removeProperty(
        "--target-cursor-color"
      );

      if (parallaxOn) {
        target.removeEventListener(
          "mousemove",
          targetMove
        );
      }

      gsap.to(target, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    window.addEventListener(
      "mousemove",
      moveCursor
    );

    targets.forEach((target) => {
      target.addEventListener(
        "mouseenter",
        targetEnter
      );

      target.addEventListener(
        "mouseleave",
        targetLeave
      );
    });

    animate();

    return () => {
      window.removeEventListener(
        "mousemove",
        moveCursor
      );

      cancelAnimationFrame(animationFrame);

      targets.forEach((target) => {
        target.removeEventListener(
          "mouseenter",
          targetEnter
        );

        target.removeEventListener(
          "mouseleave",
          targetLeave
        );

        target.removeEventListener(
          "mousemove",
          targetMove
        );
      });
    };
  }, [
    hoverDuration,
    cursorColorOnTarget,
    parallaxOn,
  ]);

  useEffect(() => {
    if (!hideDefaultCursor) return;

    document.body.style.cursor = "none";

    return () => {
      document.body.style.cursor = "";
    };
  }, [hideDefaultCursor]);

  return (
    <div
      ref={cursorRef}
      className="target-cursor pointer-events-none fixed left-0 top-0 z-[9999]"
    >
      {/* Top Left */}
      <div
        className="target-cursor-corner absolute -left-3 -top-3 h-3 w-3 border-l-2 border-t-2"
        style={{
          borderColor: cursorColor,
        }}
      />

      {/* Top Right */}
      <div
        className="target-cursor-corner absolute -right-3 -top-3 h-3 w-3 border-r-2 border-t-2"
        style={{
          borderColor: cursorColor,
        }}
      />

      {/* Bottom Left */}
      <div
        className="target-cursor-corner absolute -bottom-3 -left-3 h-3 w-3 border-b-2 border-l-2"
        style={{
          borderColor: cursorColor,
        }}
      />

      {/* Bottom Right */}
      <div
        className="target-cursor-corner absolute -bottom-3 -right-3 h-3 w-3 border-b-2 border-r-2"
        style={{
          borderColor: cursorColor,
        }}
      />

      {/* Center dot */}
      <div
        className="h-1.5 w-1.5 rounded-full"
        style={{
          backgroundColor: cursorColor,
        }}
      />
    </div>
  );
}