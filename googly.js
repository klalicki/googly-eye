const eyeCoords = { x: 0, y: 0 };
const updateEyeCoords = () => {
  const tempRect = document.querySelector(".googly").getBoundingClientRect();
  eyeCoords.x = (tempRect.left + tempRect.right) / 2;
  eyeCoords.y = (tempRect.top + tempRect.bottom) / 2;
  console.log(eyeCoords);
};
const checkOffset = ({ x, y }) => {
  const delta = { x: x - eyeCoords.x, y: y - eyeCoords.y };

  const angle = (Math.atan2(delta.y, delta.x) * 180) / Math.PI;
  console.log(angle);
  document
    .querySelector(".googly")
    .style.setProperty("--googly-rotate", `${angle}deg`);
};

updateEyeCoords();
document.addEventListener("scroll", updateEyeCoords);
document.addEventListener("resize", updateEyeCoords);
document.addEventListener("mousemove", checkOffset);
