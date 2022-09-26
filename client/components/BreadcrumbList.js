const BreadcrumbList = ({ items }) => {
	return (
		<nav
			className="breadcrumb has-succeeds-separator container my-4"
			aria-label="breadcrumbs"
		>
			<ul>
				{items.map((item, i) => {
					if (i !== items.length - 1) {
						return (
							<li key={item.id}>
								<a href="#">{item.name}</a>
							</li>
						);
					} else {
						return (
							<li key={item.id} className="is-active">
								<a href="#" aria-current="page">
									{item.name}
								</a>
							</li>
						);
					}
				})}
			</ul>
		</nav>
	);
};
export default BreadcrumbList;
