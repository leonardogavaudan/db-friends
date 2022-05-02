import React from 'react';
import Navbar from './Navbar';

interface Props {
	children: React.ReactChild | React.ReactChild[];
}

const Layout = ({ children }: Props) => {
	return (
		<div className="h-full w-full px-16 pt-7">
			<Navbar className="mb-16" />
			<main>{children}</main>
		</div>
	);
};

export default Layout;
