"use strict"

let wrapper = document.querySelector('.wrapper');

db.forEach((el) => {
  let card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `<img
            class="card__img"
            src="${el.image}"
            alt="${el.title}</"
          />
          <div class="card-body">
            <h4>${el.title}</h4>
            <strong class="fs-4">$${el.price}</strong>
            <p>${el.description.substring(0, 20)}</p>
            <span class="card__category">Category: ${el.category}</span>
            <div class="d-flex gap-5">
              <span>${el.rating.rate}</span>
              <span>Count: ${el.rating.count}</span>
            </div>
            <button class="btn btn-seccess w-100 mt-4">add to card</button>
          </div>
        </div>`;

        wrapper.appendChild(card);
});