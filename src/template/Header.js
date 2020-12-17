import Mobile from '../template/Mobile';

const Header = () => {
	const view = `
    <div class="header">
      <a href="/" class="header__logo">
        <img src="https://firebasestorage.googleapis.com/v0/b/tita-media.appspot.com/o/Assets%2FLogos%2FLogo.png?alt=media&token=8cfb7f00-e0a0-4208-a23f-31689d74ce70" alt="Logo" class="header__logo-img"/>
      </a>
      <nav class="header__nav">
        <ul class="header__nav-list">
          <li class="item">
            <a href="#/todos">All</a>
          </li>
          <li class="item">
            <a href="#/branding">Branding</a>
          </li>
          <li class="item">
            <a href="#/webs">Web</a>
          </li>
          <li class="item">
            <a href="#/photography">Photography</a>
          </li>
          <li class="item">
            <a href="#/apps">App</a>
          </li>
          <li class="item-search">
            <i class="fas fa-search"></i>
          </li>
        </ul>
        <div class="header__nav-burger" id="open">
          <i class="material-icons md-dark">menu</i>
        </div>
      </nav>
      ${Mobile()}
    </div>
  `;
	return view;
};

export default Header;
