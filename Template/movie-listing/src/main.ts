import './style.css';

interface Movie {
  id: number;
  title: string;
  genre: string;
  year: number;
  rating: number;
  poster: string;
}

const app = document.querySelector<HTMLDivElement>('#app');

async function loadMovies() {
  const res = await fetch('/movies.json');
  const movies: Movie[] = await res.json();

  if (app) {
    const container = document.createElement('div');
    container.className = 'product-container';

    movies.forEach((movie) => {
      const card = document.createElement('div');
      card.className = 'product-card';

      const highlightClass = movie.rating >= 9 ? 'highlight-rating' : '';

      card.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}" class="movie-poster" />
        <h2>${movie.title}</h2>
        <p><strong>Genre:</strong> ${movie.genre}</p>
        <p><strong>Year:</strong> ${movie.year}</p>
        <span class="${highlightClass}">Rating: ${movie.rating}</span>
        <div>
          <button class="add-btn">Add</button>
          <button class="remove-btn">Remove</button>
        </div>
      `;

      const removeBtn = card.querySelector<HTMLButtonElement>('.remove-btn');
      removeBtn?.addEventListener('click', () => {
        card.remove();
      });

      container.appendChild(card);
    });

    app.appendChild(container);
  }
}

loadMovies();
