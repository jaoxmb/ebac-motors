const currency = (value) => {
  return value.toLocaleString('pt-br', {
    style: "currency",
    currency: "brl"
  })
}

export const shop = (elementSelector, itens) => {
  const shop = $(elementSelector);

  itens.forEach((item) => {
    const {img, vehicle, desc, price} = item;
    $(`
      <li>
        <img src="${img}" alt="${vehicle}"/>
        <div>
          <h3>${vehicle}</h3>
          <p>${desc}</p>
          <span>${currency(price)}</span>
          <button class="select-vehicle" data-vehicle="${vehicle}">Tenho interesse</button>
        </div>
      </li>
    `).appendTo(shop);
  })
}