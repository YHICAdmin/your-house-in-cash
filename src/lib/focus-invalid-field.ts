export function focusInvalidField(id: string) {
  const field = document.getElementById(id);
  if (!field) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  field.scrollIntoView({
    behavior: prefersReducedMotion ? "auto" : "smooth",
    block: "center",
  });
  field.focus({ preventScroll: true });
}
