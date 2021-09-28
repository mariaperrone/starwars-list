const getState = ({ getStore, getActions, setStore }) => {
	const urlPers = "https://www.swapi.tech/api/people?page=1&limit=100";
	const urlPlan = "https://www.swapi.tech/api/planets?page=1&limit=100";
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			listaPersonajes: [],
			listaPlanetas: []
		},
		actions: {
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
			}
		}
	};
};

export default getState;
