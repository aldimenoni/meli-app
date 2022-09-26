const axios = require("axios");

const getItemsByParams = (req, res) => {
	const query = req.query.q;
	const offset = req.query.offset;
	const limit = req.query.limit;
	const search = { elements: [], path_from_root: [] };
	let params = {
		q: query,
		offset: offset,
		limit: limit,
	};
	axios
		.get(`https://api.mercadolibre.com/sites/MLA/search`, { params: params })
		.then(function (response) {
			if (response.data.filters.length > 0) {
				search.path_from_root =
					response.data.filters[0].values[0].path_from_root;
			}
			for (i of response.data.results) {
				let item = {
					id: i.id,
					thumbnail: i.thumbnail,
					price: i.price,
					title: i.title,
					free_shiping: i.shipping.free_shipping,
					city: i.address.city_name,
				};
				search.elements.push(item);
			}
			res.json(search);
		})
		.catch(function (error) {
			console.log(error);
		});
};

const getItemById = (req, res) => {
	const id = req.params.id;
	axios
		.get(`https://api.mercadolibre.com/items/${id}`)
		.then(function (response) {
			item = {
				id: response.data.id,
				picture: response.data.pictures[0].url,
				title: response.data.title,
				price: response.data.price,
				sold_quantity: response.data.sold_quantity,
				condition: response.data.condition,
			};
			res.json(item);
		})
		.catch(function (error) {
			console.log(error);
		});
};

const getItemDescription = (req, res) => {
	const id = req.params.id;
	axios
		.get(`https://api.mercadolibre.com/items/${id}/description`)
		.then(function (response) {
			let item = {
				description: response.data.plain_text,
			};
			res.json(item);
		})
		.catch(function (error) {
			console.log(error);
		});
};
module.exports = {
	getItemsByParams: getItemsByParams,
	getItemById: getItemById,
	getItemDescription: getItemDescription,
};
