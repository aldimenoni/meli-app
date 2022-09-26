import Image from "next/image";

const SearchResultItem = ({ item }) => {
	return (
		<div className="columns p-0 m-0 search-card">
			<div className="column is-narrow ">
				<Image
					src={item.thumbnail}
					alt=""
					height="180"
					width="180"
					style={{ borderRadius: "4px" }}
				/>
			</div>
			<div className="column pl-0">
				<div className="search-content pt-4">
					<label className="price">
						$ {parseInt(item.price).toLocaleString("es-UY")}
						{item.free_shiping ? (
							<img src="./shipping.png" className="icon ml-4" alt="" />
						) : (
							""
						)}
						<span>{item.city}</span>
					</label>
					<label>{item.title}</label>
				</div>
			</div>
		</div>
	);
};
export default SearchResultItem;
