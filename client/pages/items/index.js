import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import SearchResultItem from "../../components/SearchResultItem";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import Head from "next/head";

const Items = () => {
	const router = useRouter();
	const search = router.query.search;
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");
	const [resultItems, setResultItems] = useState([]);
	const [pathCategories, setPathCategories] = useState([]);

	const getItems = async (url) => {
		try {
			const response = await axios.get(url);
			if (response.status == 200) {
				setResultItems(response.data.elements);
				setPathCategories(response.data.path_from_root);
				savePathCategoriesLocal(response.data.path_from_root);
				setLoading(false);
			}
		} catch (error) {
			console.log(error);
			setLoading(false);
			setError(error);
		}
	};

	const savePathCategoriesLocal = (pathCategories) => {
		localStorage.setItem("pathCategories", JSON.stringify(pathCategories));
	};

	useEffect(() => {
		(async () => {
			getItems(`http://localhost:4000/items?q=${search}&offset=0&limit=4`);
		})();
		return setLoading(true);
	}, []);

	return (
		<>
			<Head>
				<title>MELI | Resultados de busqueda</title>
				<meta
					name="description"
					content="Bienvenido al resultado de busquedas"
					key="desc"
				/>
				<meta property="og:title" content="MELI | Resultados de busqueda" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				></meta>
				<meta
					property="og:description"
					content="Bienvenido al resultado de busquedas"
				/>
				<meta
					property="og:image"
					content="https://http2.mlstatic.com/static/org-img/homesnw/mercado-libre.png?v=2"
				/>
			</Head>
			<Breadcrumb pathCategories={pathCategories}></Breadcrumb>
			<section className="search-results pb-4">
				<div className="container">
					{loading ? (
						<p> Cargando... </p>
					) : error ? (
						<p>Error al obtener resultados: {error.message}</p>
					) : resultItems.length > 0 ? (
						resultItems.map((item) => (
							<Link href={"/items/" + item.id} className="column" key={item.id}>
								<a>
									<SearchResultItem item={item}></SearchResultItem>
								</a>
							</Link>
						))
					) : (
						<p className="pt-4">No se encontraron resultados</p>
					)}
				</div>
			</section>
		</>
	);
};
export default Items;
