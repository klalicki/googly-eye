const eyeCoords = { x: 0, y: 0 };
const updateEyeCoords = () => {
  document.querySelectorAll(".googly").forEach((el) => {
    const tempRect = el.getBoundingClientRect();
    const eyeCoords = { x: 0, y: 0 };
    eyeCoords.x = (tempRect.left + tempRect.right) / 2;
    eyeCoords.y = (tempRect.top + tempRect.bottom) / 2;
    el.setAttribute("data-x", eyeCoords.x);
    el.setAttribute("data-y", eyeCoords.y);
  });

  console.log(eyeCoords);
};
const checkOffset = ({ x, y }) => {
  document.querySelectorAll(".googly").forEach((el) => {
    const eyeCoords = {
      x: el.getAttribute("data-x"),
      y: el.getAttribute("data-y"),
    };
    const delta = { x: x - eyeCoords.x, y: y - eyeCoords.y };

    const angle = (Math.atan2(delta.y, delta.x) * 180) / Math.PI;
    console.log(angle);
    el.style.setProperty("--googly-rotate", `${angle}deg`);
  });
};

updateEyeCoords();
document.addEventListener("scroll", updateEyeCoords);
document.addEventListener("resize", updateEyeCoords);
document.addEventListener("mousemove", checkOffset);
