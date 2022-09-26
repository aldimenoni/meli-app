import Image from "next/image";

const { htmlToText } = require("html-to-text");
const ItemDetails = ({ item, description }) => {
	const x = htmlToText(description);
	return (
		<div className="container item-details pt-4">
			<div className="columns is-centered">
				<div className="column is-narrow">
					<Image src={item.picture} alt="" height="680" width="680" />
				</div>
				<div className="column is-one-quarter item-content ">
					{item.condition == "new" ? (
						<label className="condition">
							Nuevo - {item.sold_quantity} vendidos
						</label>
					) : (
						<label className="pb-4 condition">
							Usado - {item.sold_quantity} vendidos
						</label>
					)}
					<h1 className="pt-4">{item.title}</h1>
					<label className="price">
						$ {parseInt(item.price).toLocaleString("es-UY")}
					</label>
					<button className="button">Comprar</button>
				</div>
			</div>
			<div className="description">
				<h2>Descripción del producto</h2>
				{x}
			</div>
		</div>
	);
};
export default ItemDetails;
