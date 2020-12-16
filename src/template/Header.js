const Header = () => {
	const view = `
    <div class="header">
      <img src="https://firebasestorage.googleapis.com/v0/b/tita-media.appspot.com/o/Assets%2FLogos%2FLogo.png?alt=media&token=8cfb7f00-e0a0-4208-a23f-31689d74ce70" alt="Logo" class="header__logo"/>
      <nav class="header__nav">
        <ul class="header__nav-list">
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
            <a href="#">Web</a>
          </li>
          <li class="item-search">
            <div>
              B
            </div>
          </li>
        </ul>
      </nav>
    </div>
  `;
	return view;
};

export default Header;
