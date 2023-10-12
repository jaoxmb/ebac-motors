import { shop } from "./shop.js";

const itensMock = [
  {
    img: "/images/carro-bmw.png",
    vehicle: "Carro BMW",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    oldPrice: 90000,
    price: 158000
  },
  {
    img: "/images/fusca.png",
    vehicle: "Carro Fusca",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    oldPrice: 90000,
    price: 32000
  },
  {
    img: "/images/moto-bmw.png",
    vehicle: "Moto BMW",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    oldPrice: 90000,
    price: 62000
  }
];

shop('#promotions .shop', itensMock);