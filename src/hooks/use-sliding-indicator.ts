"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type RefObject,
} from "react";

type IndicatorRect = {
  x: number;
  y: number;
  width: number;
  height: number;
  visible: boolean;
};

const HIDDEN_INDICATOR: IndicatorRect = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  visible: false,
};

export function useSlidingIndicator(
  activeKey: string,
  containerRef: RefObject<HTMLElement | null>
) {
  const itemRefs = useRef(new Map<string, HTMLElement>());
  const [rect, setRect] = useState<IndicatorRect>(HIDDEN_INDICATOR);

  const measure = useCallback(() => {
    const container = containerRef.current;
    if (!container || !activeKey) {
      setRect(HIDDEN_INDICATOR);
      return;
    }

    const item = itemRefs.current.get(activeKey);
    if (!item) return;

    const containerBox = container.getBoundingClientRect();
    const itemBox = item.getBoundingClientRect();

    setRect({
      x: itemBox.left - containerBox.left,
      y: itemBox.top - containerBox.top,
      width: itemBox.width,
      height: itemBox.height,
      visible: true,
    });
  }, [activeKey, containerRef]);

  useLayoutEffect(() => {
    measure();
    const frame = requestAnimationFrame(measure);
    return () => cancelAnimationFrame(frame);
  }, [measure]);

  useEffect(() => {
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const register = useCallback(
    (key: string) => (el: HTMLElement | null) => {
      if (el) itemRefs.current.set(key, el);
      else itemRefs.current.delete(key);
    },
    []
  );

  return { rect, register, measure };
}
