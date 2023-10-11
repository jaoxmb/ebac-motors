const currency = (value) => {
  return value.toLocaleString('pt-br', {
    style: "currency",
    currency: "brl"
  })
}

export const shop = (elementSelector, itens) => {
  const shop = $(elementSelector);

  itens.forEach((item) => {
    const {img, title, desc, price} = item;
    $(`
      <li>
        <img src="${img}" alt="${title}"/>
        <div>
          <h4>${title}</h4>
          <p>${desc}</p>
          <span>${currency(price)}</span>
          <button>Tenho interesse</button>
        </div>
      </li>
    `).appendTo(shop);
  })
}