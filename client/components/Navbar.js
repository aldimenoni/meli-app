import Image from "next/image";
import Link from "next/link";
import SearchInput from "./SearchInput";
const Navbar = () => {
	return (
		<nav className="navbar py-2" role="navigation" aria-label="main navigation">
			<div className="container">
				<div className="navbar-brand mr-4">
					<Link className="navbar-item" href="/">
						<Image
							src="/logo.png"
							style={{ cursor: "pointer" }}
							alt=""
							width="53"
							height="36"
						/>
					</Link>
				</div>
				<SearchInput></SearchInput>
			</div>
		</nav>
	);
};
export default Navbar;
