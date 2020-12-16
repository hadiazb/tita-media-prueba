const Header = () => {
	const view = `
    <div class="header">
      <img src="" alt="Logo" class="header__logo"/>
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
            <div>B</div>
          </li>
        </ul>
      </nav>
    </div>
  `;
	return view;
};

export default Header;
