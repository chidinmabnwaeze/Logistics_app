import React from "react";
const Service = [
  {
    img: ".illustrations/Frame 139.png",
    title: "Explore Various Services",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est veniamdolorum aliquam redc",
  },
  {
    img: ".illustrations/Frame 139.png",
    title: "Explore Various Services",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est veniamdolorum aliquam redc",
  },
  {
    img: ".illustrations/Frame 139.png",
    title: "Explore Various Services",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est veniamdolorum aliquam redc",
  },
  {
    img: ".illustrations/Frame 139.png",
    title: "Explore Various Services",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est veniamdolorum aliquam redc",
  },
  {
    img: ".illustrations/Frame 139.png",
    title: "Explore Various Services",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est veniamdolorum aliquam redc",
  },
  {
    img: ".illustrations/Frame 139.png",
    title: "Explore Various Services",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est veniamdolorum aliquam redc",
  },
];

export default function Services() {
  return (
    <div className="services">
      {Service.map((service, index) => (
        <div key={index}>
          <img src={service.img} alt="" />
          <p>{service.title}</p>
          <p>{service.info}</p>
        </div>
      ))}
    </div>
  );
}
