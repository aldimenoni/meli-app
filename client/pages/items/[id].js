import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import ItemDetails from "../../components/ItemDetails";
import Breadcrumb from "../../components/Breadcrumb";
import Head from "next/head";

const ViewItem = () => {
	const router = useRouter();
	const { id } = router.query;
	const [loading, setLoading] = useState(true);
	const [item, setItem] = useState(true);
	const [description, setDescription] = useState(true);
	const [pathCategories, setPathCategories] = useState([]);
	const [error, setError] = useState("");

	const getItemById = async (url) => {
		try {
			const response = await axios.get(url);
			setItem(response.data);
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
			setError(false);
		}
	};
	const getItemDescription = async (url) => {
		try {
			const response = await axios.get(url);
			setDescription(response.data.description);
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
			setError(error);
		}
	};

	const getPathCategoriesLocal = () => {
		setPathCategories(
			JSON.parse(window.localStorage.getItem("pathCategories"))
		);
	};

	useEffect(() => {
		//immediately invoked function
		(async () => {
			getPathCategoriesLocal();
			getItemById(`http://localhost:4000/items/${id}`);
			getItemDescription(`http://localhost:4000/items/${id}/description`);
		})();
		return setLoading(true);
	}, [id]);

	return (
		<>
			<Head>
				<title>MELI | Detalle de Producto</title>
				<meta
					name="description"
					content="Bienvenido al detalle de producto"
					key="desc"
				/>
				<meta property="og:title" content="MELI | Detalle de Producto" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				></meta>
				<meta
					property="og:description"
					content="Bienvenido al detalle de producto"
				/>
				<meta
					property="og:image"
					content="https://http2.mlstatic.com/static/org-img/homesnw/mercado-libre.png?v=2"
				/>
			</Head>
			{pathCategories ? (
				<Breadcrumb pathCategories={pathCategories}></Breadcrumb>
			) : (
				""
			)}

			{loading ? (
				<p> Cargando... </p>
			) : error ? (
				<p>Error al obtener producto: {error.message}</p>
			) : item && description ? (
				<ItemDetails item={item} description={description}></ItemDetails>
			) : (
				<p className="pt-4">No se encontraron resultados</p>
			)}
		</>
	);
};
export default ViewItem;
