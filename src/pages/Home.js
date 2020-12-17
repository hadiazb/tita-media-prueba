import Data from '../utils/data';

const Home = () => {
	const view = `
  <div class="home">
    <h1 class="home__title">EXPLORE BEYOND HORIZON</h1>
      <h4 class="home__subtitle">
        Magna mundi referrentur quo, no rebum dignissim qui.
        Per quodsi accusata id, agam labores.
      </h4>
      <button class="home__button">VIEW OUR WORK</button>
  </div>
  <div class="gallery">
    <div class="gallery__logos">
      <div class="gallery__logos-item">
        <i class="fas fa-th-large"></i>
      </div>
      <div class="gallery__logos-item">
        <i class="fas fa-columns"></i>
      </div>
    </div>
    <ul class="gallery__nav-list">
      <li class="item">
        <a href="#">All</a>
      </li>
      <li class="item">
        <a href="#">Branding</a>
      </li>
      <li class="item">
        <a href="#">Web</a>
      </li>
      <li class="item">
        <a href="#">Photography</a>
      </li>
      <li class="item">
        <a href="#">App</a>
      </li>
    </ul>
    <div class="gallery__grid">
      ${Data.map(
				(item, index) => `
        <div class="gallery__grid-item item-${index + 1}">
          <img src="${item.photo}" alt="${item.id}"/>
        </div>
      `
			).join('')}
    </div>
    <button class="gallery__button">Show Me More</button>
  </div>
  `;
	return view;
};

export default Home;
