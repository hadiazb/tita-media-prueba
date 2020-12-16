import Home from '../pages/Home';
import Header from '../template/Header';
import Footer from '../template/Footer';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
	'/': Home,
	'/contact': 'Contact',
};

const router = async () => {
	const header = null || document.getElementById('header');
	const content = null || document.getElementById('content');
	const footer = null || document.getElementById('footer');

	header.innerHTML = await Header();
	let hash = getHash();
	let route = await resolveRoutes(hash);
	let render = routes[route] ? routes[route] : Error404;
	content.innerHTML = await render();
	footer.innerHTML = await Footer();
};

export default router;