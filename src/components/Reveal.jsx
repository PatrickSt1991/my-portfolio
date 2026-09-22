import { useInView, useReducedMotion } from "../hooks/useMotion";

/**
 * Laat zijn kinderen zachtjes omhoog faden zodra ze in beeld scrollen.
 * `delay` is in milliseconden en wordt gebruikt om rijen kaarten kort na
 * elkaar binnen te laten komen (staggering).
 */
export default function Reveal({ children, delay = 0, as: Tag = "div", className = "", ...rest }) {
  const reduced = useReducedMotion();
  const [ref, visible] = useInView();
  const shown = visible || reduced;

  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? "reveal-visible" : ""} ${className}`}
      style={shown && !reduced ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
