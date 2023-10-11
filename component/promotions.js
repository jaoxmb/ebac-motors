import { shop } from "./shop.js";

const itensMock = [
  {
    img: "/images/carro-bmw.png",
    title: "Carro BMW",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 158000
  },
  {
    img: "/images/fusca.png",
    title: "Carro Fusca",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 32000
  },
  {
    img: "/images/moto-bmw.png",
    title: "Moto BMW",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 62000
  }
];

export const promotions = () => {
  const itens = itensMock;
  shop('#promotions .shop', itens);
}