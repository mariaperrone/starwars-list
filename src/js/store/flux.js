const getState = ({ getStore, getActions, setStore }) => {
	const urlPers = "https://www.swapi.tech/api/people?page=1&limit=100";
	const urlPlan = "https://www.swapi.tech/api/planets?page=1&limit=100";
	return {
		store: {
			listaPersonajes: [],
			listaPlanetas: [],
			favorites: [],
			character: {},
			planet: {}
		},
		actions: {
			getCharacter: id => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/people/" + id)
					.then(res => res.json())
					.then(data => {
						setStore({ character: data.result });
					})
					.catch(err => err);
			},
			getPlanet: id => {
				fetch("https://www.swapi.tech/api/planets/" + id)
					.then(res => res.json())
					.then(data => {
						setStore({ planet: data.result }); //seteamos el valor del state planet con el objeto que se encuentra en la respuesta del json.result
					})
					.catch(err => err);
			},
			isActive: item => {
				const store = getStore();
				if (store.favorites.includes(item)) {
					return true;
				} else {
					return false;
				}
			},

			loadSomeData: () => {
				fetch(urlPers, {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						//Aquí es donde debe comenzar tu código después de que finalice la búsqueda
						setStore({ listaPersonajes: data.results }); //esto imprimirá en la consola el objeto exacto recibido del servidor
					})
					.catch(error => {
						//manejo de errores
						alert(error);
					});

				fetch(urlPlan, {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						//Aquí es donde debe comenzar tu código después de que finalice la búsqueda
						setStore({ listaPlanetas: data.results }); //esto imprimirá en la consola el objeto exacto recibido del servidor
					})
					.catch(error => {
						//manejo de errores
						alert(error);
					});
			},
			setFavorites: favorite => {
				const store = getStore();
				if (store.favorites.includes(favorite)) {
					getActions().removeFavorites(favorite);
				} else {
					setStore({ favorites: [...store.favorites, favorite] });
				}
			},
			removeFavorites: favorite => {
				const store = getStore();
				let newList = store.favorites.filter(elem => elem != favorite);
				setStore({ favorites: newList });
			}
		}
	};
};

export default getState;
