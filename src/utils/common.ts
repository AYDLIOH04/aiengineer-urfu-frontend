export const isEscapeKey = (event: KeyboardEvent) => event.key === 'Escape';
export const scrollToId = (id: string) => {
  const element = document.querySelector(id);
  element?.scrollIntoView({ behavior: 'smooth' });
};
