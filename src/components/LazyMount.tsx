import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Renders children only once they scroll near the viewport.
 * Reserves space with `minHeight` so the layout doesn't jump and scroll
 * position stays stable as heavy sections mount.
 */
export function LazyMount({
  children,
  minHeight = 400,
  rootMargin = "600px 0px",
}: {
  children: ReactNode;
  minHeight?: number | string;
  rootMargin?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (shown) return;
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setShown(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          obs.disconnect();
        }
      },
      { rootMargin },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [shown, rootMargin]);

  return (
    <div ref={ref} style={shown ? undefined : { minHeight }}>
      {shown ? children : null}
    </div>
  );
}
