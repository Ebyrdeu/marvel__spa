class MarvelAPI {
	_key = 'fd06e930e71d26397959727ad04fa4c0';
	_baseLink = 'https://gateway.marvel.com:443';
	_apiLink = '/v1/public/characters'


	getRes = async (url) => {
		let res = await fetch(url);
		if (!res.ok) throw new Error(`Could not fetch  ${url}, status: ${res.status}`);
		return await res.json();
	}
	getAllMarvelChars = async () => {
		const r = await this.getRes(`${this._baseLink}${this._apiLink}?limit=9&offset=210&apikey=${this._key}`);
		return r.data.results.map(this._transformChar);
	}
	getMarvelCharById = async (id) => {
		const r = await this.getRes(`${this._baseLink}${this._apiLink}/${id}?apikey=${this._key}`);
		return this._transformChar(r.data.results[0])
	}


	_transformChar = (r) => {
		return {
			name: r.name,
			description: r.description,
			thumbnail: `${r.thumbnail.path}.${r.thumbnail.extension}`,
			homepage: r.urls[0].url,
			wiki: r.urls[1].url
		}
	}
}

export default MarvelAPI;

