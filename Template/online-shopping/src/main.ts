import './style.css';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

const app = document.querySelector<HTMLDivElement>('#app');

async function loadProducts() {
  const res = await fetch('/product.json');
  const products: Product[] = await res.json();

  if (app) {
    const container = document.createElement('div');
    container.className = 'product-container';

    products.forEach((product) => {
  const card = document.createElement('div');
  card.className = 'product-card';

  const highlightClass = product.price >= 200 ? 'highlight-price' : '';

  card.innerHTML = `
    <h2>${product.name}</h2>
    <p>${product.description}</p>
    <span class="${highlightClass}">$${product.price.toFixed(2)}</span>
    <div>
      <button class="add-btn">Add</button>
      <button class="remove-btn">Remove</button>
    </div>
  `;

  const removeBtn = card.querySelector('.remove-btn');
  removeBtn?.addEventListener('click', () => {
    card.remove();
  });

  container.appendChild(card);
});


    app.appendChild(container);
  }
}

loadProducts()