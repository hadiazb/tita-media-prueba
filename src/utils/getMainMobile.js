const getMainMobile = () => {
	const open = document.getElementById('open');
	const close = document.getElementById('close');

	open.onclick = () => {
		const mobile = document.getElementById('mobile');
		mobile.style.left = '0px';
	};

	close.onclick = () => {
		const mobile = document.getElementById('mobile');
		mobile.style.left = '-330px';
	};
};

export default getMainMobile;
