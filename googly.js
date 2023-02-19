const eyeCoords = { x: 0, y: 0 };
const updateEyeCoords = () => {
  const tempRect = document.querySelector(".googly").getBoundingClientRect();
  eyeCoords.x = (tempRect.left + tempRect.right) / 2;
  eyeCoords.y = (tempRect.top + tempRect.bottom) / 2;
  console.log(eyeCoords);
};
updateEyeCoords();
document.addEventListener("scroll", updateEyeCoords);
document.addEventListener("mousemove", ({ x, y }) => {
  // console.log(x, y);
});
