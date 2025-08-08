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

      card.innerHTML = `
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <span>₹ ${product.price.toFixed(2)}</span>
        <div>
          <button class="add-btn">Add</button>
          <button class="remove-btn">Remove</button>
        </div>
      `;

      // Add event listener for the "Remove" button
      const removeBtn = card.querySelector('.remove-btn');
      removeBtn?.addEventListener('click', () => {
        card.remove(); // removes the product card from the DOM
      });

      container.appendChild(card);
    });

    app.appendChild(container);
  }
}

loadProducts()