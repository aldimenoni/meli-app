import BreadcrumbList from "./BreadcrumbList";

const Breadcrumb = ({ pathCategories }) => {
	return pathCategories.length > 0 ? (
		<BreadcrumbList items={pathCategories}></BreadcrumbList>
	) : (
		<div className="no-results"></div>
	);
};

export default Breadcrumb;
