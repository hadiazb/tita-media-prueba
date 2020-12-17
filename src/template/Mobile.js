const Mobile = () => {
	const view = `
  <div class="mobile" id="mobile">
    <ul class="mobile__list">
      <li class="mobile__list-close" id="close">
        <i class="material-icons md-dark">clear</i>
      </li>
      <li class="mobile__list-item">
        <a href="#/todos">All</a>
      </li>
      <li class="mobile__list-item">
        <a href="#/branding">Branding</a>
      </li>
      <li class="mobile__list-item">
        <a href="#/webs">Web</a>
      </li>
      <li class="mobile__list-item">
        <a href="#/photography">Photography</a>
      </li>
      <li class="mobile__list-item">
        <a href="#/apps">App</a>
      </li>
    </ul>
  </div>
  `;

	return view;
};

export default Mobile;
