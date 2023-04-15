import React from "react";

const isValidHexCode = (s) => {
  const string = s
  const re = /[0-9A-Fa-f]{6}/g;
  return re.test(string) && string.includes('#')
}

const GalaxyBackground = (props) => {

  const starCount = props.starCount || 500;
  const rotationSpeed = props.rotationSpeed || 0.04;
  const innerRadius = props.innerRadius || 25;
  const minSize = props.minSize || 1;
  const maxSize = props.maxSize || 2;
  const opacity = props.opacity || 0.9;
  const bgColor = (props.bgColor && isValidHexCode(props.bgColor)) ? props.bgColor : "white";
  const starColor = (props.starColor && isValidHexCode(props.starColor)) ? props.starColor : "var(--main-blue)";

  const galaxy = React.createRef();
  const svgGroup = React.createRef();

  React.useEffect(() => {
    console.log('React.useEffect');
    const handleResize = () => {
      if (svgGroup.current) {
        svgGroup.current.innerHTML = ""
        initBackground();
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();
  });

  const rotate = (stars, center) => {
    stars.forEach(function (star) {
      star.angle += (star.speed * Math.PI) / 180;
      star.setAttribute("cx", center.x + star.radius * Math.cos(star.angle));
      star.setAttribute("cy", center.y + star.radius * Math.sin(star.angle));

    });
    requestAnimationFrame(() => rotate(stars, center));
  };

  const initBackground = () => {
    let svgNS = "http://www.w3.org/2000/svg";
    let center = {
      x: galaxy.current.getBoundingClientRect().width / 2,
      y: galaxy.current.getBoundingClientRect().height / 2,
    };

    let stars = [];
    let maxRad = Math.sqrt(Math.pow(center.x, 2) + Math.pow(center.y, 2));

    for (let i = 0; i < starCount; ++i) {

      // add new star
      let star = document.createElementNS(svgNS, "circle");

      // set basic tag attributes
      star.setAttribute("class", "star");
      star.setAttribute("fill", starColor);
      star.setAttribute("mix-blend-mode", "difference")
      star.setAttribute("stroke", "none");
      star.setAttribute("cx", center.x);
      star.setAttribute("cy", center.y);
      star.setAttribute("r", Math.random() * (maxSize - minSize) + minSize);

      // set custom attributes for calculations
      star.speed = parseFloat(star.getAttribute("r")) * rotationSpeed;
      star.angle = Math.random() * 360;
      star.radius = Math.random() * (maxRad - innerRadius) + innerRadius;

      // add to internal array and svg group
      stars.push(star);
      svgGroup.current.appendChild(star);
    }

    rotate(stars, center);
  };

  return (
    <div style={{ backgroundColor: bgColor, height: '100vh', position: 'relative', width: '100%' }}>
      <svg style={{ opacity: opacity, position: 'absolute', pointerEvents: 'none', width: '100%', height: '100%' }} id="galaxy" ref={galaxy} >
        <g id="stars" style={{ width: '100%', height: '100%' }} ref={svgGroup} ></g>
      </svg>
      <div style={{ zIndex: 10 }}>
        {props.children}
      </div>
    </div>
  );
};

export default GalaxyBackground;