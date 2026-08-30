"use client";

import {
  CSSProperties,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "./DriftWall.css";

export interface DriftWallItem {
  quote: string;
  name: string;
  location?: string;
  date?: string;
  image?: string;
  href?: string;
}

export interface DriftWallProps {
  items?: DriftWallItem[];
  columns?: number;
  tileWidth?: number;
  tileHeight?: number;
  gap?: number;
  radius?: number;
  tilt?: number;
  turn?: number;
  roll?: number;
  perspective?: number;
  depth?: number;
  speed?: number;
  direction?: "up" | "down";
  variance?: number;
  parallax?: number;
  pauseOnHover?: boolean;
  lift?: number;
  fade?: number;
  dim?: number;
  grayscale?: boolean;
  overlayColor?: string;
  className?: string;
  style?: CSSProperties;
}

interface ColumnMeta {
  copyHeight: number;
  copies: number;
}

const DEFAULT_ITEMS: DriftWallItem[] = [
  {
    quote:
      "It felt less like a photoshoot and more like having someone quietly preserve every feeling of our day.",
    name: "Riya & Arjun",
    location: "Mumbai",
    date: "2026",
  },
  {
    quote:
      "Every time we watch our wedding film, we notice another little moment we had completely forgotten.",
    name: "Ananya & Karan",
    location: "Pune",
    date: "2026",
  },
  {
    quote:
      "They captured the chaos, the laughter, the tears — everything that made the day ours.",
    name: "Meera & Aditya",
    location: "Delhi",
    date: "2025",
  },
  {
    quote:
      "The photographs don't just show what happened. They bring us right back to how it felt.",
    name: "Ishita & Rohan",
    location: "Jaipur",
    date: "2025",
  },
  {
    quote:
      "From our first conversation to the final film, everything felt thoughtful, personal and effortless.",
    name: "Sneha & Ved",
    location: "Goa",
    date: "2025",
  },
  {
    quote:
      "We wanted something timeless, and somehow they managed to make every frame feel exactly like us.",
    name: "Aisha & Kabir",
    location: "Udaipur",
    date: "2025",
  },
  {
    quote:
      "Our families keep going back to the photographs. That alone tells us how beautifully they captured the day.",
    name: "Naina & Yash",
    location: "Bengaluru",
    date: "2025",
  },
  {
    quote:
      "Nothing felt forced. The moments simply happened, and they were there to catch them.",
    name: "Tara & Dhruv",
    location: "Hyderabad",
    date: "2024",
  },
  {
    quote:
      "The final gallery feels like a collection of memories rather than a collection of poses.",
    name: "Kavya & Neil",
    location: "Kolkata",
    date: "2024",
  },
  {
    quote:
      "We cried, laughed and relived the entire wedding night while going through our film.",
    name: "Sara & Armaan",
    location: "Jodhpur",
    date: "2024",
  },
];

const prefersReducedMotion = (): boolean =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const columnFactor = (index: number, variance: number): number => {
  const pseudo = ((index * 0.6180339887 + 0.35) % 1) * 2 - 1;
  return 1 + variance * pseudo;
};

const DriftWall = ({
  items = DEFAULT_ITEMS,
  columns = 5,
  tileWidth = 280,
  tileHeight = 210,
  gap = 18,
  radius = 4,
  tilt = 16,
  turn = -14,
  roll = 0,
  perspective = 1200,
  depth = 120,
  speed = 42,
  direction = "up",
  variance = 0.45,
  parallax = 0.6,
  pauseOnHover = false,
  lift = 64,
  fade = 0.6,
  dim = 0.72,
  grayscale = false,
  overlayColor = "transparent",
  className = "",
  style,
}: DriftWallProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const planeRef = useRef<HTMLDivElement>(null);
  const trackRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);

  const offsetsRef = useRef<number[]>([]);
  const velocitiesRef = useRef<number[]>([]);
  const hoveredColRef = useRef<number>(-1);
  const wallHoveredRef = useRef<boolean>(false);

  const pointerRef = useRef({ x: 0, y: 0 });
  const pointerDampedRef = useRef({ x: 0, y: 0 });
  const lastTsRef = useRef<number | null>(null);

  const [containerHeight, setContainerHeight] = useState(600);
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeIdRef = useRef<string | null>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(prefersReducedMotion());

    const mq = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const onChange = (e: MediaQueryListEvent) => {
      setReduced(e.matches);
    };

    mq.addEventListener("change", onChange);

    return () => mq.removeEventListener("change", onChange);
  }, []);

  const columnItems = useMemo<DriftWallItem[][]>(() => {
    const cols: DriftWallItem[][] = Array.from(
      { length: columns },
      () => []
    );

    items.forEach((item, i) => {
      cols[i % columns].push(item);
    });

    return cols.map((col) =>
      col.length ? col : items.slice(0, 1)
    );
  }, [items, columns]);

  const columnMeta = useMemo<ColumnMeta[]>(() => {
    const unit = tileHeight + gap;

    return columnItems.map((col) => {
      const copyHeight = Math.max(
        unit,
        col.length * unit
      );

      const copies = Math.max(
        2,
        Math.ceil((containerHeight * 1.6) / copyHeight) + 1
      );

      return {
        copyHeight,
        copies,
      };
    });
  }, [
    columnItems,
    tileHeight,
    gap,
    containerHeight,
  ]);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ro = new ResizeObserver(([entry]) => {
      setContainerHeight(
        entry.contentRect.height || 600
      );
    });

    ro.observe(containerRef.current);

    return () => ro.disconnect();
  }, []);

  const baseVelocities = useMemo<number[]>(() => {
    const dirSign = direction === "up" ? 1 : -1;

    return columnItems.map((_, c) => {
      const altSign = c % 2 === 0 ? 1 : -1;

      return (
        speed *
        columnFactor(c, variance) *
        dirSign *
        altSign
      );
    });
  }, [
    columnItems,
    speed,
    direction,
    variance,
  ]);

  useEffect(() => {
    offsetsRef.current = columnMeta.map(
      (meta, c) =>
        meta.copyHeight *
        ((c * 0.37) % 1)
    );

    velocitiesRef.current =
      columnItems.map(() => 0);
  }, [columnMeta, columnItems]);

  const applyPlaneTransform = useCallback(
    (px: number, py: number) => {
      const plane = planeRef.current;

      if (!plane) return;

      plane.style.transform =
        `translate(-50%, -50%) scale(1.18) ` +
        `rotateX(${tilt + py}deg) ` +
        `rotateY(${turn + px}deg) ` +
        `rotateZ(${roll}deg) ` +
        `translateZ(${-depth}px)`;
    },
    [tilt, turn, roll, depth]
  );

  useEffect(() => {
    const animate = (ts: number) => {
      if (lastTsRef.current === null) {
        lastTsRef.current = ts;
      }

      const dt = Math.min(
        0.05,
        Math.max(
          0,
          ts - lastTsRef.current
        ) / 1000
      );

      lastTsRef.current = ts;

      const maxTilt = parallax * 8;

      const targetX =
        pointerRef.current.x * maxTilt;

      const targetY =
        -pointerRef.current.y * maxTilt;

      const damp =
        1 - Math.exp(-dt / 0.12);

      pointerDampedRef.current.x +=
        (targetX -
          pointerDampedRef.current.x) *
        damp;

      pointerDampedRef.current.y +=
        (targetY -
          pointerDampedRef.current.y) *
        damp;

      applyPlaneTransform(
        pointerDampedRef.current.x,
        pointerDampedRef.current.y
      );

      if (!reduced) {
        for (
          let c = 0;
          c < trackRefs.current.length;
          c++
        ) {
          const meta = columnMeta[c];

          if (!meta) continue;

          const paused =
            wallHoveredRef.current &&
            pauseOnHover;

          const factor =
            paused ||
            hoveredColRef.current === c
              ? 0
              : 1;

          const target =
            baseVelocities[c] * factor;

          const ease =
            1 -
            Math.exp(
              -dt /
                (target === 0
                  ? 0.16
                  : 0.28)
            );

          velocitiesRef.current[c] +=
            (target -
              velocitiesRef.current[c]) *
            ease;

          let next =
            (offsetsRef.current[c] ?? 0) +
            velocitiesRef.current[c] * dt;

          next =
            ((next % meta.copyHeight) +
              meta.copyHeight) %
            meta.copyHeight;

          offsetsRef.current[c] = next;

          const el =
            trackRefs.current[c];

          if (el) {
            el.style.transform =
              `translate3d(0, ${-next}px, 0)`;
          }
        }
      } else {
        for (
          let c = 0;
          c < trackRefs.current.length;
          c++
        ) {
          const el =
            trackRefs.current[c];

          const meta = columnMeta[c];

          if (el && meta) {
            el.style.transform =
              `translate3d(0, ${
                -(offsetsRef.current[c] ?? 0)
              }px, 0)`;
          }
        }
      }

      rafRef.current =
        requestAnimationFrame(animate);
    };

    rafRef.current =
      requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(
          rafRef.current
        );
      }

      rafRef.current = null;
      lastTsRef.current = null;
    };
  }, [
    baseVelocities,
    columnMeta,
    pauseOnHover,
    parallax,
    reduced,
    applyPlaneTransform,
  ]);

  const activate = useCallback(
    (id: string, index: number): void => {
      activeIdRef.current = id;
      hoveredColRef.current = index;
      setActiveId(id);
    },
    []
  );

  const release = useCallback((): void => {
    activeIdRef.current = null;
    hoveredColRef.current = -1;
    setActiveId(null);
  }, []);

  const handlePointerMove = useCallback(
    (
      e: React.PointerEvent<HTMLDivElement>
    ) => {
      const rect =
        containerRef.current?.getBoundingClientRect();

      if (!rect) return;

      if (parallax > 0 && !reduced) {
        pointerRef.current = {
          x:
            (e.clientX - rect.left) /
              rect.width -
            0.5,

          y:
            (e.clientY - rect.top) /
              rect.height -
            0.5,
        };
      }

      const hit = document.elementFromPoint(
        e.clientX,
        e.clientY
      );

      const tile =
        hit &&
        hit.closest
          ? (hit.closest(
              "[data-tile-id]"
            ) as HTMLElement | null)
          : null;

      if (!tile) return;

      const id =
        tile.dataset.tileId ?? null;

      if (id === activeIdRef.current)
        return;

      activeIdRef.current = id;
      hoveredColRef.current = Number(
        tile.dataset.col
      );

      setActiveId(id);
    },
    [parallax, reduced]
  );

  const handlePointerLeaveWall =
    useCallback((): void => {
      wallHoveredRef.current = false;

      pointerRef.current = {
        x: 0,
        y: 0,
      };

      release();
    }, [release]);

  const cssVars = useMemo<CSSProperties>(
    () =>
      ({
        "--dw-tile-w": `${tileWidth}px`,
        "--dw-tile-h": `${tileHeight}px`,
        "--dw-gap": `${gap}px`,
        "--dw-radius": `${radius}px`,
        "--dw-perspective": `${perspective}px`,
        "--dw-lift": `${lift}px`,
        "--dw-dim": dim,
        "--dw-gray": grayscale ? 1 : 0,
        "--dw-overlay": overlayColor,
        "--dw-edge": `${Math.max(
          0,
          (1 - fade) * 100
        )}%`,
        ...style,
      }) as CSSProperties,
    [
      tileWidth,
      tileHeight,
      gap,
      radius,
      perspective,
      lift,
      dim,
      grayscale,
      overlayColor,
      fade,
      style,
    ]
  );

  const renderTile = (
    item: DriftWallItem,
    id: string,
    colIndex: number
  ) => {
    const inner = (
      <span className="drift-wall__inner">
        <span
          className="drift-wall__quote-mark"
          aria-hidden="true"
        >
          “
        </span>

        <span className="drift-wall__content">
          <span className="drift-wall__quote">
            {item.quote}
          </span>

          <span className="drift-wall__divider" />

          <span className="drift-wall__author">
            {item.name}
          </span>

          {(item.location ||
            item.date) && (
            <span className="drift-wall__meta">
              {item.location}
              {item.location &&
              item.date
                ? " · "
                : ""}
              {item.date}
            </span>
          )}
        </span>
      </span>
    );

    const commonProps = {
      className: `drift-wall__tile${
        activeId === id
          ? " is-active"
          : ""
      }`,
      "data-tile-id": id,
      "data-col": colIndex,
      onFocus: () =>
        activate(id, colIndex),
      onBlur: release,
    };

    if (item.href) {
      return (
        <a
          key={id}
          href={item.href}
          target="_blank"
          rel="noreferrer noopener"
          {...commonProps}
        >
          {inner}
        </a>
      );
    }

    return (
      <div
        key={id}
        tabIndex={0}
        role="button"
        aria-label={`Testimonial from ${item.name}`}
        {...commonProps}
      >
        {inner}
      </div>
    );
  };

  const rootClass = [
    "drift-wall",
    reduced
      ? "drift-wall--reduced"
      : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={containerRef}
      className={rootClass}
      style={cssVars}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => {
        wallHoveredRef.current = true;
      }}
      onPointerLeave={
        handlePointerLeaveWall
      }
      role="group"
      aria-label="Wedding testimonials"
    >
      <div
        ref={planeRef}
        className="drift-wall__plane"
      >
        {columnItems.map((col, c) => {
          const meta = columnMeta[c];

          const copies = Array.from({
            length: meta.copies,
          });

          return (
            <div
              className="drift-wall__col"
              key={`col-${c}`}
            >
              <div
                className="drift-wall__track"
                ref={(el) => {
                  trackRefs.current[c] =
                    el;
                }}
              >
                {copies.map(
                  (_, copyIndex) =>
                    col.map(
                      (
                        item,
                        itemIndex
                      ) =>
                        renderTile(
                          item,
                          `${c}-${copyIndex}-${itemIndex}`,
                          c
                        )
                    )
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DriftWall;