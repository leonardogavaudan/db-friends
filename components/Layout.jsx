import Navbar from './Navbar';

const Layout = ({ children }) => {
	return (
		<div className="h-full w-full px-16 pt-8">
			<Navbar className="mb-8" />
			<main>{children}</main>
		</div>
	);
};

export default Layout;
