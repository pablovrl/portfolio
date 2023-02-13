export function scrollToElement(element: string) {
  const el = document.getElementById(element.trim());
  const position = el?.getBoundingClientRect();
  window.scrollTo({
    behavior: "smooth",
    left: position!.left,
    top: position!.top + window.scrollY - 100,
  });
}
