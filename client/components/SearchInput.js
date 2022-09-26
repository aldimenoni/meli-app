import Image from "next/image";
import Router from "next/router";
import { useState } from "react";
const SearchInput = () => {
	const [formInput, setFormInputs] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	const handleInput = (event) => {
		let { name, value } = event.target;
		setFormInputs({ ...formInput, [name]: value });
		setSearchTerm(event.target.value);
	};

	const search = async (event) => {
		event.preventDefault();
		Router.push(`/items?search=${searchTerm}`);
	};

	return (
		<form onSubmit={search}>
			<input
				className="input"
				name="searchTerm"
				value={searchTerm}
				onChange={handleInput}
				type="text"
				placeholder="Nunca dejes de buscar"
				required
			></input>
			<button type="submit" className="button">
				<Image src="/search.png" alt="" width="18" height="18" />
			</button>
		</form>
	);
};
export default SearchInput;
