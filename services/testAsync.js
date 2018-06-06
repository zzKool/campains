//https://rallycoding.herokuapp.com/api/music_albums

function fetchAlbums() {
	fetch('https://rallycoding.herokuapp.com/api/music_albums')
		.then(res => res.json())
		.then(json => console.log(json));
}

async function fetchAlbums_v2() {
	const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
	const json = await res.json();

	console.log(json);
}

const fetchAlbums_v3 = async () => {
	const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
	const json = await res.json();

	console.log(json);
};

fetchAlbums_v3();
