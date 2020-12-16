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
      <div class="gallery__logos-item">4</div>
      <div class="gallery__logos-item">2</div>
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
  </div>
  `;
	return view;
};

export default Home;
