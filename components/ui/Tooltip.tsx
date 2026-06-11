"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

const HIDE_AFTER_MS = 2200;

type TooltipState = {
  x: number;
  y: number;
  content: ReactNode;
};

/**
 * Lightweight fixed-position tooltip, ported from the legacy `.ch-tip` style:
 * dark pill (ink on bg), centered above the pointer, auto-hides after 2.2s.
 *
 * Usage:
 *   const { show, hide, tooltip } = useTooltip();
 *   ...
 *   <svg onMouseLeave={hide}>…</svg>
 *   {tooltip}
 */
export function useTooltip(): {
  show: (clientX: number, clientY: number, content: ReactNode) => void;
  hide: () => void;
  tooltip: ReactNode;
} {
  const [state, setState] = useState<TooltipState | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clear = () => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  };

  const hide = useCallback(() => {
    clear();
    setState(null);
  }, []);

  const show = useCallback(
    (clientX: number, clientY: number, content: ReactNode) => {
      clear();
      setState({ x: clientX, y: clientY, content });
      timer.current = setTimeout(() => setState(null), HIDE_AFTER_MS);
    },
    []
  );

  // Clean up the pending timer on unmount.
  useEffect(() => clear, []);

  const tooltip: ReactNode = state ? (
    <div
      role="tooltip"
      className="pointer-events-none fixed z-50 whitespace-nowrap rounded-md bg-ink px-3 py-1.5 text-[0.78rem] font-semibold text-bg shadow-[0_4px_16px_rgba(0,0,0,0.4)]"
      style={{
        left: state.x,
        top: state.y - 8,
        transform: "translate(-50%, -110%)",
      }}
    >
      {state.content}
    </div>
  ) : null;

  return { show, hide, tooltip };
}
