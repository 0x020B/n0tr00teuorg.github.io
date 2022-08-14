if (window.location.host == "n0tr00t.eu.org") {
	var cid = "Qmc1g8PM2tCcebfFx3kEfCCtgNqzUkfyUYro3shjdgpUWf";
	const gateway = [
		"ipfs://",
		"https://ipfs.io/ipfs/",
		"https://gateway.ipfs.io/ipfs/",
		"https://dweb.link/ipfs/",
		"https://cloudflare-ipfs.com/ipfs/"
	];

	function httpGet(theUrl) {
		var xmlHttp = new XMLHttpRequest();
		xmlHttp.open("GET", theUrl, true);
		if (xmlHttp.status == 200) {
			location.window.origin = theUrl + cid;
		}
		xmlHttp.send(null);
	}
	gateway.forEach(httpGet + cid);
}
