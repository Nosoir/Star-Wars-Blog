const getState = ({ getStore, getActions, setStore }) => {
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
			favoritos: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			
			agregarFavorito: (id, value) => {
				const store = getStore();
				const actions = getActions();
				let valueExist, valueId;
				for (let i = 0; i < store.favoritos.length; i++) {
					if(store.favoritos[i].index === id ){
						valueExist = true
						valueId = i;
					}
				}
				if (valueExist === true) {
					actions.borrarFavorito(valueId)
				} else {
					setStore({favoritos: [...store.favoritos, {index: id, label: value}]})
				}
            },

			borrarFavorito: (id) => {
				const store = getStore();
				setStore({favoritos: [
					...store.favoritos.slice(0, id),
					...store.favoritos.slice(id + 1, store.favoritos.length)
				]})
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
