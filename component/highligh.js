import { shop } from "./shop.js";

const itensMock = [
  {
    img: "/images/carro-bmw.png",
    vehicle: "Carro BMW",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 158000
  },
  {
    img: "/images/fusca.png",
    vehicle: "Carro Fusca",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 32000
  },
  {
    img: "/images/moto-bmw.png",
    vehicle: "Moto BMW",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 62000
  }
];

shop("#highlight .shop", itensMock);