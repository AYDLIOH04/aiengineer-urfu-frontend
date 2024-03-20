export const isEscapeKey = (event: KeyboardEvent) => event.key === "Escape";
export const scrollToId = (id: string) => {
  const element = document.querySelector(id);
  if (element) {
    const elementTop = element.getBoundingClientRect().top;
    window.scrollTo({
      top: window.pageYOffset + elementTop - 100,
      behavior: "smooth",
    });
  }
};
