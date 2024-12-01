import React, { ReactNode } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className='flex'>
			<Sidebar />
			<main className='w-full'>{children}</main>
		</div>
	);
};

export default Layout;
