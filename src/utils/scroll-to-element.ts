export function scrollToElement(id: string) {
  const section = document.getElementById(id);
  if (section) {
    const elementPos = section.getBoundingClientRect();
    console.log(elementPos);
    window.scrollTo({
      behavior: "smooth",
      left: elementPos.left,
      top: elementPos.top + window.scrollY - 75,
    });
  }
}
