export const checkIsMobile = () => {
  return window.matchMedia("(max-width: 600px)").matches;
};
